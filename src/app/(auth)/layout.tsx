import "~/styles/globals.css";

import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";

import SessionProviderWrapper from "../_components/CustomSessionProvider";
import {HydrateClient} from "~/trpc/server";
import NavBar from "../_components/Bar/NavBar";

export const metadata: Metadata = {
  title: "Flatmate",
  description: "Shared accomodations",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function AuthLayout({
   children,
 }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="font-sans">
    <body className="">
    <SessionProviderWrapper>
      <TRPCReactProvider>
        <HydrateClient>
          <main className="flex-grow">
            <NavBar></NavBar>
            {children}
          </main>
        </HydrateClient>
      </TRPCReactProvider>
    </SessionProviderWrapper>
    </body>
    </html>
  );
}