import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Moinuddin Quazi",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assests/logo/logo.jpg"
          type="image/jpg"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <Analytics/>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "19px",
              padding: "9px",
            },
          }}
        />
        {children}
        <Sidebar />
        <Footer />
      </body>
    </html>
  );
}
