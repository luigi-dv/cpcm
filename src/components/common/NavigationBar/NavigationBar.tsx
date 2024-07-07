import Link from "next/link";
import { DASHBOARD_ROUTE } from "@/routes";
import { Package2 } from "lucide-react";
import { NavigationTooltips } from "@/components/common/NavigationTooltips";

export const NavigationBar = () => {
  return (
    <nav className="flex flex-col items-center gap-4 px-2 py-4">
      <Link
        href={DASHBOARD_ROUTE}
        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
      >
        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <NavigationTooltips />
    </nav>
  );
};
