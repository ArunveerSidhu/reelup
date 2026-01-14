import Image from "next/image";
import logo from "@/public/images/logo.png";
import { ProfileButton } from "./ProfileButton";
import { NavButton } from "./NavButton";

export const Navbar = () => {
  return (
    <div className="py-4 bg-[#ffc567] border-b-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center">
        <Image src={logo} alt="brand-logo" className="h-10 w-auto cursor-pointer" />
        <div className="flex flex-row gap-x-2 sm:gap-x-4 items-center justify-center">
          <NavButton title="connect" />
          <NavButton title="collections" />
          <NavButton title="activity" />
          <NavButton title="discover" />
          <ProfileButton />
        </div>
      </div>
    </div>
  );
};
