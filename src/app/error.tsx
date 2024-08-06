"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error; // The error object
  reset: () => void; // Function to reset/retry the error boundary
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10 flex flex-col gap-2">
      <h1 className="bg-red-800 p-4 max-w-md mx-auto">
        Something went wrong! Please try again.
      </h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
