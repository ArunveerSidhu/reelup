'use client'
import AuthInput from '@/components/auth/AuthInput';
import CustomButton from '@/components/ui/CustomButton';
import Link from 'next/link';


export default function page() {
  return (
    <div className="bg-[#ffc567] py-10 w-11/12 md:w-1/2 rounded-2xl border-b-4 border-r-4 border-l-2 border-t border-black">
      <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-old-standard font-bold italic text-2xl md:text-4xl">Create an account</h1>
          <div className="w-full md:w-5/6 flex flex-col gap-4">
            <AuthInput label="Name" type="text" placeholder="username" />
            <AuthInput label="Email" type="email" placeholder="email" />
            <AuthInput label="Password" type="password" placeholder="password" />
            <AuthInput label="Confirm Password" type="password" placeholder="confirm password" />
          </div>
          <p className="font-lato font-bold text-sm text-left">Already have an account? <Link href="/auth/login"><span className="text-[#552cb7]">Login</span></Link></p>
          <div className="flex justify-center">
            <CustomButton 
              title="Create Account" 
              onPress={() => {}} 
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}