import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-pink-500 mt-20">
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between container py-10">
        <Link href="/" className="text-2xl font-bold text-white">
          Oggy eats
        </Link>
        <div className="flex items-center underline text-white gap-5 font-medium">
          <Link href="/">About</Link>
          <Link href="/">Contact us</Link>
          <Link href="/">Privacy and policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;