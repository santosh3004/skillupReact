import React from 'react'

function Category({icon, title, description}) {
  return (
    <>
      <div className='d-flex col flex-column single-course align-items-center'>
            <div className='icon' ><i className={icon}></i></div>
            <div className='text-center'>
              <h2 className='course-title'>{title}</h2>
              <div className='course-description'>{description}</div>
            </div>
          </div>
    </>
  )
}

export default Category