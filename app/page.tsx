"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-base-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Framely</h1>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          className="btn btn-primary"
          onClick={() => router.push("/sign-in")}
        >
          Sign In
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => router.push("/sign-up")}
        >
          Sign Up
        </button>
        <button
          className="btn btn-outline"
          onClick={() => router.push("/home")}
        >
          Home
        </button>
      </div>
    </main>
  );
}
       