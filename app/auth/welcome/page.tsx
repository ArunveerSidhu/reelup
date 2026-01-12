"use client";

import CustomButton from "@/components/ui/CustomButton";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const handleLoginPress = () => {
    router.push("/auth/login");
  };
  const handleSignUpPress = () => {
    router.push("/auth/register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4">
      <div className="bg-[#ffc567] py-10 w-11/12 md:w-1/2 rounded-2xl border-b-4 border-r-4 border-l-2 border-t border-black">
        <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-8">
          <h1 className="font-lato font-bold text-2xl md:text-4xl text-center">
            Welcome to <span className="font-old-standard italic">Reelup!</span>
            <br />
            <p className="font-old-standard font-light text-right text-base md:text-lg italic mt-2">
              -a social network for cinephiles.
            </p>
          </h1>

          <div className="flex flex-col md:flex-row gap-4">
            <CustomButton
              title="Login"
              onPress={handleLoginPress}
              variant="primary"
            />
            <CustomButton
              title="Sign Up"
              onPress={handleSignUpPress}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
