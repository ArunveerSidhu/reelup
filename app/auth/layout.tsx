export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-[#552cb7] items-center justify-center min-h-screen w-screen">
      {children}
    </div>
  );
}