import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import NavBar from "./_components/Bar/NavBar";
import Footer from "./_components/Bar/Footer";
import Layout from "./_components/Container/Layout";
import { SessionProvider } from "next-auth/react";
import ClientSessionProvider from "./_components/CustomSessionProvider";

export const metadata: Metadata = {
  title: "Flatmate",
  description: "Shared accomodations",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ClientSessionProvider>
          <TRPCReactProvider>
            <Layout>
              {children}
            </Layout>
          </TRPCReactProvider>
        </ClientSessionProvider>
      </body>
    </html>
  );
}
