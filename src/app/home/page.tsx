"use client";
import { DataTableDemo } from "@/components/Table/Table";
import { useEffect, useState } from "react";

const Home = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  useEffect(() => {
    const isStoredAccessToken = localStorage.getItem("accessToken");
    if (isStoredAccessToken) {
      setAccessToken(isStoredAccessToken);
    }
  }, []);
  return (
    <div className="dark:bg-medium p-8">
      {accessToken ? (
        <DataTableDemo />
      ) : (
        <h1 className="flex justify-center text-7xl duration-75"></h1>
      )}
    </div>
  );
};

export default Home;
