import * as React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <main className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">關於我們</h2>
        <p className="text-lg leading-relaxed">
          本實驗室專注於 AI、資料分析與人機互動等研究領域，致力於推動智慧科技應用。
        </p>
      </main>
    </Layout>
  );
}
