import { useState } from "react"

function AddRecipe (props){
  const [formData,setFormData] = useState({
    name: '',
    ingredients:'',
    classification:'',
    rating: 5,
  })
  const handleChange = evt =>{
    setFormData({...formData, [evt.target.name]: evt.target.value})

  }
  return(
    <>
    <h1>Add Recipe</h1>
    <form>
      <div className="form-group mb-3">
            <label htmlFor="name-input" className="form-label">
              Puppy's Name (required)
            </label>
            <input 
              type="text"
              className="form-control"
              id="name-input"
              name="name"
              value={formData.name}
              onChange ={handleChange}
              required
              />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="ingredients-input" className="form-label">
              Ingredients (Required)
            </label>
            <input 
              type="text"
              className="form-control"
              id="ingredients-input"
              name="ingredients"
              value={formData.ingredients}
              onChange ={handleChange}
              required
              />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="classification-input" className="form-label">
              Classification (Required)
            </label>
            <input 
              type="text"
              className="form-control"
              id="classification-input"
              name="classification"
              value= {formData.classification}
              onChange ={handleChange}
              />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="rating-input" className="form-label">
              Recipe's rating
            </label>
            <input 
              type="number"
              className="form-control"
              id="rating-input"
              name="rating"
              value={formData.rating}
              onChange ={handleChange}
              />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary btn-fluid"
              >
              Add Recipe
            </button>
          </div>
    </form>
		

    </>
  )
}

export{
  AddRecipe,
}