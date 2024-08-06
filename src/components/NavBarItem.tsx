"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

// Define the props for the NavBarItem component
interface NavBarItemProps {
  title: string;
  param: string;
}

// Functional component with props
function NavBarItem({ title, param }: NavBarItemProps) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavBarItem;
