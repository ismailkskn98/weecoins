import React from "react";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Ekosystem", href: "/ekosystem" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full h-full flex items-center justify-center ">
      {navItems.map((item) => (
        <a key={item.name} href={item.href} className="mx-2">
          {item.name}
        </a>
      ))}
    </nav>
  );
}
