import { Link } from 'react-router-dom'



const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    {user ?
        <div className="li">          
        <nav>
          <div className='whole-nav-bar'>
            {/* <li>Welcome, {user.name}</li> */}
            <Link to='/'>Mikey's List</Link>
            <Link to="/add">Add Recipe</Link>
            <Link to="/profiles">Profiles</Link>
            <Link to="/changePassword">Change Password</Link>
            <Link to="" onClick={handleLogout}>LOG OUT</Link>
          </div>
        </nav>
        </div>
      :
        <div>

        <nav>
          <ul>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Create an Account</Link>
          </ul>
        </nav>
        </div>
      }
    </>
  )
}

export default NavBar
