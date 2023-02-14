import React from 'react'
import './First.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
            <div className='navbarlogo'>
            <img src="./images/logo.png" alt="logo" className="logo" />
            <Link to='/'>
                <button className='button_all'>
                   MatchMaking
                </button>
                </Link>
            </div>

            <div className="buttons">

            <Link to='/add'>
                <button className='button_all'>
                   Register Here
                </button>
                </Link>
                <Link to='/home'>
                <button className='button_all'>
                   Search here
                </button>
                </Link>
            </div>
        </div>
  )
}

export default Navbar