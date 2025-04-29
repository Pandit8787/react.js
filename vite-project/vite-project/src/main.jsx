import React from 'react';
import { createRoot } from 'react-dom/client';

// Define a Navbar using a function component
function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>MySite</h1>
      <ul style={styles.navList}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
}

// Main App function
function App() {
  return (
    <div>
      <Navbar />
      <h2>Welcome to the website!</h2>
    </div>
  );
}

// Basic styles (inline)
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '1rem',
    color: 'white'
  },
  logo: {
    margin: 0
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

// Render to the root
createRoot(document.getElementById('root')).render(<App />);
