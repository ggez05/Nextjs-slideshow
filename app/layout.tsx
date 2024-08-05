import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slideshow",
  description:
    "A simple slideshow app that can be configurable by json. Change the data you want to see in the json file and run your own slideshow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        height: "100%",
      }}
    >
      <Head>
        <link rel="icon" href="/app/favicon.ico" />
      </Head>
      <body
        className={inter.className}
        style={{
          height: "100%",
        }}
      >
        {children}
      </body>
    </html>
  );
}
