import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreatorCard from './components/CreatorCard';
import CreatorDetail from './pages/CreatorDetail';
import { creatorsData } from './data/creators';

function Home() {
  const [selectedCity, setSelectedCity] = useState('All');

  const filteredCreators = selectedCity === 'All'
    ? creatorsData
    : creatorsData.filter(creator => creator.city === selectedCity);

  const cities = ['All', 'Khobar', 'Riyadh', 'Jeddah', 'Bahrain'];

  return (
    <main className="container" style={{ padding: '6rem 2.4rem 10rem' }}>
      <div style={{ maxWidth: '72rem', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '4.8rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.05rem', color: '#ffffff', marginBottom: '1.6rem' }}>
          Find Automotive Visual Creators
        </h1>
        <p style={{ fontSize: '1.8rem', color: '#9ba1b0', lineHeight: 1.6 }}>
          Book certified automotive photographers and videographers across Saudi Arabia and Bahrain for rolling shots, private collections, and commercial inventory.
        </p>
      </div>

      {/* Filter Buttons */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3.6rem', flexWrap: 'wrap' }}>
        {cities.map(city => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            style={{
              padding: '0.8rem 2rem',
              borderRadius: '9999px',
              fontSize: '1.4rem',
              fontWeight: 600,
              transition: 'all 0.2s',
              background: selectedCity === city ? '#ff3b30' : 'rgba(255, 255, 255, 0.06)',
              color: selectedCity === city ? '#ffffff' : '#9ba1b0',
              border: selectedCity === city ? '1px solid #ff3b30' : '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: selectedCity === city ? '0 0 16px rgba(255, 59, 48, 0.4)' : 'none',
            }}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(28rem, 1fr))',
        gap: '2.4rem',
      }}>
        {filteredCreators.map(creator => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creator/:id" element={<CreatorDetail />} />
      </Routes>
    </Router>
  );
}
