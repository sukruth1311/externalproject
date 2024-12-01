import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => (
  <div
    style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      textAlign: 'center',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f8f9fa',  // Light background for each card
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',  // Smooth hover effect
    }}
  >
    <h3 style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}>{recipe.strMeal}</h3>
    <img
      src={recipe.strMealThumb}
      alt={recipe.strMeal}
      style={{
        width: '100%',
        borderRadius: '8px',
        transition: 'transform 0.3s ease',
      }}
    />
    <p style={{ color: '#555', fontSize: '1rem' }}>Category: {recipe.strCategory}</p>
    <Link
      to={`/recipe/${recipe.idMeal}`}
      style={{
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: '#007bff', // Blue background for the button
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        display: 'inline-block',
        marginTop: '0.5rem',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')} // Darker blue on hover
      onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')} // Revert on mouse out
    >
      View Details
    </Link>
  </div>
);

export default RecipeCard;
