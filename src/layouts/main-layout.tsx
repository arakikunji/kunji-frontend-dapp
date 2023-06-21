import { NavBar } from "@/components/NavBar";
import React from "react";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <div className="overlay-1" />
      <div className="overlay-2" />
      <div className="relative h-full w-full bg-transparent px-[72px]">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
