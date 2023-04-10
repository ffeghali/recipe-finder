import { Link, useLoaderData } from "react-router-dom"
import { useState, useEffect } from "react"
export default function Recipes() {
    /* const [recipes, setRecipes] = useState(null)

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
    }, []) */
  
    const recipes = useLoaderData()
    return (
      <div className="recipes">
       {recipes.map(recipe => (
            <Link to={recipe.url} key={recipe._id}>
                <p>{recipe.title}</p>
            </Link>
        ))}
      </div> 
    )
  }

  // Data Loader
export const recipesLoader = async () => {
    const res = await fetch('/api/recipes')
  
    return res.json()
  }