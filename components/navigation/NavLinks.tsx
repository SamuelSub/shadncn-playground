import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Link from "next/link";

type RouteProp = {
  label: string;
  href: string;
};

interface NavbarProps {
  routes?: RouteProp[];
}

const NavLinks = ({ routes }: NavbarProps) => {
  const underlineRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);
  const pathname = usePathname();

  const getPositionOfCurrentNavigationLink = (routeIndex: number) => {
    const clickedRouteHref = routes?.[routeIndex]?.href || "";
    const navigationLinkElement = document.getElementById(clickedRouteHref);

    const firstLink = document.getElementById(routes?.[0].href || "");

    if (!navigationLinkElement || !firstLink || !underlineRef.current) return;

    const startingPositionOfFirstLink = firstLink.getBoundingClientRect().left;

    const startingPositionOfNavigationLink =
      navigationLinkElement.getBoundingClientRect().left;

    underlineRef.current.style.transform = `translateX(${
      startingPositionOfNavigationLink - startingPositionOfFirstLink
    }px)`;
    underlineRef.current.style.width = `${navigationLinkElement.clientWidth}px`;
    underlineRef.current.style.opacity = "1";
  };

  useEffect(() => {
    if (!isFirstRender.current) return;

    const initialRouteIndex = routes?.findIndex(
      (route) => route.href === pathname
    );
    if (!initialRouteIndex) return;
    getPositionOfCurrentNavigationLink(initialRouteIndex);
    isFirstRender.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col gap-[0.2rem] relative">
        <div className="flex gap-[1.25rem]">
          {routes?.map((route, index) => {
            return (
              <NavigationMenuItem
                id={route.href}
                key={route.href}
                className={`text-[1rem] text-secondary`}
              >
                <Link
                  href={route.href}
                  onClick={() => getPositionOfCurrentNavigationLink(index)}
                >
                  <div className="relative w-[calc(100%_+_25px)]">
                    <span className="opacity-0">{route.label}</span>
                    <span
                      className={`absolute left-0 top-0 transition-all duration-100 ${
                        route.href === pathname && "font-bold"
                      }`}
                    >
                      {route.label}
                    </span>
                  </div>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </div>
        <div className="relative w-full mb-[4px]">
          <div
            ref={underlineRef}
            className="absolute opacity-0 w-[60px] h-[4px] bg-secondary left-0 rounded-[30px] transition-all duration-300"
          ></div>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
