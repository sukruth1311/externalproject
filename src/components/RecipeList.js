import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';  // Importing the RecipeCard component

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Indian'; // Fetching Indian recipes
      const response = await axios.get(url);
      setRecipes(response.data.meals); // Storing the recipes in the state
    };

    fetchRecipes();
  }, []);

  return (
    <div style={styles.recipeContainer}>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))
      ) : (
        <p>Loading Indian Recipes...</p>
      )}
    </div>
  );
};

const styles = {
  recipeContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
  },
};

export default RecipeList;
