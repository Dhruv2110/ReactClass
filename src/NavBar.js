import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/input">Input</Link></li>
          <li><Link to="/api">Go to API</Link></li>
          <li><Link to="/effect">Effect</Link></li>
      </ul>
  )
}

export default NavBar