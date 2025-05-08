import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <img
        src="/public/bread.png"
        alt="Bageri"
        style={styles.banner}
      />

      <h1 style={styles.title}>Välkommen till vårt Dagnys bageri!</h1>
      <p>
        Här hittar då våra goda bakelser 
      </p>

      <div style={styles.imageRow}>
        <img src="/public/kanelbullar.png" alt="Kanelbulle" style={styles.productImage} />
        <img src="/public/prinseståta.png" alt="Prinsesstårta" style={styles.productImage} />
        <img src="/public/chokladbollar.png" alt="Chokladboll" style={styles.productImage} />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsum itaque tempore animi atque architecto?</p>

      <h2>Vem är Dagnys?</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis exercitationem enim porro rerum dolor itaque illo recusandae, expedita veritatis molestiae harum voluptate! Ab, nemo dolore. Gammal dam</p>
      <img src="/public/Dagnys.png" alt="Mormor Dagny" style={styles.DagnysImage} />
      <img src="/public/gammaltbageri.png" alt="Familj Dagny bageri" style={styles.GammaltBageri} />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ullam ea porro a magnam possimus modi, nostrum recusandae culpa eaque eveniet aut, odit ipsum, eos vero repellendus sed laborum expedita.</p>



    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'sans-serif',
    textAlign: 'center' as const,
  },
  banner: {
    width: '75%',
    maxHeight: '250px',
    objectFit: 'cover' as const,
    borderRadius: '30px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2rem',
    margin: '10px 0',
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '20px',
    color: '#555',
  },
  imageRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap' as const,
  },
  productImage: {
    width: '200px',
    height: '150px',
    objectFit: 'cover' as const,
    borderRadius: '30px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  DagnysImage: {
    width: '400px',
    marginTop: '50px',
    borderRadius: '30px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  GammaltBageri: {
    width: '350px',
    marginTop: '45px',
    borderRadius: '30px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  }
}

  
;

export default Home;
