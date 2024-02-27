import React from 'react'

const News = () => {
  return (
    <section id="news" class="news scrolled-offset">
        <div class="container" data-aos="fade-up">
            <div className="section-title">
                <h2>NEWS</h2>
            </div>
            <div className="row g-5 my-3">
                <div className="col-lg-4 col-md-4">
                    <div class="news-item">
                        <img src="../img/about2.jpg" alt="" />
                        <div className="content">
                            <p className='date'>Jan 02, 2024</p>
                            <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, similique.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div class="news-item">
                        <img src="../img/about1.jpg" alt="" />
                        <div className="content">
                            <p className='date'>Jan 02, 2024</p>
                            <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, similique.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div class="news-item">
                        <img src="../img/about1.jpg" alt="" />
                        <div className="content">
                            <p className='date'>Jan 02, 2024</p>
                            <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, similique.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div class="news-item">
                        <img src="../img/about1.jpg" alt="" />
                        <div className="content">
                            <p className='date'>Jan 02, 2024</p>
                            <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, similique.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default News