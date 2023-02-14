import { useNavigate } from "react-router-dom";
import React from 'react'


import { Link } from 'react-router-dom'
import './First.css';
function First() {
  return (
    <div className="Main">
        {/* /* The main page of the website. */}
        <div className="imgdiv">
          <img  src="https://cdn-media.glamira.com/media/catalog/category/wedding_rings.jpg"></img>
          <div className="pp">
            <p >Find Your Perfect Match Here</p>
            <Link to='/home'>
            <button >Look Here</button>
            </Link>
          </div>
        </div>
    </div>

  )
}

export default First