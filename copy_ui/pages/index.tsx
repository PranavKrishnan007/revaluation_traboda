import React from 'react';
import NavBar from "../src/components/navbar";
import SideBar from "../src/components/sidebar";
import MainHead from "../src/components/mainhead";

export default function Home() {
  return (
      <div className="flex flex-col h-screen overflow-hidden">
          <NavBar/>
          <div className="flex flex-row">
              <SideBar/>
              <MainHead/>
          </div>
      </div>
  )
}
