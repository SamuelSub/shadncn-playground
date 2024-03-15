"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, Search } from "lucide-react";
import NavLinks from "./NavLinks";

const defaultRoutes = [
  {
    label: "Banners",
    href: "/banners",
  },
  {
    label: "Rankings",
    href: "/rankings",
  },
  {
    label: "Schedule",
    href: "/schedule",
  },
  {
    label: "A/B Tests",
    href: "/ab",
  },
];

const Navbar = () => {
  return (
    <nav className="shadow-md relative pb-[3px]">
      <div className="flex justify-between px-[2rem] pt-[1.18rem] pb-[0.6rem]">
        <div className="flex gap-[2.5rem] items-center">
          <Avatar className="w-[3.5rem] h-[3.5rem] ">
            <AvatarFallback className="bg-primary text-white text-4xl font-[1000]">
              T
            </AvatarFallback>
          </Avatar>
          <div className="flex gap-[1.625rem]">
            <Badge className="rounded-[4px] bg-primary-foreground text-primary text-[18px]">
              XL Banner
            </Badge>
            <h4 className="font-bold text-[1.125rem]">Vendor Swimlane</h4>
          </div>
        </div>
        <div className="flex gap-[1.68rem]">
          <Avatar className="flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-third-foreground">
            <Bell fill="black" />
          </Avatar>
          <Avatar className="flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-muted-foreground">
            <Search />
          </Avatar>
          <Avatar className="w-[3.5rem] h-[3.5rem]">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </div>
      </div>
      <div className="pl-[8.9rem]">
        <NavLinks routes={defaultRoutes} />
      </div>
    </nav>
  );
};

export default Navbar;
