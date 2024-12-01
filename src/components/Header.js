import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ padding: '1rem', backgroundColor: '#007bff', color: '#fff' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Food Recipe App</h1>
      <nav>
        <Link to="/" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>
          Recipes
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
