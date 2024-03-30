import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";
const NavigationBar = () => {
  const links = [
    { label: "Dasboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex mx-4 border-b h-14 space-x-6 mb-5 items-center">
      <Link
        className="text-zinc-500 hover:text-zinc-800 transition-colors"
        href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => {
          return (
            <Link
              key={link.href}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
              href={link.href}>
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationBar;