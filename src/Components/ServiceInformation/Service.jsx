import React from 'react'

function Service({title, description, icon}) {
  return (
    <>
      <div className='d-flex'>
              <div className='information-second-icon'><i class={icon}></i></div>
              <div className='d-flex flex-column'>
                <div className='information-service-header'>{title}</div>
                <div className='information-long-description'>{description}</div>
              </div>
            </div>
    </>
  )
}

export default Service