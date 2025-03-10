import Image from "next/image";
import LoginForm from "./_components/LoginForm";
import Button from "./_components/ui/Button";
import { X } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-full">
      <button className="absolute top-0 right-0 h-8 w-8">
        <X className="h-5 w-5 text-gray-500" />
      </button>

      <div className="bg-bridgeRed text-bridgered">Heeeyyy</div>

      <div className="mt-0 px-8 md:mt-16 md:px-12">
        <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-secondary-50 text-sm">Sign in to your account</p>
        <LoginForm />
      </div>
    </div>
  );
}
