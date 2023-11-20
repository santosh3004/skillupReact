import React from 'react'
import './footer.css'
import FooterLinkList from './FooterLinkList'

function Footer() {
  return (
    <div>
      <div className='d-flex flex-column customfooter'>
        <div className='row align-items-center justify-content-between footer-main'>
          <div className='col-6 d-flex flex-column align-items-start'>
            <div className='footer-header'><div class="logo-footer">
              <a href="https://demoapus1.com/skillup/">
                <span class="logo-main">
                  <img src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/logo-light.png" alt="" decoding="async" loading="lazy" /></span>
              </a>
            </div><span >Do You Need Help With
              Anything?</span></div>
            <div className='footer-header-description'>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</div>
            <div><form className="input-group mb-3">
              <input type="text" className="form-control footer-input" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">Subscribe</span>

              </div></form></div>
            <div></div>
          </div>
          <div className='row col-6 text-white'>
            <FooterLinkList title={'COURSES LIST'} links={['Lifestyle','Marketing','Development','Health & FItness','IT & Software','Photography']}/>
            <FooterLinkList title={'HELPFUL ARTICLES'} links={['Accounting','Business','Marketing','Sign In','Our Services','About Us']} />
            <FooterLinkList title={'QUICK LINKS'} links={['Blog','Shop',`FAQ'S`,'About US','Contact Us','Pricing']}/>
          </div>
        </div>
        <div className='footer-bottom'>
          © 2022 – Skillup. All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default Footer