import React from 'react'

const Carousel = () => {
  return (
    <div id="hero" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#hero" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#hero" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#hero" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000" style={ {backgroundImage: "url('../img/banner/banner2.jpg')"} }>
                <div class="carousel-container">
                    <div class="carousel-content container d-flex flex-column justify-content-lg-center justify-content-end">
                        <h2 class="animate__animated animate__fadeInDown">Partner for your future of learning</h2>
                        <p class="animate__animated animate__fadeInUp">KLE’s BCA aspires to be a premier technical institute to impart quality and innovative technical education with latest technology that will meet the requirements of all its stakeholders.</p>
                        <div className="info">
                            <p>Accredited</p>
                            <h3>with A grade by NAAC</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000" style={ {backgroundImage: "url('../img/banner/banner1.jpg')"} }>
                <div class="carousel-container">
                    <div class="carousel-content container d-flex flex-column justify-content-lg-center justify-content-end">
                        <h2 class="animate__animated animate__fadeInDown">Take control of your future with <span>KLE Society's College of BCA RLSI, Belagavi</span></h2>
                        <p class="animate__animated animate__fadeInUp">To be the best in creating Engineering Knowledge and educating for dynamic and global careers, get recognized as an International Leader in application of knowledge.</p>
                        <div className="info">
                            <p>Skilled Lecturers</p>
                            <h3>Learn from Professionals</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item" style={ {backgroundImage: "url('../img/banner/banner3.jpg')"} }>
                <div class="carousel-container">
                    <div class="carousel-content container d-flex flex-column justify-content-lg-center justify-content-end">
                        <h2 class="animate__animated animate__fadeInDown">Take control of your future with <span>KLE Society's College of BCA RLSI, Belagavi</span></h2>
                        <p class="animate__animated animate__fadeInUp">To motivate the students to be socially responsible, productive and useful citizens of the globalized world. To create a cogenial atmosphere of learning with the aim of developing technically sound, ethically strong and morally elevated individuals.</p>
                        <div className="info">
                            <p>Specialization</p>
                            <h3>Choice your Specialization</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#hero" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#hero" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel