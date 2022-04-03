import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import {AddRecipe} from './pages/AddRecipe/AddRecipe'
import { RecipeList } from './pages/RecipeList/RecipeList'
import * as recipeService from './services/recipes'
import { EditRecipe } from './pages/EditRecipe/EditRecipe'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  
  const handleAddRecipe = newRecipeData => {
    recipeService.create(newRecipeData)
    .then (newRecipe => setRecipes([...recipes, newRecipe]))
    navigate ('/')
  }

  useEffect(()=>{
    recipeService.getAll()
    .then(allRecipes => setRecipes(allRecipes))   
  },[])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }
  const handleDeleteRecipe = id => {
    recipeService.deleteOne(id)
    .then (deletedRecipe =>
    setRecipes(recipes.filter(recipe => recipe._id !== deletedRecipe._id)))
  }
const handleUpdateRecipe = updatedRecipeData => {
  recipeService.update(updatedRecipeData)
  .then(updatedRecipe =>{
    const newRecipesArray = recipes.map(recipe => recipe._id === updatedRecipeData._id ? updatedRecipeData : recipe)
    setRecipes(newRecipesArray)
    navigate('/')
  })
}


  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <main>

      <Routes>
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
          />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
          />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
          />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
          />
        <Route path='/' element={<RecipeList handleDeleteRecipe={handleDeleteRecipe} recipes={recipes}/>}/>
        <Route path="/add" element={<AddRecipe handleAddRecipe={handleAddRecipe}/>}/>
        <Route path="/" element={<Landing user={user} />} />
        <Route path='/edit' element={<EditRecipe handleUpdateRecipe={handleUpdateRecipe}/>} />
        
      </Routes>
      </main>
    </>
  )
}

export default App
