import Prop from "@/common/prop";
import React from "react";

const Layout: React.FC<Prop.Children> = ({children}) => {
  return (
    <div>
      <header>Header</header>
      <div className="container flex">
        <aside>Sidebar</aside>
        <main>{children}</main>
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
