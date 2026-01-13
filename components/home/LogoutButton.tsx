"use client";

import { signOut } from "next-auth/react";
import CustomButton from "@/components/ui/CustomButton";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({ 
      callbackUrl: "/auth/welcome",
      redirect: true 
    });
  };

  return (
    <CustomButton 
      title="Logout"
      onPress={handleLogout}
      variant="secondary"
    />
  );
}

