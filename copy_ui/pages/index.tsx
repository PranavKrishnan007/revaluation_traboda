import React from 'react';
import NavBar from "../src/components/navbar";
import SideBar from "../src/components/sidebar";

export default function Home() {
  return (
      <div className="flex flex-col">
          <NavBar/>
          <SideBar/>
          {/*<ResponsiveDrawer/>*/}
          {/*<div className="p-7"><h1>home page</h1></div>*/}
          {/*/!*<div className="flex-none">*!/*/}
          {/*/!*    <SideNavbar/>*!/*/}
          {/*/!*</div>*!/*/}
          {/*/!*<div className="flex-1">*!/*/}
          {/*/!*    <TopBar/>*!/*/}
          {/*/!*</div>*!/*/}
      </div>
  )
}
