import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Handshake,
  Home,
  Hospital,
  Package,
  Package2,
  PanelLeft,
  Users2,
} from "lucide-react";
import Link from "next/link";
import {
  CLIENTS_ROUTE,
  CONTACTS_ROUTE,
  DASHBOARD_ROUTE,
  PRODUCTS_ROUTE,
  PROSPECTS_ROUTE,
} from "@/routes";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">AVC Clients</span>
          </Link>
          <Link
            href={DASHBOARD_ROUTE}
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href={PROSPECTS_ROUTE}
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Handshake className="h-5 w-5" />
            Prospects
          </Link>
          <Link
            href={PRODUCTS_ROUTE}
            className="flex items-center gap-4 px-2.5 text-foreground"
          >
            <Package className="h-5 w-5" />
            Products
          </Link>
          <Link
            href={CONTACTS_ROUTE}
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Hospital className="h-5 w-5" />
            Contacts
          </Link>
          <Link
            href={CLIENTS_ROUTE}
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Users2 className="h-5 w-5" />
            Clients
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
