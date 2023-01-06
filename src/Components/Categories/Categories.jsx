import React from 'react'
import './categories.css'
import Category from './Category'

function Categories() {
  return (
    <div>
      <div className='container d-flex categories flex-column align-items-center'>
        <div className='category-header'>Explore Featured <span style={{color:'#03B97C'}}>Categories</span></div>
        <div className='category-description' style={{maxWidth:'670px',}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        <div>
        <div className='row row-cols-5 justify-content-center align-items-center courses'>
          <Category icon={'fa fa-code'} title={'Development'} description={'3 Courses'}/>
          <Category icon={'fa fa-window-restore'} title={'Web Designing'} description={'6 Courses'}/>
          <Category icon={'fa fa-leaf'} title={'Lofestyle'} description={'4 Courses'}/>
          <Category icon={'fa fa-heartbeat'} title={'Health & Fitness'} description={'2 Courses'}/>
          <Category icon={'fa fa-laptop'} title={'IT & Software'} description={'2 Courses'}/>
          <Category icon={'fa fa-photo-video'} title={'Photography'} description={'1 Courses'}/>
          <Category icon={'fa fa-stamp'} title={'Finance & Accounting'} description={'3 Courses'}/>
          <Category icon={'fa fa-briefcase'} title={'Medical'} description={'0 Courses'}/>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Categories