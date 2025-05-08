import React from 'react';

const Kontakter: React.FC = () => {
  return (
    <div>
      <h2>Kontakta oss via här</h2>
      <p>Telefon: 0701234567</p>
      <p>E-post: Dagnys@bageriet.se</p>
      <p>Adress: kakavägen 12, 123 45 Fikastad</p>
      <div style={styles.imageRow}>
        <img src="/public/bageri.png" alt="bageri" style={styles.storeImage} />
        <img src="/public/bageri2.png" alt="bageri2" style={styles.storeImage} />
      </div>
    </div>
  );
};

export default Kontakter;
const styles = {
    container: {
      padding: '50px',
      fontFamily: 'sans-serif',
      textAlign: 'center' as const,
    },
    imageRow: {
      display: 'flex',
      justifyContent: 'center',
      gap: '50px',
      flexWrap: 'wrap' as const,
    },
    storeImage: {
      width: '300px',
      height: '300px',
      objectFit: 'cover' as const,
      borderRadius: '50px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',}
    }
