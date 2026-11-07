import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { creatorsData } from '../data/creators';

export default function CreatorDetail() {
  const { id } = useParams();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Find the creator that matches the ID in the URL
  const creator = creatorsData.find(c => c.id === id);

  if (!creator) {
    return (
      <main className="container" style={{ padding: '6rem 2.4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.8rem', color: '#ffffff', marginBottom: '1.6rem' }}>Creator Not Found</h2>
        <Link to="/" style={{ color: '#ff3b30', fontSize: '1.6rem', textDecoration: 'underline' }}>
          ← Back to Directory
        </Link>
      </main>
    );
  }

  return (
    <main className="container" style={{ padding: '4rem 2.4rem 10rem' }}>
      {/* Back Button */}
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#8d94a5', fontSize: '1.5rem', marginBottom: '2.4rem', transition: 'color 0.2s' }}>
        ← Back to Directory
      </Link>

      {/* Hero Header Banner */}
      <div className="glass-panel" style={{ overflow: 'hidden', marginBottom: '4rem' }}>
        <div style={{ height: '28rem', width: '100%', position: 'relative' }}>
          <img src={creator.coverImage} alt={creator.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11, 12, 16, 0.95), transparent 70%)' }} />
        </div>

        <div style={{ padding: '3.2rem', marginTop: '-6rem', position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <span style={{ background: '#ff3b30', color: '#ffffff', padding: '0.4rem 1.2rem', borderRadius: '9999px', fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1rem' }}>
              {creator.city}
            </span>
            <h1 style={{ fontSize: '3.6rem', fontWeight: 800, color: '#ffffff', margin: '1rem 0 0.4rem' }}>{creator.name}</h1>
            <p style={{ fontSize: '1.6rem', color: '#8d94a5' }}>{creator.handle} • {creator.specialty}</p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '1.3rem', color: '#8d94a5', display: 'block' }}>Rating</span>
            <span style={{ fontSize: '2.4rem', fontWeight: 800, color: '#ffc107' }}>★ {creator.rating}</span>
            <span style={{ fontSize: '1.3rem', color: '#8d94a5' }}> ({creator.reviewsCount} reviews)</span>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Bio/Gear on Left, Packages on Right */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(32rem, 1fr))', gap: '3.2rem', marginBottom: '5rem' }}>
        {/* Left: About & Equipment */}
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.6rem' }}>About</h2>
          <p style={{ fontSize: '1.6rem', color: '#9ba1b0', lineHeight: 1.7, marginBottom: '2.4rem' }}>{creator.bio}</p>

          <h3 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem' }}>Camera & Rig</h3>
          <p style={{ fontSize: '1.4rem', color: '#ff3b30', background: 'rgba(255, 59, 48, 0.08)', padding: '1rem 1.4rem', borderRadius: '0.8rem', border: '1px solid rgba(255, 59, 48, 0.2)' }}>
            📷 {creator.gear}
          </p>
        </div>

        {/* Right: Packages */}
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '2rem' }}>Packages & Rates</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
            {creator.packages.map((pkg, idx) => (
              <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '1.2rem', padding: '1.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1.7rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.4rem' }}>{pkg.name}</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ fontSize: '1.3rem', color: '#8d94a5' }}>✓ {feat}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>{pkg.price} <span style={{ fontSize: '1.2rem', color: '#ff3b30' }}>SAR</span></div>
                  <button style={{ marginTop: '0.8rem', background: '#ff3b30', color: '#ffffff', padding: '0.8rem 1.6rem', borderRadius: '0.8rem', fontSize: '1.3rem', fontWeight: 600, boxShadow: '0 0 16px rgba(255, 59, 48, 0.35)' }}>
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Gallery Grid */}
      <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '2rem' }}>Featured Work</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(26rem, 1fr))', gap: '1.6rem' }}>
        {creator.gallery.map((imgUrl, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedPhoto(imgUrl)}
            style={{ height: '22rem', borderRadius: '1.6rem', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.08)', transition: 'transform 0.2s' }}
          >
            <img src={imgUrl} alt="Portfolio item" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      {/* Lightbox / Popup Modal when a photo is clicked */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.88)', backdropFilter: 'blur(10px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '2rem' }}
        >
          <div style={{ maxWidth: '90rem', maxHeight: '85vh', position: 'relative' }}>
            <img src={selectedPhoto} alt="Full view" style={{ maxWidth: '100%', maxHeight: '85vh', borderRadius: '1.6rem', border: '1px solid rgba(255, 255, 255, 0.2)', objectFit: 'contain' }} />
            <button 
              onClick={() => setSelectedPhoto(null)} 
              style={{ position: 'absolute', top: '-1.5rem', right: '-1.5rem', background: '#ff3b30', color: '#ffffff', width: '3.6rem', height: '3.6rem', borderRadius: '50%', fontSize: '1.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}