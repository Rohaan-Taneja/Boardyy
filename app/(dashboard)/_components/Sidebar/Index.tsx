"use client";

import List_Org from "./List_Org";
import New_Button from "./New-Button";

const Sidebar = () => {
  return (
    <aside
    className="fixed z-1 left-0 bg-blue-950 text-white h-full
    w-[60px] flex flex-col pl-auto pr-auto items-center text-center"
  >
    <List_Org />
    <New_Button />
  </aside>
  
  );
};

export default Sidebar;
