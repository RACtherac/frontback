import React, { useEffect, useState } from 'react';

type Reviu = {
  id: number;
  namn: string;
  kommentar: string;
  datum: string;
  betyg: number;
};

const LOCAL_KEY = 'reviusData';

const Revius: React.FC = () => {
  const [namn, setNamn] = useState('');
  const [kommentar, setKommentar] = useState('');
  const [betyg, setBetyg] = useState(5);
  const [revius, setRevius] = useState<Reviu[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/revius')
      .then(res => res.json())
      .then(data => {
        setRevius(data);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(data)); 
      })
      .catch(() => {
        const stored = localStorage.getItem(LOCAL_KEY);
        if (stored) setRevius(JSON.parse(stored));
      });
  }, []);

  const updateLocal = (updated: Reviu[]) => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
    setRevius(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ny: Reviu = {
      id: revius.length > 0 ? revius[revius.length - 1].id + 1 : 1,
      namn,
      kommentar,
      datum: new Date().toLocaleDateString(),
      betyg,
    };

    fetch('http://localhost:5000/api/revius', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ny),
    }).catch(() => {
      console.warn('Kunde inte spara till server. Sparar lokalt istälet.');
    });

    const updated = [...revius, ny];
    updateLocal(updated);

    setNamn('');
    setKommentar('');
    setBetyg(5);
  };

  const handleDelete = (id: number) => {
    const updated = revius.filter(r => r.id !== id);
    updateLocal(updated);

    fetch(`http://localhost:5000/api/revius/${id}`, {
      method: 'DELETE',
    }).catch(() => {
      console.warn('Kunde inte ta bort från server. Tar bort lokalt.');
    });
  };

  return (
    <div style={styles.container}>
    

      <h2 style={styles.title}>Recensioner</h2>
      <h2 style={styles.title}>Lämna din åsikt!</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Ditt namn"
          value={namn}
          onChange={(e) => setNamn(e.target.value)}
          required
          style={styles.input}
        />
        <textarea
          placeholder="Din kommentar"
          value={kommentar}
          onChange={(e) => setKommentar(e.target.value)}
          required
          style={styles.textarea}
        />
        <label style={styles.label}>
          Betyg:
          <select
            value={betyg}
            onChange={(e) => setBetyg(Number(e.target.value))}
            style={styles.select}
          >
            {[1, 2, 3, 4, 5].map(n => (
              <option key={n} value={n}>{n} stjärnor</option>
            ))}
          </select>
        </label>
        <button type="submit" style={styles.button}>Skicka</button>
      </form>

      <h3 style={styles.subtitle}>Andras åsikter om vårat bageri.</h3>
      <ul style={styles.list}>
        {revius.map((r) => (
          <li key={r.id} style={styles.reviewCard}>
            <strong>{r.namn}</strong> ({r.datum}) – {r.betyg}⭐
            <p>{r.kommentar}</p>
            <button onClick={() => handleDelete(r.id)} style={styles.deleteButton}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
    
  );
};



const styles = {
  container: {
    padding: '30px',
    maxWidth: '700px',
    margin: 'auto',
    fontFamily: 'sans-serif',
  },
  title: {
    textAlign: 'center' as const,
    fontSize: '2rem',
    marginBottom: '20px',
  },
  subtitle: {
    textAlign: 'center' as const,
    marginTop: '40px',
  },
  form: {
    backgroundColor: '#f2f2f2',
    padding: '40px',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  input: {
    width: '95%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '95%',
    height: '80px',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'vertical' as const,
  },
  label: {
    display: 'block',
    marginBottom: '10px',
  },
  select: {
    marginLeft: '10px',
    padding: '5px',
    fontSize: '16px',
    borderRadius: '4px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#f8c471',
    cursor: 'pointer',
  },
  deleteButton: {
    marginTop: '10px',
    padding: '6px 12px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#e57373',
    color: '#fff',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  reviewCard: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '10 2px 6px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  },
};

export default Revius;
