"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import React from "react";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type RouteProp = {
  label: string;
  href: string;
};

interface NavbarProps {
  routes?: RouteProp[];
}

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

const Navbar = ({ routes = defaultRoutes }: NavbarProps) => {
  const pathname = usePathname();

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
        <NavigationMenu>
          <NavigationMenuList className="flex gap-[1.25rem]">
            {routes?.map((route) => (
              <NavigationMenuItem
                key={route.href}
                className={`${
                  pathname === route.href &&
                  "border-b-4 border-secondary font-bold"
                } text-[1rem] text-secondary`}
              >
                <Link href={route.href}>{route.label}</Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
