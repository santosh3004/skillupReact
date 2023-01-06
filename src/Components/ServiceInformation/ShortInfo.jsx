import React from 'react'
import './serviceinformation.css'
function ShortInfo({title}) {
  return (
    <>
<div className='d-flex align-items-start'>
              <div className='information-check-icon'><i class="fas fa-check"></i></div>
              <div className='short-headline'>{title}</div>
            </div>
    </>
  )
}

export default ShortInfo