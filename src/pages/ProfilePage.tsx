import React from 'react';
import PointsBadges from '../components/PointsBadges';
import HistoryTable from '../components/HistoryTable';

export default function ProfilePage() {
  return (
    <div>
      <h2>Mi Perfil</h2>
      <PointsBadges />
      <div style={{marginTop:16}}>
        <HistoryTable />
      </div>
    </div>
  );
}
