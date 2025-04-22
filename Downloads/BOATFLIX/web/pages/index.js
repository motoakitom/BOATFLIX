import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 32 }}>
      <h1>BOATERS風ボートレース情報サイト</h1>
      <nav style={{ margin: '24px 0' }}>
        <Link href="/races">レース一覧</Link>
      </nav>
      <p>このサイトはボートレースのレース情報をSupabaseから取得して表示します。</p>
    </main>
  );
}
