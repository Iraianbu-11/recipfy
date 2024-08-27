/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem";

const RecipeBoard = ({ tag }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const url = tag 
      ? `https://dummyjson.com/recipes/tag/${tag}` 
      : `https://dummyjson.com/recipes`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes || []))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, [tag]); 

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">Recipes</span>
      </h2>
      <div className="container">
        {recipes.map((recipe, index) => (
          <RecipeItem
            key={index}
            title={recipe.name}
            src={recipe.image}
            tags={recipe.tags}
            cuisine={recipe.cuisine}
            mealType={recipe.mealType}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeBoard;
