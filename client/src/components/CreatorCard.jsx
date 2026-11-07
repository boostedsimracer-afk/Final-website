import { Link } from 'react-router-dom';

export default function CreatorCard({ creator }) {
  return (
    <div className="glass-panel" style={styles.card}>
      {/* Cover / Header Shot */}
      <div style={styles.imageContainer}>
        <img 
          src={creator.coverImage} 
          alt={creator.name} 
          style={styles.coverImage} 
        />
        <span style={styles.cityBadge}>{creator.city}</span>
      </div>

      {/* Creator Info */}
      <div style={styles.body}>
        <div style={styles.headerRow}>
          <div>
            <h3 style={styles.name}>{creator.name}</h3>
            <span style={styles.handle}>{creator.handle}</span>
          </div>
          <div style={styles.ratingBadge}>
            ★ {creator.rating}
          </div>
        </div>

        <p style={styles.specialty}>{creator.specialty}</p>
        <p style={styles.gear}>{creator.gear}</p>

        <div style={styles.footerRow}>
          <div>
            <span style={styles.fromLabel}>Starting from</span>
            <div style={styles.rate}>{creator.startingRate} <span style={styles.currency}>SAR</span></div>
          </div>
          <Link to={`/creator/${creator.id}`} style={styles.viewBtn}>
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    position: 'relative',
    height: '18rem',
    width: '100%',
    overflow: 'hidden',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cityBadge: {
    position: 'absolute',
    top: '1.2rem',
    right: '1.2rem',
    background: 'rgba(11, 12, 16, 0.75)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    fontSize: '1.2rem',
    fontWeight: '600',
    padding: '0.4rem 1rem',
    borderRadius: '9999px',
  },
  body: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  name: {
    fontSize: '1.9rem',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: 1.2,
  },
  handle: {
    fontSize: '1.3rem',
    color: '#8d94a5',
  },
  ratingBadge: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#ffc107',
    background: 'rgba(255, 193, 7, 0.1)',
    padding: '0.3rem 0.8rem',
    borderRadius: '0.6rem',
  },
  specialty: {
    fontSize: '1.4rem',
    color: '#ff3b30',
    fontWeight: '500',
    marginBottom: '0.6rem',
  },
  gear: {
    fontSize: '1.3rem',
    color: '#71788a',
    marginBottom: '2rem',
  },
  footerRow: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1.4rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
  },
  fromLabel: {
    fontSize: '1.1rem',
    color: '#71788a',
    display: 'block',
    textTransform: 'uppercase',
  },
  rate: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: '#ffffff',
  },
  currency: {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#ff3b30',
  },
  viewBtn: {
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    padding: '0.8rem 1.4rem',
    borderRadius: '0.8rem',
    fontSize: '1.3rem',
    fontWeight: '600',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    transition: 'all 0.2s',
  },
};