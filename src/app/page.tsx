import React from "react";
import Home from "./home/page";
import MainLayout from "@/layout/MainLayout";

const page = () => {
  return (
    <div>
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
};

export default page;
