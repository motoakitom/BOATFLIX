import { supabase } from '../lib/supabaseClient';
import { useEffect, useState } from 'react';

export default function Races() {
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRaces() {
      setLoading(true);
      const { data, error } = await supabase
        .from('races')
        .select('*')
        .order('race_date', { ascending: false })
        .order('race_no', { ascending: true });
      if (!error) setRaces(data);
      setLoading(false);
    }
    fetchRaces();
  }, []);

  return (
    <main style={{ padding: 32 }}>
      <h2>レース一覧</h2>
      {loading ? (
        <p>読み込み中...</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>日付</th>
              <th>場</th>
              <th>レースNo</th>
              <th>開始時刻</th>
              <th>タイトル</th>
            </tr>
          </thead>
          <tbody>
            {races.map(race => (
              <tr key={race.id}>
                <td>{race.race_date}</td>
                <td>{race.stadium}</td>
                <td>{race.race_no}</td>
                <td>{race.start_time}</td>
                <td>{race.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
