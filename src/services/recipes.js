import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/recipes`

function create(recipe){
  return fetch(BASE_URL,{
    method: "POST",
    headers:{
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(recipe)
  })
  .then(res => res.json())
}
function getAll() {
  return fetch(BASE_URL, 
 
  )
  .then(res => res.json())
}
function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json())
}
function update(recipe) {
  return fetch(`${BASE_URL}/${recipe._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(recipe)
  })
  .then(res => res.json())
}

export{
  create,
  getAll,
  update,
  deleteOne,
}