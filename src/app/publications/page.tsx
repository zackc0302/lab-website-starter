import * as React from 'react';
import Layout from '@/components/Layout';

export default function Publications() {
  const papers = [
    { title: 'AI在醫療影像辨識之應用', year: '2024' },
    { title: '基於深度學習之中文生成模型探討', year: '2023' },
    { title: '智慧城市資料治理策略', year: '2022' },
  ];

  return (
    <Layout>
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">研究成果</h1>
        <ul className="space-y-4">
          {papers.map((p, i) => (
            <li key={i} className="bg-gray-100 dark:bg-zinc-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-900">{p.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-800">{p.year}</p>
          </li>          
          ))}
        </ul>
      </main>
    </Layout>
  );
}
