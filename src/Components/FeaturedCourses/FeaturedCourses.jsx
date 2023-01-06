import React from 'react'
import FeaturedCourse from './FeaturedCourse';
import './featuredcourses.css';

function FeaturedCourses() {
  return (
    <div>
      <div className='d-flex flex-wrap featured-courses flex-column justify-contents-center align-items-center'>
        <div className='category-header'>Explore Featured <span style={{ color: '#03B97C' }}>Courses</span></div>
        <div className='category-description' style={{ maxWidth: '670px', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        <div>
          <div className="row courses-grid">
            <FeaturedCourse category={'Developement'} enrolled={58} duration={12} lessons={3} level={'Intermediate'} author={'David Garza'} link={'https://demoapus1.com/skillup/wp-content/uploads//learn-press-profile/3/d354837ccfff1c20bfc3ed36e793f981.jpeg'} authorProfile={'https://demoapus1.com/skillup/lp-profile/DavidGarza/'} price={'Free'} image={'https://demoapus1.com/skillup/wp-content/uploads/2022/05/cr-1-525x345.jpg'} title={'Full Web Designing Course With 30 Web Template'}/>


            <FeaturedCourse category={'IT & Software'} enrolled={12} duration={8} lessons={4} level={'Expert'} author={'John Doe'} link={'https://demoapus1.com/skillup/wp-content/uploads//learn-press-profile/7/daf22c2017d669b6d2084b606d45ca65.jpeg'} authorProfile={'https://demoapus1.com/skillup/lp-profile/JohnDoe/'} price={'$79'} image={'https://demoapus1.com/skillup/wp-content/uploads/2022/05/cr-4-525x345.jpg'} title={'Education Software And PHP And JS System Script'}/>


            <FeaturedCourse category={'Finance & Accounting'} enrolled={17} duration={8} lessons={8} level={'Beginner'} author={'Adam Riky'} link={'https://demoapus1.com/skillup/wp-content/uploads//learn-press-profile/5/163bc32b5bd142be912f4d04a98845f4.jpeg'} authorProfile={'https://demoapus1.com/skillup/lp-profile/AdamRiky/'} price={'Free'} image={'https://demoapus1.com/skillup/wp-content/uploads/2022/05/cr-5-525x345.png'} title={'The Complete Business Plan Course Includes 10+ Templates'}/>


            <FeaturedCourse category={'Health & Fitness'} enrolled={15} duration={12} lessons={3} level={'Beginner'} author={'Mike Hussy'} link={'https://demoapus1.com/skillup/wp-content/uploads//learn-press-profile/6/f4f5a4c26c0236655cf1db337e298358.jpeg'} authorProfile={'https://demoapus1.com/skillup/lp-profile/MikeHussy/'} price={'Free'} image={'https://demoapus1.com/skillup/wp-content/uploads/2022/05/cr-6-525x345.png'} title={'Fitness, Physical Education Relation To Academic Performance'}/>


            <FeaturedCourse category={'Photography'} enrolled={12} duration={15} lessons={3} level={'Beginner'} author={'Robert Fox'} link={'https://demoapus1.com/skillup/wp-content/uploads//learn-press-profile/8/34245a2fa7282bb86236f8be7f12f3cd.jpeg'} authorProfile={'https://demoapus1.com/skillup/lp-profile/RobertFox/'} price={'$86'} image={'https://demoapus1.com/skillup/wp-content/uploads/2022/05/cr-7-525x345.jpg'} title={'The Idea Was Based On Our Experiences Learning Photoshop'}/>


            <FeaturedCourse category={'Development'} enrolled={12} duration={6} lessons={3} level={'Expert'} author={'David Garza'} link={'https://demoapus1.com/skillup/wp-content/uploads//learn-press-profile/3/d354837ccfff1c20bfc3ed36e793f981.jpeg'} authorProfile={'https://demoapus1.com/skillup/lp-profile/DavidGarza/'} price={'$69'} image={'https://demoapus1.com/skillup/wp-content/uploads/2022/05/cr-8-525x345.jpg'} title={'Advance PHP Knowledge With JS To Make Smart Web'}/>

          </div>
        </div>
        <div>
          <div className='explore-btn'>
            <a href='https://demoapus1.com/skillup/lp-courses/'>Explore More Courses</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCourses