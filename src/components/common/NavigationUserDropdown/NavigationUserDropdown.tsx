import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Avatar from "boring-avatars";
import Link from "next/link";
import { SETTINGS_ROUTE } from "@/routes";
import { auth, signOut } from "@/auth";

export const NavigationUserDropdown = async () => {
  const session = await auth();
  if (!session) return <></>;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <Avatar
            size={40}
            name={session.user?.name ?? "User"}
            variant="marble"
            colors={["#FF6B6B", "#4ECDC4", "#FFCE54", "#AC92EB", "#A0D568"]}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href={SETTINGS_ROUTE}>Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Sign Out</button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
