"use client";
// due to this use client , whatever chages we are doing it will work , like bttn clicking 

import { OrganizationSwitcher } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["900"],
});

const Org_sidebar = () => {


  // in this , we are getting the value of the favorite in the url  , true or false
  const searchparams= useSearchParams();
  const favorite = searchparams.get("favorite");

  return (
    <div className="hidden lg:flex flex-col pt-4 pl-5 space-y-6 w-[206px]">
      {/* this is the logo of the app */}
      <Link href="#">
        <div className="flex flex-row justify-start ">
          <Image src="/logoo.svg" alt="app logo" width={50} height={50} />
          <span className="flex justify-center self-center pl-1 font-bold font-Poppins">
            {" "}
            Boardy
          </span>
        </div>
      </Link>

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

      <div className="space-y-2 w-full">
        {/* button showing selected organisation boards, shadcm bttn  */}
        <Button
          asChild
          variant={favorite ? ('ghost'): ("secondary")}
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Team boards
          </Link>
        </Button>


        {/* button showing selected organisation favorite boards , shadcn bttn  */}
        <Button
          asChild
          variant={favorite? ("secondary"):("ghost")}
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href={{
            pathname: '/',
            query: {favorite:true}
          }}>
            <Star className="h-4 w-4 mr-2" />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Org_sidebar;
