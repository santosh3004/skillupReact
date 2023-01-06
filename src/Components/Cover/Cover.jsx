import React, { useState,useEffect } from 'react'
import './cover.css';
import CoverBottomComponent from './CoverBottomComponent';

function Cover() {

  const [appreciation,setAppreciation]=useState(0);
  const [countries,setCountries]=useState(0);
  const [courses,setCourses]=useState(0.0);

  useEffect(() => {
    const timerID=setInterval(()=>{
      if(appreciation<72){
      setAppreciation(appreciation+1);
    }
    if(countries<100){
      setCountries(countries+1);
    }
    if(courses<5.1){

      setCourses((courses+0.1));
    }
    
    },60);
    return () => {
      clearInterval(timerID);
    };
  }, [appreciation,countries,courses]);
  

  return (
    <div className='cover'>
      <div className='d-flex flex-column'>
      <div className='d-flex justify-content-center'>
        <div className='d-flex flex-column justify-content-center align-items-start cover-leading'>
          <div className='cover-headline'><h2>Find The Most Exciting Online Cources</h2></div>
          <div className='cover-information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</div>
          <div><form className="input-group mb-3">
          <i className="ico fa fa-search"></i>
  <input type="text" className="form-control" placeholder="Search Your Courses" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <span className="input-group-text" id="basic-addon2">Search</span>
  
</div></form></div>
          <div className='d-flex justify-content-around counter'>
            <div><div>{appreciation}<span>K</span></div><div className='counter-subtitle'><span>Appreciations</span></div></div>
            <div><div>{countries}</div><div className='counter-subtitle'><span>Countries</span></div></div>
            <div><div>{courses.toFixed(1)}<span>K+</span></div><div className='counter-subtitle'><span>Courses</span></div></div>
          </div>
        </div>
        <div>
        <img decoding="async" src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-2.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-2.png 778w, https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-2-300x286.png 300w, https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-2-768x731.png 768w, https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-2-500x476.png 500w" sizes="(max-width: 660px) 100vw, 660px"/>
        </div>
      </div>
      <div className='row ml-5 mr-auto cover-footer'>
        <CoverBottomComponent iconColor={'#FF5722'} iconBg={'#FFEDE7'} borderColor={'#FF602E'} icon={'fa fa-journal-whills'} title={'200+ Cources'} description={'Duis aute irure dolor in voluptate velit esse cillum labore .'}/>
        <CoverBottomComponent iconColor={'#906AD4'} iconBg={'#F2EDFA'} borderColor={'#A688DD'} icon={'fa fa-business-time'} title={'Fully Lifetime Access'} description={'Duis aute irure dolor in voluptate velit esse cillum labore .'}/>
        <CoverBottomComponent iconColor={'#7CBF2F'} iconBg={'#EFF7E6'} borderColor={'#90C950'} icon={'fa fa-journal-whills'} title={'200+ Cources Available'} description={'Duis aute irure dolor in voluptate velit esse cillum labore .'}/>

     
      </div>
      </div>
    </div>
  )
}

export default Cover