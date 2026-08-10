import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://guamandigital.com"),

  title: {
    default: "Guaman Digital | Websites, Technology & Growth",
    template: "%s | Guaman Digital",
  },

  description:
    "Guaman Digital creates modern websites, redesigns, digital solutions, and ongoing website care for businesses ready to grow.",

  keywords: [
    "web design",
    "website development",
    "small business websites",
    "website redesign",
    "web maintenance",
    "SEO",
    "South Jersey web design",
    "Philadelphia web design",
    "bilingual web design",
    "Guaman Digital",
  ],

  authors: [
    {
      name: "Guaman Digital",
    },
  ],

  creator: "Guaman Digital",
  publisher: "Guaman Digital",

  openGraph: {
    title: "Guaman Digital | Websites, Technology & Growth",
    description:
      "Modern websites and technology solutions built to help businesses look professional, attract customers, and grow.",
    url: "https://guamandigital.com",
    siteName: "Guaman Digital",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Guaman Digital | Websites, Technology & Growth",
    description:
      "Modern websites and digital solutions built for growing businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}