// components/Hero.tsx
import * as React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[url('/images/background.jpeg')] bg-cover bg-center text-white overflow-hidden">
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-drop-in drop-shadow-xl">
          歡迎來到 Shih's Lab
        </h1>
        <p className="text-lg md:text-2xl drop-shadow-md">
          專注於 AI、資料分析與人機互動的創新研究實驗室
        </p>
        <div className="absolute bottom-6 animate-bounce text-sm text-white opacity-80">↓ 滑動查看更多</div>
      </div>
    </section>
  );
}