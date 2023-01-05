import React from 'react'
import './categories.css'

function Categories() {
  return (
    <div>
      <div className='container d-flex categories flex-column align-items-center'>
        <div className='category-header'>Explore Featured <span style={{color:'#03B97C'}}>Categories</span></div>
        <div className='category-description' style={{maxWidth:'670px',}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        <div>
        <div className='row row-cols-5 justify-content-center align-items-center courses'>
          <div className='d-flex col flex-column single-course align-items-center'>
            <div className='icon' ><i className="fa fa-journal-whills"></i></div>
            <div className='text-center'>
              <h2 className='course-title'>Development</h2>
              <div className='course-description'>3 Courses</div>
            </div>
          </div>
          <div className='d-flex col flex-column single-course align-items-center'>
            <div className='icon' ><i className="fa fa-business-time"></i></div>
            <div className='text-center'>
              <h2 className='course-title'>Web Designing</h2>
              <div className='course-description'>3 Courses</div>
            </div>
          </div>
          <div className='d-flex col flex-column single-course align-items-center'>
            <div className='icon' ><i className="fa fa-journal-whills"></i></div>
            <div className='text-center'>
              <h2 className='course-title'>Lifestyle</h2>
              <div className='course-description'>3 Courses</div>
            </div>
          </div>
          <div className='d-flex col flex-column single-course align-items-center'>
            <div className='icon' ><i className="fa fa-journal-whills"></i></div>
            <div className='text-center'>
              <h2 className='course-title'>Health & Fitness</h2>
              <div className='course-description'>3 Courses</div>
            </div>
          </div>
          <div className='d-flex col flex-column single-course align-items-center'>
            <div className='icon' ><i className="fa fa-business-time"></i></div>
            <div className='text-center'>
              <h2 className='course-title'>IT & Software</h2>
              <div className='course-description'>3 Courses</div>
            </div>
          </div>
          <div className='d-flex col flex-column single-course align-items-center'>
            <div className='icon' ><i class="fa fa-journal-whills"></i></div>
            <div className='text-center'>
              <h2 className='course-title'>Photography</h2>
              <div className='course-description'>3 Courses</div>
            </div>
          </div>
          <div className='d-flex col flex-column single-course align-items-center'>
            <div className='icon' ><i class="fa fa-journal-whills"></i></div>
            <div className='text-center'>
              <h2 className='course-title'>Finance & Accounting</h2>
              <div className='course-description'>3 Courses</div>
            </div>
          </div>
          <div className='d-flex col flex-column single-course align-items-center'>
            <div className='icon'><i class="fa fa-business-time"></i></div>
            <div className='text-center'>
              <h2 className='course-title'>Medical</h2>
              <div className='course-description'>3 Courses</div>
            </div>
          </div>
     
      </div>
        </div>
      </div>
    </div>
  )
}

export default Categories