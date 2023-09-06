import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/lib/provider";
import SideNavbar from "../components/tasks/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { Toast } from "@/components/ui/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "simple todo app to learn next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <SideNavbar />
          <main>{children}</main>
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
