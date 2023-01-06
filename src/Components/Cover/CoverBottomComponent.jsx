import React from 'react'

function CoverBottomComponent({ icon, title, description,iconBg,borderColor,iconColor }) {
  return (
    <>
      <div className='col-3 d-flex mb-5 single-cover-footer align-items-center'>
        <div style={{ backgroundColor: `${iconBg}`, borderColor: `${borderColor}`, color: `${iconColor}` }}><i className={icon}></i></div>
        <div>
          <h3 className='cover-footer-title'>{title}</h3>
          <div className='cover-footer-dexcription'>{description}</div>
        </div>
      </div>
    </>
  )
}

export default CoverBottomComponent