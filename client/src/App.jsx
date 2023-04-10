import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Recipes from './pages/recipes/Recipes'

// Layouts
import RootLayout from './layouts/RootLayout'
import RecipesLayout from './layouts/RecipesLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="recipes" element={<RecipesLayout/>}>
        <Route index 
        element={<Recipes/>}
        />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App