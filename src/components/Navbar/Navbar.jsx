import React from "react"
import './Navbar.css' 

const Navbar = () => {
  return (
    <div className="n-navbar">
      <div className="n-left">
        <div className="n-name">Andrew R.</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyle: 'none'}}>
            <li>Home</li>
            <li>Servicios</li>
            <li>Experiencias</li>
            <li>Testimonios</li>
            <button className="btn">
            contactame
          </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar