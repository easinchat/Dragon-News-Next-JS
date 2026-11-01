"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "border-b-2 border-primary text-primary"
          : "border-b-2 border-transparent"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navlink;
