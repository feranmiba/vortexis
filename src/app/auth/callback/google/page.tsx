"use client";

import { Suspense } from "react";
import GoogleCallbackPageContent from "./GoogleCallbackPageContent";

export default function GoogleCallbackPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GoogleCallbackPageContent />
    </Suspense>
  );
}
