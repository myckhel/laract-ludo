import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className='navbar-brand' to='/'><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/game'><i className="fa fa-fw fa-gamepad" style={{ fontSize: '1.75em' }} /></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/history'><i className="fa fa-fw fa-history" style={{ fontSize: '1.75em' }} /></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/player/profile'><i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} /></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/articles'><i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em' }} /></Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
