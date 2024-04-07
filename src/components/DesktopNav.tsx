import { Button } from "./ui/button";

const DesktopNav = () => {
  return (
    <div>
      <Button
        variant="ghost"
        className="font-bold hover:text-pink-500 hover:bg-white"
      >
        Log in
      </Button>
    </div>
  );
};

export default DesktopNav;
