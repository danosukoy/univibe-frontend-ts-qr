import React, { useEffect, useState } from 'react';
import { getEventHistory } from '../api/gamificationApi';
import { EventHistoryItem } from '../types';

export default function HistoryTable() {
  const [history, setHistory] = useState<EventHistoryItem[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const h = await getEventHistory();
        setHistory(h);
      } catch (e) { console.error(e); }
    })();
  }, []);

  return (
    <div className="card">
      <h3>Historial de eventos asistidos</h3>
      {history.length === 0 ? <p>No hay registros.</p> : (
        <table style={{width:'100%', borderCollapse:'collapse'}}>
          <thead>
            <tr style={{textAlign:'left'}}>
              <th>Evento</th><th>Estado</th><th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {history.map(h => (
              <tr key={h.id}>
                <td style={{padding:'8px 4px'}}>{h.name}</td>
                <td style={{padding:'8px 4px'}}>{h.status}</td>
                <td style={{padding:'8px 4px'}}>{h.date ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
