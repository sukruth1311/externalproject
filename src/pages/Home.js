import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  const fetchRecipes = async (query) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await axios.get(url);
    setRecipes(response.data.meals || []);
  };

  useEffect(() => {
    fetchRecipes('');
  }, []);

  return (
    <div style={styles.container}>
      {/* Search Bar */}
      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search Recipes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />
        <button
          onClick={() => fetchRecipes(search)}
          style={styles.searchButton}
        >
          Search
        </button>
      </div>

      {/* Recipes Grid */}
      <div style={styles.recipeGrid}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <p style={styles.noRecipes}>No recipes found. Try searching again!</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f4f4f9', // Light gray background for the page
    minHeight: '100vh', // Ensures the page takes full height
  },
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  searchInput: {
    padding: '0.5rem',
    width: '70%',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '0.5rem',
    fontSize: '1rem',
    backgroundColor: '#fff',
    color: '#333',
  },
  searchButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff', // Blue background for the button
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  searchButtonHover: {
    backgroundColor: '#0056b3', // Darker blue when hovered
  },
  recipeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  noRecipes: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#888',
    fontWeight: 'bold',
  },
};

export default Home;
