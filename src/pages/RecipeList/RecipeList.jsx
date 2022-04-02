import styles from './RecipeList.module.css'
import { RecipeCard } from '../../components/RecipeCard/RecipeCard'

function RecipeList(props){
  return (
    <>
    <h1>Recipe List</h1>
    <div className={styles.container}>
      {props.recipes.map(recipe => (
        <RecipeCard key={recipe._id} recipe= {recipe}/>
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