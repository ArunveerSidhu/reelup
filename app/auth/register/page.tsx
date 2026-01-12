'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthInput from '@/components/auth/AuthInput';
import CustomButton from '@/components/ui/CustomButton';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  
  // State to store form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  // State for loading and errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async () => {
    // Clear previous errors
    setError('');
    
    // Validate inputs
    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    setLoading(true);
    
    try {
      // Call your signup API
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        // If error from backend
        setError(data.error || 'Something went wrong');
        return;
      }
      
      // Success! Redirect to login
      router.push('/home');
      
    } catch (err) {
      setError('Network error. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#ffc567] py-10 w-11/12 md:w-1/2 rounded-2xl border-b-4 border-r-4 border-l-2 border-t border-black">
      <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-old-standard font-bold italic text-2xl md:text-4xl">Create an account</h1>
          
          {/* Show error message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          
          <div className="w-full md:w-5/6 flex flex-col gap-4">
            <AuthInput 
              label="Name" 
              type="text" 
              placeholder="username"
              value={formData.username}
              onChange={(value) => setFormData({...formData, username: value})}
            />
            <AuthInput 
              label="Email" 
              type="email" 
              placeholder="email"
              value={formData.email}
              onChange={(value) => setFormData({...formData, email: value})}
            />
            <AuthInput 
              label="Password" 
              type="password" 
              placeholder="password"
              value={formData.password}
              onChange={(value) => setFormData({...formData, password: value})}
            />
            <AuthInput 
              label="Confirm Password" 
              type="password" 
              placeholder="confirm password"
              value={formData.confirmPassword}
              onChange={(value) => setFormData({...formData, confirmPassword: value})}
            />
          </div>
          
          <p className="font-lato font-bold text-sm text-left">
            Already have an account? <Link href="/auth/login"><span className="text-[#552cb7]">Login</span></Link>
          </p>
          
          <div className="flex justify-center">
            <CustomButton 
              title={loading ? "Creating..." : "Create Account"} 
              onPress={handleSubmit} 
              variant="secondary"
              disabled={loading}
            />
          </div>
        </div>
      </div>
    </div>
  )
}