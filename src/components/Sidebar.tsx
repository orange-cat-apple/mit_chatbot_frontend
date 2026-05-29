"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  return (
    <aside
      className={`bg-white h-full border-r border-gray-100 flex flex-col transition-all duration-300 ease-in-out relative z-20 ${isOpen ? 'w-56' : 'w-16'}`}
    >
      {/* Collapse toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-5 bg-white border border-gray-200 rounded-full p-1 text-gray-400 hover:text-manipal-orange z-30 shadow-sm transition-colors"
      >
        <svg
          className={`w-3.5 h-3.5 transition-transform ${isOpen ? '' : 'rotate-180'}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Placement Hub — top, prominent */}
      <div className="p-3 border-b border-gray-100">
        <Link
          href="/placement"
          className={`flex items-center gap-2.5 p-2.5 rounded-xl font-semibold text-sm transition-colors ${
            pathname === '/placement'
              ? 'bg-manipal-red text-white'
              : 'bg-red-50 text-manipal-red hover:bg-red-100 border border-red-100'
          }`}
        >
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {isOpen && <span>Placement Hub</span>}
        </Link>
      </div>

      {/* Divider + New Chat */}
      <div className="p-3 border-b border-gray-100">
        {isOpen ? (
          <button className="w-full bg-orange-50 hover:bg-orange-100 text-manipal-orange font-medium py-2 px-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm border border-orange-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            New Chat
          </button>
        ) : (
          <button className="w-9 h-9 mx-auto bg-orange-50 hover:bg-orange-100 text-manipal-orange rounded-xl flex items-center justify-center transition-colors border border-orange-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        )}
      </div>

      {/* Chat history nav */}
      <nav className="flex-1 p-2.5 overflow-y-auto flex flex-col gap-0.5">
        <Link
          href="/"
          className={`flex items-center gap-2.5 p-2.5 rounded-xl font-medium transition-colors text-sm ${
            pathname === '/'
              ? 'bg-orange-50 text-manipal-orange'
              : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          {isOpen && <span>Campus Q&A</span>}
        </Link>

        <Link
          href="/mock-interview"
          className={`flex items-center gap-2.5 p-2.5 rounded-xl font-medium transition-colors text-sm ${
            pathname === '/mock-interview'
              ? 'bg-orange-50 text-manipal-orange'
              : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
          {isOpen && <span>Mock Interview</span>}
        </Link>

        <Link
          href="/resume"
          className={`flex items-center gap-2.5 p-2.5 rounded-xl font-medium transition-colors text-sm ${
            pathname === '/resume'
              ? 'bg-orange-50 text-manipal-orange'
              : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {isOpen && <span>Resume Review</span>}
        </Link>
      </nav>
    </aside>
  );
}