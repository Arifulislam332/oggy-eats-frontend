"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { Menu } from "lucide-react";
import MenuNavLinks from "./MenuNavLinks";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-pink-500" />
      </SheetTrigger>
      <SheetContent className="space-y-5">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={user?.picture} />
                <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{user?.name}</span>
            </span>
          ) : (
            <span>Navigation</span>
          )}
        </SheetTitle>
        <SheetDescription className="flex">
          {isAuthenticated ? (
            <MenuNavLinks />
          ) : (
            <Button
              onClick={async () => loginWithRedirect()}
              className="font-bold flex-1 bg-pink-500"
            >
              Log in
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
