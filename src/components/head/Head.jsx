import React from 'react'
import "./style.css"
import { Link } from "react-router-dom"

const Head = () => {
  return (
            <div className="header">
                  <div>
                  <Link to="/" className="logo" >
                    <span>Developer</span>
                    <img src="./images/logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="links">
                  <Link to="/movies/top_rated"><span>TopRated</span></Link>
                  <Link to="/movies/popular"><span>Popular</span></Link>
                  <Link to="/movies/upcoming"><span>Upcoming</span></Link>
                  </div>
            </div>
  )
}

export default Head