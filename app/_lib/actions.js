"use client";

import { signIn, signOut } from "next-auth/react";

export async function signInGoogleAction() {
  await signIn("google", { callbackUrl: "/login" });
}
export async function signInGithubAction() {
  await signIn("github", { callbackUrl: "/login" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
