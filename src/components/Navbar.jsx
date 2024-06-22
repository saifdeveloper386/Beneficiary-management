import React from 'react'
import { Link } from 'react-router-dom/dist'
import path from '../utils/path'
const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to={path.homePage}>Home</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to={path.manageBeneficiaries}>Manage Beneficiaries</Link>
      </li>
    </ul>
  
  </div>
</nav>
    </>
  )
}

export default Navbar
