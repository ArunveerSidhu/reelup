"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();
  const handleLogout = async () => {
    await signOut();
    router.push("/auth/welcome");
  };
  return (
    <button onClick={handleLogout}>Logout</button>
  );
}
