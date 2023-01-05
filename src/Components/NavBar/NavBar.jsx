import React from 'react'
import './navbar.css';

function NavBar() {
  return (
    <div>
      <div className='sticky'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='p-2 mr-5'>
      <a href="https://demoapus1.com/skillup/">
                <span className="logo-main">
                    <img width="292" height="72" src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/logo.png" className="attachment-full size-full" alt="" decoding="async" loading="lazy"/>                </span>
            </a>
            </div>
       
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportdeContent" aria-controls="navbarSupportdeContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto d-flex justify-content-around" id='navbar-nav'>
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Home
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id='dropmenu'>
          <a className="dropdown-item" href="#">Home 1</a>
          <a className="dropdown-item" href="#">Home 2</a>
          <a className="dropdown-item" href="#">Home 3</a>
          <a className="dropdown-item" href="#">Home 4</a>
          <a className="dropdown-item" href="#">Home 5</a>
          <a className="dropdown-item" href="#">Home 6</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Courses
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Blog
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Shop</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Pages
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
     
      
    </ul>
    
    <div className='signIn my-2 my-lg-0'><a className="btn-login btn btn-theme btn-inverse" href="https://demoapus1.com/skillup/lp-profile/">
                    <i className="fas fa-sign-in-alt pre"></i>Sign In</a></div>

  </div>
</nav>
</div>
    </div>
  )
}

export default NavBar