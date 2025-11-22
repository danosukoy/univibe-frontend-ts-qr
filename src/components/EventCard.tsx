import React, { useState } from 'react';
import { Event } from '../types';
import { registerToEvent } from '../api/eventsApi';
import QrDisplay from './QrDisplay';

interface Props { event: Event }

export default function EventCard({ event }: Props) {
  const [qrData, setQrData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string|null>(null);

  const handleRegister = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await registerToEvent(event.id);
      // backend returns qrToken or registrationId; prefer qrToken
      if (res.qrToken) setQrData(res.qrToken);
      else if (res.registrationId) {
        // try to fetch QR by registration id (component can call API)
        setQrData(res.registrationId);
      }
      setMessage('Inscripción exitosa');
    } catch (e:any) {
      setMessage(e?.response?.data?.error || 'Error al inscribirse');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>{event.name}</h3>
      <p style={{minHeight:40}}>{event.description}</p>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <button onClick={handleRegister} disabled={loading}>Inscribirse</button>
        <span className="badge">{event.state || 'PENDING'}</span>
      </div>

      {message && <p style={{marginTop:8}}>{message}</p>}

      {qrData && (
        <div style={{marginTop:12}}>
          <QrDisplay qrValue={qrData} />
        </div>
      )}
    </div>
  );
}
