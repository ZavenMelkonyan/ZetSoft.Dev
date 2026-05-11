import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://zetsoft.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ZetSoft — Software Engineered for What's Next",
    template: "%s · ZetSoft",
  },
  description:
    "ZetSoft is a software development studio building mobile, web, and game experiences. Based in Yerevan, Armenia.",
  applicationName: "ZetSoft",
  keywords: [
    "ZetSoft",
    "software development",
    "mobile apps",
    "iOS development",
    "Android development",
    "game development",
    "web development",
    "Armenia",
    "Yerevan",
  ],
  authors: [{ name: "ZetSoft LLC" }],
  creator: "ZetSoft LLC",
  openGraph: {
    title: "ZetSoft — Software Engineered for What's Next",
    description:
      "Mobile, web, and game development from Yerevan, Armenia.",
    url: siteUrl,
    siteName: "ZetSoft",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "ZetSoft" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ZetSoft",
    description: "Software Engineered for What's Next.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
