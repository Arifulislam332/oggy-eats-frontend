"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from "./ui/sheet";

const MobileNav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-pink-500" />
      </SheetTrigger>
      <SheetContent className="space-y-5">
        <SheetTitle>Navigation</SheetTitle>
        <SheetDescription className="flex">
          <Button
            onClick={async () => loginWithRedirect()}
            className="font-bold flex-1 bg-pink-500"
          >
            Log in
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
