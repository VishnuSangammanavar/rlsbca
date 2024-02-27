import React from 'react'

const Happenings = () => {
  return (
    <section id="happenings" class="happenings section-bg">
        <div class="container" data-aos="fade-up">
            <div class="row">
                <div className="col-12">
                    <div className="section-title">
                        <h2>Happenings</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet eveniet laborum eum ratione dignissimos ea eligendi debitis ipsum sapiente.</p>
                    </div>
                    <div className="row g-5 my-3">
                        <div className="col-lg-4 col-md-4">
                            <h3 className='title'>News</h3>
                            <div id="news" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="3000">
                                        <div class="carousel-container">
                                            <img src="./img/about1.jpg" alt="" />
                                            <div className="content">
                                                <p className='date'>Jan 02, 2024</p>
                                                <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, similique.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="3000">
                                        <div class="carousel-container">
                                            <img src="./img/about2.jpg" alt="" />
                                            <div className="content">
                                                <p className='date'>Jan 02, 2024</p>
                                                <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, similique.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="3000">
                                        <div class="carousel-container">
                                            <img src="./img/about3.jpg" alt="" />
                                            <div className="content">
                                                <p className='date'>Jan 02, 2024</p>
                                                <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, similique.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#news" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#news" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <h3 className='title'>Events</h3>
                            <div id="events" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="3000">
                                        <div class="carousel-container">
                                            <img src="./img/about3.jpg" alt="" />
                                            <div className="content">
                                                <p className='date'>Jan 02, 2024</p>
                                                <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, similique.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="3000">
                                        <div class="carousel-container">
                                            <img src="./img/about1.jpg" alt="" />
                                            <div className="content">
                                                <p className='date'>Jan 02, 2024</p>
                                                <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, similique.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="carousel-container" data-bs-interval="3000">
                                            <img src="./img/about2.jpg" alt="" />
                                            <div className="content">
                                                <p className='date'>Jan 02, 2024</p>
                                                <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, similique.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#events" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#events" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <h3 className='title'>Workshops</h3>
                            <div id="workshops" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="3000">
                                        <div class="carousel-container">
                                            <img src="./img/about1.jpg" alt="" />
                                            <div className="content">
                                                <p className='date'>Jan 02, 2024</p>
                                                <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, similique.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="3000">
                                        <div class="carousel-container">
                                            <img src="./img/about2.jpg" alt="" />
                                            <div className="content">
                                                <p className='date'>Jan 02, 2024</p>
                                                <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, similique.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="carousel-container" data-bs-interval="3000">
                                            <img src="./img/about3.jpg" alt="" />
                                            <div className="content">
                                                <p className='date'>Jan 02, 2024</p>
                                                <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, similique.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#workshops" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#workshops" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Happenings