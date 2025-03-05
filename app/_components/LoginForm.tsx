"use client";

import { useState } from "react";
import Button from "./ui/Button";
import { Mail, Lock, Eye, EyeOff, X } from "lucide-react";
import Link from "next/link";
import Input from "./ui/Input";
import Divider from "./ui/Divider";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="mt-5 space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            <Mail className="mt-2 h-4 w-4 text-gray-400" />
          </div>
          <Input id="email" type="email" placeholder="donnalee@example.com" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            <Lock className="h-4 w-4 text-gray-400" />
          </div>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            icon="two"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-gray-400" />
            ) : (
              <Eye className="h-4 w-4 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <input type="checkbox" />
          <label
            htmlFor="remember"
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </label>
        </div>
        <Link
          href="#"
          className="text-sm font-medium text-blue-500 hover:text-blue-600"
        >
          Forgot Password
        </Link>
      </div>

      <Button type="primary">Sign In</Button>

      <Divider>or</Divider>

      <Button
        type="secondary"
        className="relative flex w-full items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="absolute left-3 h-5 w-5"
        >
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
          <path fill="none" d="M1 1h22v22H1z" />
        </svg>
        Sign in with Google
      </Button>

      <div className="text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link href="#" className="font-medium text-[#009AFF]">
          Sign up
        </Link>
      </div>
      <div className="bg-try">Heyyy</div>
    </form>

    //   </div>
    // </div>
  );
}
