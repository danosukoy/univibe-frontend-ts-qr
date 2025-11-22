import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../api/eventsApi';
import { Event } from '../types';
import EventCard from '../components/EventCard';

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const ev = await getAllEvents();
        setEvents(ev);
      } catch (e:any) {
        console.error(e);
        setErr('Error al cargar eventos');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>Cargando eventos...</p>;
  if (err) return <p>{err}</p>;

  return (
    <div>
      <h2>Eventos</h2>
      <div className="events-grid">
        {events.map(e => <EventCard key={e.id} event={e} />)}
      </div>
    </div>
  );
}
