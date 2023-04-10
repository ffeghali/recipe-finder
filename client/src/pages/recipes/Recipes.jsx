import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
export default function Recipes() {
    const [recipes, setRecipes] = useState(null)

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('api/recipes')
            const json = await response.json()
      
            if (response.ok) {
                setRecipes(json)
                console.log(json[0].title)
            }
        }
      
        fetchRecipes()
    }, [])
  
    return (
      <div className="recipes">
       {recipes && recipes.map(recipe => (
            <p>{recipe.title}</p>
        ))}
      </div> 
    )
  }