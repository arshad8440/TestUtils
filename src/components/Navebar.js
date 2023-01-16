import React from 'react'
import PropTypes from 'prop-types' 
import { Link } from 'react-router-dom'


export default function Navebar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style= {{background: props.mode === 'light' ? 'white' : '#131314'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <div className={`d-flex form-check form-switch my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.toglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} mode</label>
        </div>
    </div>
  </div>
</nav>
  )
}
Navebar.prototype = {
    title: PropTypes.string.isRequired, // here we are set the props types to the string
    link: PropTypes.string.isRequired
}
Navebar.defaultProps = { // here we are st the default props types when we are not set props type the defaylt props types display on over website.
    title: 'Default title here',
    link: 'Default text here'
}
