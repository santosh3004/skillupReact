import {React,useState,useEffect} from 'react'
import './mobilenav.css';
function MobileNav({handleMobNavStatus}) {
  return (
    <div>
      <div className='mobnav-dark-bg' id='movnav-dark-bg'></div>
      <div className='mobnav-main' id='mySidenav'>
        <div className='d-flex flex-column'>
          <div className='row mobile-nav-top align-items-center'>
            <div className='col-6'><a href="https://demoapus1.com/skillup/">
                                    <img className='mobile-nav-icon' src="https://demoapus1.com/skillup/wp-content/themes/skillup/images/logo.png" alt="Skillup"/>
                                </a></div>
            <div className='col-6'><i onClick={handleMobNavStatus} className="fa fa-times close-icon"></i></div>
          </div>
          <div className='mobile-nav-link'>Home</div>
          <div className='mobile-nav-link'>Courses</div>
          <div className='mobile-nav-link'>Blog</div>
          <div className='mobile-nav-link'>Shop</div>
          <div className='mobile-nav-link'>Contact Us</div>
          <div className='mobile-nav-link'>About-Us</div>
          <div className='mob-nav-btn'>
            <i className="fas fa-sign-out-alt"></i>
            <span>Login/Register</span>
          </div>
          </div>
      </div>
    </div>
  )
}

export default MobileNav