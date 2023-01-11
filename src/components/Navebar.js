import React from 'react'
import PropTypes from 'prop-types' 
// import { Link } from 'react-router-dom'


export default function Navebar(props) {
  return (
    <nav className={`navbar navbar-expand-lg colors navbar-${props.mode}`} style= {{background: props.mode === 'light' ? 'white' : '#131314'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <a href="/about" className="nav-link" >About</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button type="button" className='btn btn-primary mx-2' onClick={props.togelblue}>set background</button>
        <button type="button" className='btn btn-primary mx-2' onClick={props.togelbluemode}>set background</button>
        <button type="button" className='btn btn-primary mx-2' onClick={props.togellightbluemode}>set background</button> */}
        <div className={`form-check form-switch my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.toglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} mode</label>
        </div>
      </form>
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
