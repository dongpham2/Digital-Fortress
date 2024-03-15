"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/logoD.png";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      setAccessToken(token);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    setAccessToken(null);
    router.push("/signin");
  };

  return (
    <div className="flex items-center justify-between border-b-2 p-4 dark:bg-dark">
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
        <a href="/about" className="dark:text-white">
          About
        </a>
      </div>
      <div className="flex gap-4 items-center">
        <ThemeToggle />
        <Image
          src="https://www.svgrepo.com/show/348179/language.svg"
          alt="world"
          height={50}
          width={50}
          className="object-cover cursor-pointer"
        />
        {accessToken ? (
          <div className="flex gap-4 items-center">
            <Button size="sm" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
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
