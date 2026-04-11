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

// --- YEH HAI SEO UPGRADE ---
export const metadata: Metadata = {
  title: "Hassan | Full Stack Developer & Digital Growth Specialist",
  description: "I am Hassan, a professional Full Stack Developer. I build high-performance websites and digital solutions to help businesses grow.",
  keywords: ["Hassan", "Hassan Developer", "Full Stack Developer Pakistan", "Web Design by Hassan", "Portfolio"],
  authors: [{ name: "Hassan" }],
  openGraph: {
    title: "Hassan | Full Stack Developer",
    description: "Explore Hassan's portfolio for professional web development services.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico", // Agar aapka apna logo hai to yahan path dein
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050505]">
        {children}
      </body>
    </html>
  );
}