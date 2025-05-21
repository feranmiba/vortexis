import LoginForm from "@/components/ui/AuthForm";
import { X } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="max-w-full">
      <Link href="/">
        <button className="absolute hidden lg:block cursor-pointer top-0 right-0 h-8 w-8">
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </Link>

      {/* <div className="bg-bridgeRed text-bridgered">Heeeyyy</div> */}

      <div className="mt-0 px-8 pt-8 md:mt-16 md:px-12 md:pt-0">
        <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-secondary-50 text-sm">Sign in to your account</p>
        <LoginForm type="login" />
      </div>
    </div>
  );
}
