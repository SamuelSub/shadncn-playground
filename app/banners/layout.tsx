"use client";
import type { Metadata } from "next";
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
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Delete,
  Plus,
  Search,
  SlidersVertical,
  Trash2,
} from "lucide-react";
import { Input } from "@/components/ui/input";

// export const metadata: Metadata = {
//   title: "Banners",
// };

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex justify-between items-center bg-muted-foreground px-[2rem] py-[0.6rem] text-secondary">
        <h4>150 Results</h4>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-[1.25rem]">
            <NavigationMenuItem>
              <div className="flex justify-center items-center gap-[10px]">
                <Search />
                <Input
                  type="search"
                  placeholder="Search name of  the campaign"
                  className="bg-transparent w-[260px] border-none placeholder:text-secondary placeholder:text-[1rem]"
                />
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">
                <Trash2 className="mr-2" />
                Delete
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">
                <ChevronDown className="mr-2" />
                Download
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">
                <Plus className="mr-2" />
                Upload Banner
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">
                <SlidersVertical className="mr-2" />
                Filter Campaigns
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {children}
    </div>
  );
}
