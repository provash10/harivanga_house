import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FloatingChat from "@/components/FloatingChat/FloatingChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Harivanga House",
  description: "Harivanga House - Online Mango Ecoomerce Business",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Header></Header>
        {/* <main className="max-w-7xl mx-auto py-0">*/}
        <main className="px-0 py-0">
          {children}
        </main>
        <Footer></Footer>
        <FloatingChat />
        </body>
    </html>
  );
}
