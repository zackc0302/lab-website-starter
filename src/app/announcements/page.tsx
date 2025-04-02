import Layout from '@/components/Layout';

export default function Announcements() {
  const posts = [
    { title: '徵求暑期實習生！', date: '2025-04-01' },
    { title: '我們的新研究刊登於 Nature！', date: '2025-03-15' },
  ];

  return (
    <Layout>
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">最新公告</h1>
        <ul className="space-y-4">
          {posts.map((post, idx) => (
            <li key={idx} className="border-b pb-2">
              <h2 className="text-lg font-medium">{post.title}</h2>
              <p className="text-sm text-gray-400">{post.date}</p>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
