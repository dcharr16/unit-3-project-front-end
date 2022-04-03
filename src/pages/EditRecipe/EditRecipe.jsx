import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

function EditRecipe(props){
  const location = useLocation ()

  const [formData, setFormData] = useState(location.state.recipe)
  const [validForm, setValidForm] = useState(true)
  const formElement = useRef()

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdateRecipe(formData)
  }
  
  return (
    <>
      <h1>Edit Recipe</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name-input" className="form-label">
          Name of Dish (required)
          </label>
          <input 
            type="text"
            className="form-control"
            id="name-input"
            name="name" 
            value={formData.name}
            onChange={handleChange}             
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
            value ={formData.ingredients}
            onChange={handleChange}
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
            value={formData.classification}
            onChange={handleChange}
            required
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
            onChange={handleChange}
          />
        </div>
        <div className="d-grid mb-3">
          <button
            type="submit"
            className="btn btn-primary btn-fluid"
            disabled={!validForm}
          >
          Save Recipe
          </button>
        </div>  
        <div className="d-grid">
          <Link
            to="/"
            className="btn btn-danger btn-fluid"
          >
          Cancel
          </Link>
        </div>
      </form>
    </>
  )
}

export {
  EditRecipe
}