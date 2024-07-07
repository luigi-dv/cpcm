"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavigationBreadcrumb = () => {
  const pathname = usePathname();
  const items = pathname.split("/").filter((item) => item !== "");
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {items.map((item, index) => (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={items.slice(0, index + 1).join("/") || "/"}
                  className="capitalize"
                >
                  {item}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {items.length - 1 !== index && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
