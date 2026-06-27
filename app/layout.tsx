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

export const metadata: Metadata = {
  title: "Kast",
  description: "Online watch party platform.",
  icons: {
    icon: [
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '256x256', type: 'image/png' },
    ],
  },
  // Add this block to link the OG image you generated
  openGraph: {
    title: "Kast",
    description: "Online watch party platform.",
    url: `https://kast-ochre.vercel.app/`, // Use your actual domain here
    siteName: 'Kast',
    images: [
      {
        url: 'https://kast-ochre.vercel.app/api/og', // This must match the filename (without .tsx)
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kast',
    description: 'Online watch party platform.',
    images: ['/og-img'], // MUST match the filename above
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
