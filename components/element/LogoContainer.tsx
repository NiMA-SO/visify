import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const LogoContainer = ({title} : {title: string}) => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="text-xl font-bold ml-2 tracking-wider text-[hsl(var(--foreground))]">
        {title}
      </span>
      <div className="text-[hsl(var(--primary))]">
        <Logo />
      </div>
    </Link>
  );
};

export default LogoContainer;
