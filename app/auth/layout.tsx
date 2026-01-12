export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-[#552cb7] items-center justify-center h-screen">
      {children}
    </div>
  );
}