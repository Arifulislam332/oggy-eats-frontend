import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-pink-500 py-5">
      <div className="flex items-center justify-between container mx-auto">
        <Link href="/" className="text-2xl font-bold text-pink-500">
          Oggy eats
        </Link>
        <div className="hidden md:block">
          <DesktopNav />
        </div>
        <div className="block md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
