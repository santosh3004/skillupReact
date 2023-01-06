import React from 'react'

function Instructor({title, enrolled,profile,image}) {
  return (
    <>
      <div className='col-md-4 col-sm-6'>
            <div className='card'>
              <img decoding="async" loading="lazy" alt="Adam Riky" src={image} />
              <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'><i class="fa fa-user text-theme"></i>{enrolled} Enrolled</p>
                <a href={profile} className='instructorsbtn'>Enroll Now</a>
              </div>
            </div>
          </div>
    </>
  )
}

export default Instructor