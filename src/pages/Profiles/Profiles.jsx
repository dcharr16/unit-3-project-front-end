import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import styles from './Profiles.module.css'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
        <h2>Profiles list</h2>
      <div className={styles.container}>
      {profiles.length ? 
        <>
        <div className='profiles-card'>
          {profiles.map(profile=>
            <p key={profile._id}>User:{profile.name}</p>
            )}        
        </div>       
        </>
      :
      <p>No profiles yet</p>
      }
      </div>
    </>
  )
}
 
export default Profiles