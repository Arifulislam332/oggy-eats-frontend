import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import { Button } from "./ui/button";

const MenuNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <div className="w-full flex flex-col gap-3">
      <Link href="/user-profile" className="hover:text-pink-500">
        User Profile
      </Link>
      <Button onClick={() => logout()} className="font-bold flex-1 bg-pink-500">
        Log Out
      </Button>
    </div>
  );
};

export default MenuNavLinks;
