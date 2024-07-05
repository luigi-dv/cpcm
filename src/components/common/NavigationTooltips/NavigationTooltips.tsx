"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import {
  CLIENTS_ROUTE,
  CONTACTS_ROUTE,
  DASHBOARD_ROUTE,
  PRODUCTS_ROUTE,
  PROSPECTS_ROUTE,
  SERVICES_ROUTE,
} from "@/routes";
import {
  Handshake,
  Home,
  Hospital,
  LineChart,
  Package,
  ShoppingCart,
  Target,
  Users2,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { classNames } from "@/utilities/cn";

export const NavigationTooltips = () => {
  const pathname = usePathname();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={DASHBOARD_ROUTE}
            className={classNames(
              pathname == DASHBOARD_ROUTE
                ? "bg-accent text-accent-foreground"
                : "",
              "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
            )}
          >
            <Home className="h-5 w-5" />
            <span className="sr-only">Dashboard</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Dashboard</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={PROSPECTS_ROUTE}
            className={classNames(
              pathname == PROSPECTS_ROUTE
                ? "bg-accent text-accent-foreground"
                : "",
              "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
            )}
          >
            <Handshake className="h-5 w-5" />
            <span className="sr-only">Prospects</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Prospects</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={PRODUCTS_ROUTE}
            className={classNames(
              pathname == PRODUCTS_ROUTE
                ? "bg-accent text-accent-foreground"
                : "",
              "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
            )}
          >
            <Package className="h-5 w-5" />
            <span className="sr-only">Products</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Products</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={CLIENTS_ROUTE}
            className={classNames(
              pathname == CLIENTS_ROUTE
                ? "bg-accent text-accent-foreground"
                : "",
              "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
            )}
          >
            <Hospital className="h-5 w-5" />
            <span className="sr-only">Clients</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Clients</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={CONTACTS_ROUTE}
            className={classNames(
              pathname == CONTACTS_ROUTE
                ? "bg-accent text-accent-foreground"
                : "",
              "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
            )}
          >
            <Users2 className="h-5 w-5" />
            <span className="sr-only">Contacts</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Contacts</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={SERVICES_ROUTE}
            className={classNames(
              pathname == SERVICES_ROUTE
                ? "bg-accent text-accent-foreground"
                : "",
              "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
            )}
          >
            <Target className="h-5 w-5" />
            <span className="sr-only">Services</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Services</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
