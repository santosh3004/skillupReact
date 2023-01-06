import React from 'react'
import Instructor from './Instructor'
import './instructors.css'

function Instructors() {
  return (
    <div>
      <div className='d-flex flex-column align-items-center featured-courses'>
        <div className='category-header'>Our Top Instructors <span style={{ color: '#03B97C' }}>Instructors</span></div>
        <div className='category-description' style={{ maxWidth: '670px', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        <div className='row'>
          <Instructor title={'Adam Riky'} enrolled={'7'} image={'https://demoapus1.com/skillup/wp-content/uploads//learn-press-profile/5/163bc32b5bd142be912f4d04a98845f4.jpeg'} profile={''} />
          <Instructor title={'David Garza'} enrolled={'50'} image={'https://demoapus1.com/skillup/wp-content/uploads//learn-press-profile/3/d354837ccfff1c20bfc3ed36e793f981.jpeg'} profile={'https://demoapus1.com/skillup/lp-profile/DavidGarza/'} />
          <Instructor title={'John Doe'} enrolled={'4'} image={'https://demoapus1.com/skillup/wp-content/uploads//learn-press-profile/7/daf22c2017d669b6d2084b606d45ca65.jpeg'} profile={'https://demoapus1.com/skillup/lp-profile/JohnDoe/'} />
        </div>
      </div>
    </div>
  )
}

export default Instructors