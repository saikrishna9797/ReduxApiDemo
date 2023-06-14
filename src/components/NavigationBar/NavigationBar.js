import React from 'react'
import { NavLink} from 'react-router-dom';
import './NavigationBar.css';
import {FaUsers,FaUserSlash} from 'react-icons/fa'

function NavigationBar() {

  const activeLink = {
    color:"#FF1234",
    fontWeight:"bold",
    fontSize:"1.5rem"
    
  }

  const inactiveLink = {
    color:"#12FFFF",
  }
  


  return (
    <div className='bg-dark'>

<nav className="navbar navbar-expand-sm ">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-white" to="/">Home</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active text-white " style={({isActive})=>{
            return isActive?activeLink:inactiveLink
          }} aria-current="page" to="/users">
            <FaUsers className='ic' />
              users
            </NavLink>
        </li>
        <div className='space'>

        </div>
        <li className="nav-item">
          <NavLink className="nav-link text-white" style={({isActive})=>{
            return isActive?activeLink:inactiveLink
          }} to="/usercount">
            <FaUserSlash className='ic'/>
            userscount
            </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavigationBar;