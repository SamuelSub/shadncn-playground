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
import { Input, EfoodInput } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
                  className="bg-transparent w-[270px] border-none placeholder:text-secondary placeholder:text-[1rem]"
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
            <Sheet>
              <Button variant="ghost" asChild>
                <SheetTrigger>
                  <Plus className="mr-2" />
                  <NavigationMenuItem>Upload Banner</NavigationMenuItem>
                </SheetTrigger>
              </Button>
              <SheetContent
                onOpenAutoFocus={(e) => e.preventDefault()}
                className="px-[3rem]"
              >
                <div className="flex h-full gap-[2rem]">
                  <div>
                    <SheetHeader>
                      <SheetTitle>Assets</SheetTitle>
                    </SheetHeader>
                    <div>
                      <EfoodInput label="Name Of Campaign" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <SheetHeader>
                        <SheetTitle>Info</SheetTitle>
                      </SheetHeader>
                      <div>
                        <EfoodInput label="Name Of Campaign" />
                      </div>
                    </div>
                    <SheetFooter>
                      <Button
                        className="w-full py-6 text-secondary font-bold bg-muted-foreground"
                        variant="ghost"
                      >
                        Cancel
                      </Button>
                      <Button className="w-full py-6 text-secondary font-bold">
                        Save
                      </Button>
                    </SheetFooter>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
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
