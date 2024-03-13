"use client";

import { OrganizationSwitcher, UserButton , useOrganization } from "@clerk/nextjs";
import Search_Input from "./Search_Input";
import Invite_Button from "./Invite_Button";

const Navbar = () => {

  const { organization } = useOrganization();
  return (
    <div className="flex flex-row h-[50px] items-center p-8 gap-x-4">
      <div className="hidden lg:flex lg:flex-1">
        <Search_Input />
      </div>

      {/* this will be displayed , if screen width is less than lg  */}
      <div className="block lg:hidden flex-1">

        {/* this is the clerk feature , and it will display ,
       which organisation is currently active/clicked from Org_sidebar */}
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "376px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
      </div>
      
      {/* if any organization is selected , then only this invite button will be displayed  */}
      {organization && (<Invite_Button />)}
      
      <UserButton />
    </div>
  );
};

export default Navbar;
