import { Outlet } from "react-router-dom"

export default function RecipesLayout() {
  return (
    <div className="recipes-layout">
      <h2>Recipes Layout</h2>
      
      <Outlet />
    </div>
  )
}