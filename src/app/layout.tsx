import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Campus Assistant | Manipal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col h-screen bg-white m-0 p-0 overflow-hidden`}>

        {/* Top Header */}
        <header
          className="flex items-center justify-between px-6 shrink-0 z-20 relative text-white shadow-md"
          style={{
            height: '60px',
            backgroundColor: '#f37021'
          }}
        >
          <div className="flex flex-col justify-center">
            <h1 className="text-base font-semibold leading-tight tracking-wide text-white">
              MIT Bengaluru Virtual Assistant
            </h1>
            <p className="text-[11px] text-white/80 font-light mt-0.5">
              Empowered by AI &middot; Ask me anything
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/placement"
              className="text-xs text-white border border-white/30 hover:border-white/50 hover:bg-white/10 rounded px-3 py-1.5 font-medium transition-all"
            >
              Placement Hub
            </Link>
            <button className="text-xs text-white border border-white/30 hover:border-white/50 hover:bg-white/10 rounded px-3 py-1.5 font-medium transition-all">
              Manage Data
            </button>
            <button className="w-8 h-8 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50 flex items-center justify-center text-sm font-semibold text-white transition-all cursor-pointer" title="Profile">
              S
            </button>
          </div>
        </header>


        <div className="flex-1 flex overflow-hidden relative">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}