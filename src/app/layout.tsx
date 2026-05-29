import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

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
        <header className="bg-white flex items-center justify-between px-6 shrink-0 border-b border-gray-100 z-20 relative" style={{ height: '52px' }}>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #ed1c24, #f37021)' }}>
              <span className="text-white font-semibold text-xs">M</span>
            </div>
            <span className="text-sm font-medium text-gray-400 tracking-wide">Manipal</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-gray-500 hover:text-gray-800 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 transition-colors">
              Sign In
            </button>
            <div className="w-7 h-7 rounded-full border border-orange-200 bg-orange-50 flex items-center justify-center text-xs font-medium text-manipal-orange cursor-pointer">
              S
            </div>
          </div>
        </header>

        {/* Nav bar — trimmed to Home and Profile only */}
        <nav className="bg-manipal-red text-white flex items-center px-6 gap-1 shrink-0 z-10 relative" style={{ height: '38px' }}>
          <button className="hover:bg-white/10 transition-colors font-medium px-3 py-1.5 rounded text-xs">Home</button>
          <button className="hover:bg-white/10 transition-colors font-medium px-3 py-1.5 rounded text-xs text-white/75">Profile</button>
        </nav>

        <div className="flex-1 flex overflow-hidden relative">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}