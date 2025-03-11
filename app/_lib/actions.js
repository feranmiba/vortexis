"use client";

import { signIn, signOut } from "next-auth/react";

export async function signInGoogleAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signInGithubAction() {
  await signIn("github", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
