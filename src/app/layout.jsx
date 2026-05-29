import { Geist, Geist_Mono, Poppins } from "next/font/google";
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

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

// export const metadata = {
//   title: "Harivanga House",
//   description: "Harivanga House - Best Online Mango Shop",
// };

export const metadata = {
  title: {
    default : "Harivanga House",
    template : "%s | Harivanga House",
  },
  description: "Harivanga House - Best Online Mango Shop",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className={`${poppins.className} min-h-screen flex flex-col`} suppressHydrationWarning>
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
