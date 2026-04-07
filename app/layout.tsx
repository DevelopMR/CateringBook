import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "CateringBook",
  description: "Simple catering booking requests for local lunch service.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 px-4 py-10 sm:px-6">
            <div className="mx-auto w-full max-w-5xl">{children}</div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
