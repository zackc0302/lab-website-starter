// app/layout.tsx
import './globals.css';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shih's Lab",
  description: '歡迎來到 Shih 的實驗室官方網站',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
