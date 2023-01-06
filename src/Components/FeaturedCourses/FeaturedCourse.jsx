import React from 'react'

function FeaturedCourse({title, image, author, price, duration, lessons, level, enrolled, category, link,authorProfile}) {
  return (
    <>
         <div className="col-3 featured-single-course">
              <div className="course-grid">
                <div className="course-layout-item">
                  <div className="course-entry">
                    <div className="course-cover">
                      <div className="course-cover-thumb">
                        <figure className="entry-thumb"><a className="post-thumbnail" href="https://demoapus1.com/skillup/course/full-web-designing-course-with-30-web-template/" aria-hidden="true"><div className="image-wrapper"><img decoding="async"  srcSet={image} className="attachment-skillup-course-grid size-skillup-course-grid" alt="" /></div></a></figure>                    </div>
                    </div>

                    <div className="course-layout-content d-flex flex-column">
                      <div className="course-info-top d-flex justify-content-between">
                        <div className="course-category">
                          <a className="course-category-item" href="https://demoapus1.com/skillup/course-category/development/">{category}</a>
                        </div>

                        <div className="course-student-number ms-auto">
                          {enrolled}                       Enrolled                    
                        </div>
                      </div>

                      <div>
                      <h3 className="course-title"><a href="https://demoapus1.com/skillup/course/full-web-designing-course-with-30-web-template/">{title}</a></h3>
                      </div>

                      <div className="course-meta-middle d-flex justify-content-between">

                        <div className="course-duration course-meta-field">
                          <i className="fa fa-clock text-danger"></i>
                          {duration} week                    </div>

                        <div className="course-lesson-number course-meta-field">
                          <i className="fa fa-video text-success"></i>
                          {lessons}                        Lessons                    </div>
                        <div className="course-level course-meta-field">
                          <i className="fa fa-signal text-warning"></i>
                          {level}                        </div>

                      </div>

                      <div className="course-meta-bottom d-flex align-items-center justify-content-between">

                        <div className="lp-course-author d-flex align-items-center">
                          <div className="course-author__pull-left d-flex align-items-center justify-content-center">
                            <img decoding="async" loading="lazy" alt="" srcSet={link} className="avatar avatar-96 photo" />                        </div>
                          <div className="author-title"><a href={authorProfile}><span>{author}</span></a></div>
                        </div>

                        <div className="course-meta-field course-meta-price ms-auto">

                          <div className="course-price">
                            <span className="free">{price}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
    </>
  )
}

export default FeaturedCourse