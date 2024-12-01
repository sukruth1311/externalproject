import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await axios.get(url);
      setRecipe(response.data.meals[0]);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  // Extracting ingredients and instructions
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: recipe[`strIngredient${i}`],
        measure: recipe[`strMeasure${i}`],
      });
    }
  }

  const instructions = recipe.strInstructions.split('.').map((step, index) => step.trim()).filter(Boolean);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{recipe.strMeal}</h1>
      <div style={styles.imageContainer}>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          style={styles.image}
        />
      </div>

      <h2 style={styles.subTitle}>Ingredients</h2>
      <ul style={styles.list}>
        {ingredients.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item.ingredient} - {item.measure}
          </li>
        ))}
      </ul>

      <h2 style={styles.subTitle}>Instructions</h2>
      <ol style={styles.instructionsList}>
        {instructions.map((step, index) => (
          <li key={index} style={styles.instructionStep}>{step}</li>
        ))}
      </ol>

      <a
        href={recipe.strYoutube}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        Watch on YouTube
      </a>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontFamily: 'Arial, sans-serif',
  },
  imageContainer: {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  image: {
    width: '80%',
    maxWidth: '500px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  subTitle: {
    fontSize: '1.8rem',
    color: '#444',
    marginBottom: '1rem',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '1.5rem',
  },
  listItem: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '0.5rem',
  },
  instructionsList: {
    listStyleType: 'decimal',
    paddingLeft: '1.5rem',
  },
  instructionStep: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '0.8rem',
  },
  link: {
    display: 'inline-block',
    padding: '0.8rem 1.5rem',
    backgroundColor: '#ff6f61',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    textAlign: 'center',
    fontSize: '1.2rem',
    transition: 'background-color 0.3s ease',
  },
};

export default RecipeDetail;
