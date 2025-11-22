import React, { useEffect, useState } from 'react';
import { getUserAchievements, getUserPoints } from '../api/gamificationApi';
import { Achievement } from '../types';

export default function PointsBadges() {
  const [points, setPoints] = useState<number>(0);
  const [badges, setBadges] = useState<Achievement[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const p = await getUserPoints();
        setPoints(p.totalPoints ?? 0);
      } catch (e) { console.error(e); }
      try {
        const a = await getUserAchievements();
        setBadges(a);
      } catch (e) { console.error(e); }
    })();
  }, []);

  return (
    <div className="card">
      <h3>Puntos acumulados</h3>
      <p style={{fontSize:20, fontWeight:600}}>{points}</p>
      <h4>Logros</h4>
      <div>
        {badges.length === 0 && <p>Sin logros aún.</p>}
        {badges.map(b => (
          <div key={b.id} style={{display:'inline-block', marginRight:8}}>
            <span className="badge">{b.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
