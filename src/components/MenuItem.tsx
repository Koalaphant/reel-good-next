import Link from "next/link";
import { ComponentType } from "react";

// Define an interface for icon components that can accept className and size
interface IconProps {
  className?: string; // Optional className prop
  size?: number; // Optional size prop
}

// Update the MenuItemProps interface to reflect that Icon can accept className and size
interface MenuItemProps {
  title: string;
  address: string;
  Icon: ComponentType<IconProps>; // Icon now expects IconProps
}

export default function MenuItem({ title, address, Icon }: MenuItemProps) {
  return (
    <div>
      <Link href={address} className="hover:text-amber-500">
        {/* Pass className here */}
        <Icon className="text-2xl sm:hidden" />
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
      </Link>
    </div>
  );
}
