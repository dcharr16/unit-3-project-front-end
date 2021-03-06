import { useState, useRef, useEffect } from "react"
import styles from './AddRecipe.module.css'

function AddRecipe (props){
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData,setFormData] = useState({
    name: '',
    ingredients:'',
    directions:'',
    rating: 5,
  })

  useEffect (() =>{
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])
  
  const handleChange = evt =>{    
    setFormData({...formData, [evt.target.name]: evt.target.value})
    
  }
  const handleSubmit = evt => {
		evt.preventDefault()
    props.handleAddRecipe(formData)
	}

  return(    
    <main className={styles.container}>
    <h1>Add Recipe</h1>
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
            <label htmlFor="directions-input" className="form-label">
              Directions (Required)
            </label>
            <input 
              type="text"
              className="form-control"
              id="directions-input"
              name="directions"
              value= {formData.directions}
              onChange ={handleChange}
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
              onChange ={handleChange}
              />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary btn-fluid"
              disabled={!validForm}
              >
              Add Recipe
            </button>
          </div>
    </form>
    </main>
    
  )
}

export{
  AddRecipe,
}