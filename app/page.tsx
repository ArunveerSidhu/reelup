import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  if (session) {
    // User is logged in, redirect to home
    redirect("/home");
  } else {
    // User is not logged in, redirect to welcome
    redirect("/auth/welcome");
  }
}
