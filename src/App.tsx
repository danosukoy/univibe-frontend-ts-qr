import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import EventsPage from './pages/EventsPage'
import ProfilePage from './pages/ProfilePage'

export default function App() {
  return (
    <div>
      <header className="navbar">
        <div className="container">
          <h1 style={{display:'inline'}}>UniVibe</h1>
          <nav style={{display:'inline', marginLeft:20}}>
            <Link to="/events">Eventos</Link>
            <Link to="/profile" style={{marginLeft:12}}>Perfil</Link>
          </nav>
        </div>
      </header>

      <main className="container" style={{paddingTop:20}}>
        <Routes>
          <Route path="/" element={<EventsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  )
}
