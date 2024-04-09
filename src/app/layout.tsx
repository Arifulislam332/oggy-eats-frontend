import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Oggy Eats",
  description: "Foods ordering web app.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
