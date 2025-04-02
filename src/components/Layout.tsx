// components/Layout.tsx
'use client';
import * as React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const navItemClass = `
  relative inline-block
  after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]
  after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500
  after:transition-all after:duration-500 hover:after:w-full
`;
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-zinc-900 shadow px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Shih's Lab</h1>
      <div className="space-x-4 text-sm text-gray-700 dark:text-gray-200 flex items-center">
        <Link href="/" className={navItemClass}>首頁</Link>
        <Link href="/members" className={navItemClass}>成員介紹</Link>
        <Link href="/publications" className={navItemClass}>研究成果</Link>
        <Link href="/announcements" className={navItemClass}>最新公告</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}



function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-800 text-center text-sm text-gray-500 dark:text-gray-400 py-4 mt-8">
      © 2025 Shih's Lab · 聯絡信箱：shih-yu.tsai@nycu.edu.tw
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}