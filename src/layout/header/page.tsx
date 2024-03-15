"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/logoD.png";
import { useEffect, useState } from "react";
const Header = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      setAccessToken(token);
    }
  }, []);
  return (
    <div className="flex items-center justify-between border-b-2 p-4">
      <div className="flex items-center">
        <a href="/" className="mr-2 flex items-center">
          <Image
            src={logo}
            alt="logo"
            height={200}
            width={200}
            className="object-cover"
          />
        </a>
        <a href="/about">About</a>
      </div>
      <div className="flex gap-2">
        {accessToken ? (
          <Image
            src="https://www.svgrepo.com/show/348179/language.svg"
            alt="world"
            height={50}
            width={50}
            className="object-cover cursor-pointer"
          />
        ) : (
          <a href="/signin">
            <Button size="sm">Sign In</Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
