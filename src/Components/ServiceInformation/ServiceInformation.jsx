import React from 'react'
import Service from './Service'
import ShortInfo from './ShortInfo'

function ServiceInformation() {
  return (
    <div>
      <div className='row service-information-section justify-content-center align-items-center'>
        <div className='col-3'>
          <div className='first-information-header'><h2>We Have The Best Instructors Available in The City</h2></div>
          <div className='service-information-description'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique</div>
          <div className='d-flex flex-column align-items-start information-headlines'>
            <ShortInfo title={'Full Lifetime Access'}/>
            <ShortInfo title={'20+ Downloadable Resources'}/>
            <ShortInfo title={'Certificate of Completion'}/>
            <ShortInfo title={'Free Trial 7 Days'}/>
            <div className='enroll-btn'>
              <div className='enroll-btn-link'>
                <a href="http://">Enroll Today</a>
              </div>
            </div>
          </div>
          
        </div>
        <div className='col-6 image'><img decoding="async" width="1000" height="669" src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-1.jpg" class="attachment-full size-full" alt="" loading="lazy" srcset="https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-1.jpg 1000w, https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-1-300x201.jpg 300w, https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-1-768x514.jpg 768w, https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-1-500x335.jpg 500w" sizes="(max-width: 1000px) 100vw, 1000px"/></div>
        <div className='col-6 image'><img decoding="async" width="1000" height="667" src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-2.jpg" class="attachment-full size-full" alt="" loading="lazy" srcset="https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-2.jpg 1000w, https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-2-300x200.jpg 300w, https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-2-768x512.jpg 768w, https://demoapus1.com/skillup/wp-content/uploads/2022/04/side-2-500x334.jpg 500w" sizes="(max-width: 1000px) 100vw, 1000px"/></div>
        <div className='col-3'>
          <div className='d-flex flex-column'>
            <Service title={'Easy Uploads Lectures'} description={'Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.'} icon={'fa fa-photo-video'} />
            <Service title={'Customize According You'} description={'Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.'} icon={'fa fa-edit'} />
            <Service title={'Ask Unlimited Questions'} description={'Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.'} icon={'fa fa-question-circle'} />
            <Service title={'100% Satisfactions'} description={'Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.'} icon={'fa fa-thumbs-up'} />
          </div></div>
      </div>
    </div>
  )
}

export default ServiceInformation