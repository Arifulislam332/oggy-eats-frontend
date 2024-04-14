"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserMenu from "./UserMenu";

const DesktopNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <Button
          onClick={async () => loginWithRedirect()}
          variant="ghost"
          className="font-bold hover:text-pink-500 hover:bg-white"
        >
          Log in
        </Button>
      )}
    </div>
  );
};

export default DesktopNav;
