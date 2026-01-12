'use client'

import { ReactNode } from 'react';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
};

export default function CustomButton({ 
  title, 
  onPress, 
  variant = 'primary',
  disabled = false,
  className = '',
  icon
}: ButtonProps) {
  const baseStyles = 'px-4 py-2.5 rounded-lg font-lato font-bold transition-all duration-200 border-b-4 border-r-4 border-l-2 border-t-2 border-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-[#ffc567] hover:bg-[#ffb847] active:translate-y-1 active:border-b-2',
    secondary: 'bg-[#552cb7] text-white hover:bg-[#4423a0] active:translate-y-1 active:border-b-2',
    outline: 'bg-white hover:bg-gray-50 active:translate-y-1 active:border-b-2'
  };

  return (
    <button 
      onClick={onPress}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {title}
      {icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
}
