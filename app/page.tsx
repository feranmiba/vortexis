import Image from "next/image";
import LoginForm from "./_components/LoginForm";
import Button from "./_components/ui/Button";
import { X } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      <button className="h-8 w-8 rounded-full absolute top-0 right-0 ">
        <X className=" h-4 w-4 text-gray-500" />
      </button>

      <div className="mt-20">
        <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-sm text-secondary-50">Sign in to your account</p>
        <LoginForm />
      </div>
    </div>
  );
}
