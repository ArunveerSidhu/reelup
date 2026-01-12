'use client'

import AuthInput from "@/components/auth/AuthInput";
import CustomButton from "@/components/ui/CustomButton";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";


export default function page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
      if (result?.error) {
        setError(result.error);
      } else {
        router.push('/home');
      }
    } catch (error) {
      setError('An error occurred during login');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (

    <div className="bg-[#ffc567] py-10 w-11/12 md:w-1/2 rounded-2xl border-b-4 border-r-4 border-l-2 border-t border-black">
      <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-old-standard font-bold italic text-2xl md:text-4xl">Login to your account</h1>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          <div className="w-full md:w-5/6 flex flex-col gap-4">
          <AuthInput label="Email" type="email" placeholder="Enter your email" value={formData.email} onChange={(value) => setFormData({...formData, email: value})} />
          <AuthInput label="Password" type="password" placeholder="Enter your password" value={formData.password} onChange={(value) => setFormData({...formData, password: value})} />
          </div>
          <p className="font-lato font-bold text-sm text-left">Don't have an account? <Link href="/auth/register"><span className="text-[#552cb7]">Sign up</span></Link></p>
          <div className="flex justify-center">
            <CustomButton
              disabled={loading}
              title={loading ? "Logging in..." : "Login"} 
              onPress={handleLogin} 
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}