'use client'

type AuthInputProps = {
  label?: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function AuthInput({ label, type, placeholder, value, onChange }: AuthInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-lato font-bold text-xs md:text-sm">{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange?.(e.target.value)} className="w-full p-2 md:p-2 text-sm md:text-base rounded-md border-b-4 border-r-4 border-l-2 border-t border-black leading-tight active:outline-none focus:outline-none font-lato" />
    </div>
  )
}