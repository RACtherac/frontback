import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './home';
import BakelseList from './bakelselist';
import SupplierList from './supplierlist';
import Revius from './revius';
import Kontakter from './kontakter';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li><Link to="/" style={styles.navLink}>Hem</Link></li>
            <li><Link to="/bakelser" style={styles.navLink}>Bakelser</Link></li>
            <li><Link to="/leverantorer" style={styles.navLink}>Leverantörer</Link></li>
            <li><Link to="/revius" style={styles.navLink}>Recensioner</Link></li>
            <li><Link to="/kontakter" style={styles.navLink}>Kontakter</Link></li>
          </ul>
        </nav>

        
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bakelser" element={<BakelseList />} />
            <Route path="/leverantorer" element={<SupplierList />} />
            <Route path="/revius" element={<Revius />} />
            <Route path="/kontakter" element={<Kontakter />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const styles = {
  nav: {
    backgroundColor: '#f7c59f',
    padding: '10px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
  content: {
    padding: '20px',
  },
};


export default App;
