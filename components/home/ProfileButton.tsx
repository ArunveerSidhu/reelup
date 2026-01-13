"use client";

import { useState, useRef, useEffect } from "react";
import avatar from "@/public/images/avatar.png";
import Image from "next/image";
import { signOut } from "next-auth/react";

export const ProfileButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/auth/welcome",
      redirect: true,
    });
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((v) => !v)}
        className="h-14 rounded-full border-black border-b-4 cursor-pointer active:scale-95"
      >
        <Image
          src={avatar}
          alt="user-avatar"
          className="h-full w-auto rounded-full"
        />
      </button>

      {open && (
        <div className="absolute mt-2 w-40 rounded-none bg-[#FB7da8] border-black border-b-5 border-r-4 border-l-2 border-t-2">
          <MenuItem label="View Profile" />
          <MenuItem label="Settings" />
          <MenuItem label="Logout" onClick={handleLogout} />
        </div>
      )}
    </div>
  );
};

interface MenuItemProps {
  label: string;
  onClick?: () => void;
}

const MenuItem = ({ label, onClick }: MenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full leading-tight px-4 py-2 text-left font-lato text-lg hover:bg-[#fd5a46] cursor-pointer transition-colors"
    >
      {label}
    </button>
  );
};
