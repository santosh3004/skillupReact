import React from 'react'

function Article({image,category,title,description,authorImage,time}) {
  return (
    <>
      <div className="col-3 single-newsarticle">
              <div className="newsarticle-grid">
                <div className="newsarticle-layout-item">
                  <div className="newsarticle-entry">
                    <div className="newsarticle-cover">
                      <div className="newsarticle-cover-thumb">
                        <figure className="entry-thumb"><a className="post-thumbnail" href="https://demoapus1.com/skillup/course/full-web-designing-course-with-30-web-template/" aria-hidden="true"><div className="image-wrapper"><img decoding="async"  srcSet={image} className="attachment-skillup-course-grid size-skillup-course-grid" alt="" /></div></a></figure>                    </div>
                    </div>

                    <div className="newsarticle-layout-content d-flex flex-column">
                      <div className="newsarticle-info-top d-flex justify-content-between">
                        <div className="newsarticle-category">
                          <a className="newsarticle-category-item" href={'https://demoapus1.com/skillup/course-category/'+category+'/'}>{category}</a>
                        </div>

                      </div>

                      <div>
                      <h5 className="newsarticle-title"><a href="https://demoapus1.com/skillup/course/full-web-designing-course-with-30-web-template/">{title}</a></h5>
                      </div>

                      <div className="newsarticle-meta-middle">
                        {description} 
                      
                      </div>

                      <div className="newsarticle-meta-bottom d-flex align-items-center justify-content-between">

                        <div className="lp-newsarticle-author d-flex align-items-center">
                          <div className="newsarticle-author__pull-left d-flex align-items-center justify-content-center">
                            <img decoding="async" loading="lazy" alt="David Garza" srcSet={authorImage} className="avatar avatar-96 photo" />                        </div>
                          <div className="author-title"><a href="https://demoapus1.com/skillup/lp-profile/DavidGarza/"></a></div>
                        </div>

                        <div className="newsarticle-meta-field newsarticle-meta-price ms-auto">

                          <div className="news-article-time">
                          <i class="fa fa-clock"></i>
                          <span>{time}</span>
                          </div>
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

export default Article