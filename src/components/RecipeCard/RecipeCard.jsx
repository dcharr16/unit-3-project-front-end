import {Link} from 'react-router-dom'
function RecipeCard({recipe, randDishImgId}) {
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
      <div className="card-footer">
        <button className="btn btn-sm btn-danger m-left">
          Delete
        </button>
      </div>

    </div>
  )
}

export {
  RecipeCard
}