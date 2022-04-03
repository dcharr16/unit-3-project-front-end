import { Link } from 'react-router-dom'

function RecipeCard({recipe, randDishImgId, handleDeleteRecipe, user}) {
  return(
    <div className="card">
      <img 
        src={`https://picsum.photos/id/${randDishImgId}/640/480`} 
        alt="A happy puppy"
        className="card-img-top" 
      />
      <div className="card-body">
        <h2 className="card-text">{recipe.name}</h2>
        <p className="card-text"> {recipe.name} made with {recipe.ingredients} makes for a great {recipe.classification}</p>
      </div>
      {
        user.profile === recipe.owner?._id ?
        <div className="card-footer">
          <Link className='btn btn-sm btn-warning' to='/edit' state={{recipe}}>Edit
          </Link>
          <button className="btn btn-sm btn-danger m-left"
            onClick={()=> handleDeleteRecipe(recipe._id)}
          >
            Delete
          </button>
        </div>
      :   
      <div className="card-body">
      <p className="card-text">- {recipe.owner?.name}'s recipe</p>      
      </div> 
      } 
    </div>
  )
}

export {
  RecipeCard
}