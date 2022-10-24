import React from "react";
import "./Intro.css"
import Github from "../../assets/img/github.png"
import LinkedIn from "../../assets/img/linkedin.png"



const Intro = () => {
  return (
    
    <div className="intro">
      <div className="i-left">
      <div className="i-name">
        <span>Hola! me llamo</span>
        <span>Andrew Rojas</span>
        <span>Soy un Programador Web que reside en España, trabajo con tecnologías como Html, CSS, JavaScript, ExpressJS, ReactJS, NodeJS, MongoDB y seguimos trabajando en este mundo de constante aprendizaje.  </span>
      </div>

      <button class="btn i-btn">Contratame</button>
      <div className="i-icons">
        <img src={Github} alt="" />
        <img src={LinkedIn} alt="" />
      </div>

      </div>
      <div className="i-right">

      </div>
    </div>
  )
}

export default Intro