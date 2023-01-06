import React from 'react'

function FooterLinkList({title, links,}) {
  return (
    <>
      <div className='col-4 d-flex flex-column'>
              <div className='footer-title'>{title}</div>
              <div className='footer-links'>
              {links.map((link,index) => (
                <div key={index}>{link}</div>
              ))}
                </div>
            </div>
    </>
  )
}

export default FooterLinkList