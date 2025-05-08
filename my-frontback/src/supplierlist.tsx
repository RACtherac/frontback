import React, { useEffect, useState } from 'react';

interface Supplier {
  SupplierId: number;
  Name: string;
  Address: string;
  ContactPerson: string;
  Phone: string;
  Email: string;
}

const SupplierList: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/suppliers')
      .then((res) => res.json())
      .then((data) => setSuppliers(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1>Bageri Dagnys</h1>
        <h2>Vi vill visa upp våra leverantörer!</h2>

        <div style={styles.row}>
          {suppliers.map((supplier) => (
            <div key={supplier.SupplierId} style={styles.card}>
              <h3>{supplier.Name}</h3>
              <p><strong>Adress:</strong> {supplier.Address}</p>
              <p><strong>Kontaktperson:</strong> {supplier.ContactPerson}</p>
              <p><strong>Telefon:</strong> {supplier.Phone}</p>
              <p><strong>Email:</strong> {supplier.Email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
 
  container: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    maxWidth: '1000px',
    width: '100%',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    minWidth: '250px',
    backgroundColor: '#fff',    
    border: '1px solid #ccc',   
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)', 
    flex: '0 0 auto',
    textAlign: 'left' as const,
  }
  
};

export default SupplierList;
