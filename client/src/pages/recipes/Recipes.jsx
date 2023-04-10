import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
export default function Recipes() {
    const [recipes, setRecipes] = useState(null)

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('/recipes')
            const json = await response.json()
      
            if (response.ok) {
                setRecipes(json)
            }
          }
      
          fetchRecipes()
    }, [])
  
    return (
      <div className="recipes">
       {/* {recipes.map(recipe => (
        <Link to='/' key={recipe._id}>
          <p>{recipe.title}</p>
        </Link>
      ))}  */}
      </div> 
    )
  }