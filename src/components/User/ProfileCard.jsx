import { Link } from 'react-router-dom'

function ProfileCard({profile,}){
  return(
    <div className='card'>
      <div className='card-body'>
        <h2 className="card-text">{profile.name}</h2>
      </div>
    </div>
  )
}

export{
  ProfileCard
}