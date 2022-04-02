function RecipeCard({recipe}) {
  return(
    <div className="card">
      <div className="card-body">
        <h2 className="card-text">{recipe.name}</h2>
        <p className="card-text"> {recipe.name} made with {recipe.ingredients} makes for a great {recipe.classification}</p>
      </div>

    </div>
  )
}

export {
  RecipeCard
}