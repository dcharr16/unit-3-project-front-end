import styles from './RecipeList.module.css'
import { RecipeCard } from '../../components/RecipeCard/RecipeCard'

const dishIds = [102, 1080, 211, 225, 292, 326, 365, 429, 425, 431, 488, 493, 490, 824, 835, 889, 999]

function RecipeList(props){
  return (
    <>
    <h1>Recipe List</h1>
    <div className={styles.container}>
      {props.recipes.map(recipe => (
        <RecipeCard key={recipe._id} recipe= {recipe}
        randDishImgId = {dishIds[Math.floor(Math.random()*(dishIds.length))]}
        handleDeleteRecipe={props.handleDeleteRecipe} 
        user={props.user}       
        />
        // <div key={recipe._id}>
        //   <p>Dish Name: {recipe.name}</p>
        //   <p>Ingredients:{recipe.ingredients}</p>
        //   <p>Classification:{recipe.classification}</p>
        //   <p>Rating: {recipe.rating}</p>
        // </div>
      ))}
    </div>
    </>
  )
}

export{
  RecipeList
}