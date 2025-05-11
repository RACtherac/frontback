import React from 'react';

const Kontakter: React.FC = () => {
  return (
    <div style={styles.container}>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px',  }}>
        <h2>Kontakta genom:</h2>
      </div>
      <div style={styles.text}>
        <p>📞 Telefon: 0701234567</p>
        <p>✉️ E-post: Dagnys@bageriet.se</p>
        <p>📍 Adress: Kakavägen 12, 123 45 Fikastad</p>
      </div>

      <div style={styles.imageRow}>
        <img src="/public/bageri.png" alt="Bageri 1" style={styles.storeImage} />
        <img src="/public/bageri2.png" alt="Bageri 2" style={styles.storeImage} />
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
  text: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '15px',
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  imageRow: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
    gap: '30px',
    marginTop: '40px',
  },
  storeImage: {
    width: '300px',
    height: '300px',
    objectFit: 'cover' as const,
    borderRadius: '16px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
};
