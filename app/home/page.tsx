import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Navbar } from "@/components/home/Navbar";

export default async function HomePage() {
  // Check if user is logged in
  const session = await getServerSession(authOptions);

  // If not logged in, redirect to welcome page
  if (!session) {
    redirect("/auth/welcome");
  }

  return (
    <div className="min-h-screen bg-[#552cb7]">
      <Navbar />
    </div>
  );
}
