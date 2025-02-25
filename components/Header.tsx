import Link from "next/link";
import React from "react";
import Logo from "./element/Logo";
import LogoContainer from "./element/LogoContainer";
import { Nav } from "./element/Nav";
import Setting from "./element/Setting";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border))] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center h-16 justify-between px-4 sm:px-6 lg:px-8">
        {/* setting */}
        <Setting />
        {/* nav link  */}
        <Nav />
        {/* Logo SVG */}
        <LogoContainer title="visify" />
      </div>
    </header>
  );
};

export default Header;
