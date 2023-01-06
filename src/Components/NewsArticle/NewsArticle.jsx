import React from 'react'
import Article from './Article'
import './newsarticle.css'
function NewsArticle() {
  return (
    <div>
         <div className='d-flex flex-wrap news-article-main flex-column justify-contents-center align-items-center'>
        <div className='category-header'>Latest News & <span style={{ color: '#03B97C' }}>Articles</span></div>
        <div className='category-description' style={{ maxWidth: '670px', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        <div>
          <div className="row newsarticles-grid">
              <Article category={'Accounting'} title={`Let's Know How Skillup Work Fast and Secure?`} image={'https://demoapus1.com/skillup/wp-content/uploads/elementor/thumbs/b-1-ppd9thaksf8fnyikd8s83il6f1v86oidmxbczpmz28.png'} authorImage={'https://demoapus1.com/skillup/wp-content/uploads//learn-press-profile/3/d354837ccfff1c20bfc3ed36e793f981.jpeg'} description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. '} time={'April 9,2022'}/>
              <Article category={'Business'} title={'How To Improve Digital Marketting for Fast SEO'} image={'https://demoapus1.com/skillup/wp-content/uploads/elementor/thumbs/b-2-ppd9thaksf8fnyikd8s83il6f1v86oidmxbczpmz28.png'} authorImage={'https://demoapus1.com/skillup/wp-content/uploads//learn-press-profile/3/d354837ccfff1c20bfc3ed36e793f981.jpeg'} description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. '} time={'April 9,2022'}/>
              <Article category={'Marketting'} title={'How to Register & Enrolled on SkillUp Step by Step'} image={'https://demoapus1.com/skillup/wp-content/uploads/elementor/thumbs/b-3-ppd9thaksf8fnyikd8s83il6f1v86oidmxbczpmz28.png'} authorImage={'https://demoapus1.com/skillup/wp-content/uploads//learn-press-profile/3/d354837ccfff1c20bfc3ed36e793f981.jpeg'} description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. '} time={'April 9,2022'}/>
             
          </div>
        </div>
      </div>
      <div className='contact-us'>
      <div className='row align-items-center justify-content-around contact-us-grid'>
        <div className="col-6">
          <div className="d-flex flex-column newsarticle-contactus-description">
            <div>Do You Have Questions ?</div>
            <div>We'll help you to grow your career and growth.</div>
            </div>
        </div>
        <div className="col-6">
          <a href="https://demoapus1.com/skillup/contact-us/" className="newsarticle-contactus-button">Contact Us Today</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NewsArticle