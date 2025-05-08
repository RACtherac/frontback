import React from 'react';
import './Header.css'; 

const Header: React.FC = () => {
  return (
    <div className="header">
     
      <nav className="nav-bar">
        <select
          onChange={(e) => {
            if (e.target.value) window.location.href = e.target.value;
          }}
        >
          <option value="">menu</option>
          <option value="/">Start</option>
          <option value="/suppliers">Leverantörer</option>
          <option value="/kontakt">Kontakt</option>
          <option value="/bakelser">bakelser</option>
        </select>
      </nav>
    </div>
  );
};

export default Header;
