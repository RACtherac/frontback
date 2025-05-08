import React, { useEffect, useState } from 'react';

interface Bakelse {
  BakelseId: number;
  Namn: string;
  Beskrivning: string;
  Pris: number;
  BildUrl: string;
}

const BakelseList: React.FC = () => {
  const [bakelser, setBakelser] = useState<Bakelse[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/bakelser')
    .then((res) => res.json())
      .then((data) => setBakelser(data))
      .catch((err) => console.error('Error fetching bakelser:', err));
  }, []);

  return (
    <div>
      <h1>Våra bakelser</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {bakelser.map((bakelse) => (
          <div
            key={bakelse.BakelseId}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              width: '200px',
              textAlign: 'center',
              backgroundColor: '#f9f9f9'
            }}
          >
            <img
              src={bakelse.BildUrl}
              alt={bakelse.Namn}
              style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px' }}
            />
            <h3>{bakelse.Namn}</h3>
            <p style={{ fontSize: '0.9em' }}>{bakelse.Beskrivning}</p>
            <strong>{bakelse.Pris} kr</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BakelseList;
