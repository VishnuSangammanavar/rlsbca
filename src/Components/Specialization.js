import React from 'react'
import { Link } from 'react-router-dom'

const Specialization = () => {
  return (
    <section id="specialization" class="specialization">
      <div class="container" data-aos="fade-up">
        <div class="row gy-4">
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="box">
              <h3>Specialization</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div class="text-center">
                <Link to="/academics/specializations" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></Link>
              </div>
            </div>
          </div>
          <div class="col-lg-8 d-flex align-items-center">
            <div class="row gy-4">
              <div class="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div class="icon-box d-flex flex-column">
                  <img src="./img/specialization/cloud-computing.jpg" alt="" class="img-fluid" />
                  <h4>Cloud Computing</h4>
                </div>
              </div>
              <div class="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div class="icon-box d-flex flex-column">
                  <img src="./img/specialization/data-science.jpg" alt="" class="img-fluid" />
                  <h4>Data Science with Python</h4>
                </div>
              </div>
              <div class="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="400">
                <div class="icon-box d-flex flex-column">
                  <img src="./img/specialization/web-development.png" alt="" class="img-fluid" />
                  <h4>Web Development</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specialization