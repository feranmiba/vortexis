import Image from "next/image";
import LoginForm from "./_components/LoginForm";
import Button from "./_components/ui/Button";
import { X } from "lucide-react";

export default function Home() {
  return (
    <div className=" max-w-full">
      <button className="h-8 w-8 absolute top-0 right-0 ">
        <X className=" h-5 w-5 text-gray-500" />
      </button>

      <div className="md:mt-16 mt-0 px-8 md:px-12">
        <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-sm text-secondary-50">Sign in to your account</p>
        <LoginForm />
      </div>
    </div>
  );
}
