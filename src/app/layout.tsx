import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Nunito } from "next/font/google";
import "./globals.css";
import MyAuth0Provider from "@/providers/MyAuth0Provider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Oggy Eats",
  description: "Foods ordering web app.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <MyAuth0Provider>
        <html lang="en" className="scroll-smooth">
          <body className={nunito.className}>
            <main className="flex flex-col min-h-screen">
              <Header />
              <div className="flex-1">{children}</div>
            </main>
            <Footer />
          </body>
        </html>
      </MyAuth0Provider>
    </ReactQueryProvider>
  );
};

export default RootLayout;
