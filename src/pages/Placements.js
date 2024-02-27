import React from 'react'
import Whychoiceus from '../Components/Whychoiceus'
import Placementrecords from '../Components/Placementrecords'

const Placements = () => {
  return (
    <>
        <section id="placements" class="placements scrolled-offset">
            <div class="container" data-aos="zoom-in">
                <div class="section-title">
                    <h2>Placements</h2>
                </div>
                <div className="row gx-5">
                    <div className="col-lg-7">
                        <div className="content">
                            <p>The placement cell is a vital part of our organization where the outcome of students’ technical and practical skills are weighed. KLE RLSI BCA has an excellent track record in placing students in well managed and reputed institutions with global standards across the IT capital of India, Bengaluru.</p>
                            <p>Institute has a dedicated Training & Placement wing working with an objective of organizing campus recruitment programs, provide placements to students, internships etc and also to guide students towards higher studies.</p>
                            <p>The institute has taken efforts to incorporate some of the industrial trends so that the students get prepared to face the global competition. The institute has always given importance for overall growth of the student thereby making them competent enough to face challenges of era of technology.</p>
                            <h2>Objective</h2>
                            <ul>
                                <li>Approaching various prospective employers</li>
                                <li>To establish academic alliances (MOUs) with leading Industries.</li>
                                <li>Integrated Industrial Training for students and faculty.</li>
                                <li>Giving Pre-Placement Training to students.</li>
                                <li>Arranging On-Campus interviews.</li>
                                <li>Arranging Industry interaction for</li>
                                <li>Employability Enhancement.</li>
                                <li>Arranging Personality Development Programs</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 section-bg">
                        <div id="companies" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#companies" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#companies" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#companies" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="2000">
                                <div className="carousel-container">
                                    <div className="row g-3">
                                        <div className="col-6">
                                            <img src="./img/placements/deloitte.webp" class="img-fluid" alt="" />
                                        </div>
                                        <div className="col-6">
                                            <img src="./img/placements/cognizant.webp" class="img-fluid" alt="" />
                                        </div>
                                        <div className="col-6">
                                            <img src="./img/placements/infosys.webp" class="img-fluid" alt="" />
                                        </div>
                                        <div className="col-6">
                                            <img src="./img/placements/tcs.webp" class="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div className="carousel-container">
                                    <div className="row gy-3">
                                        <div className="col-6">
                                            <img src="./img/placements/cognizant.webp" class="img-fluid" alt="" />
                                        </div>
                                        <div className="col-6">
                                            <img src="./img/placements/capgemini.webp" class="img-fluid" alt="" />
                                        </div>
                                        <div className="col-6">
                                            <img src="./img/placements/wipro.webp" class="img-fluid" alt="" />
                                        </div>
                                        <div className="col-6">
                                            <img src="./img/placements/tcs.webp" class="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div className="carousel-container">
                                    <div className="row gy-3">
                                        <div className="col-6">
                                            <img src="./img/placements/infosys.webp" class="img-fluid" alt="" />
                                        </div>
                                        <div className="col-6">
                                            <img src="./img/placements/wipro.webp" class="img-fluid" alt="" />
                                        </div>
                                        <div className="col-6">
                                            <img src="./img/placements/deloitte.webp" class="img-fluid" alt="" />
                                        </div>
                                        <div className="col-6">
                                            <img src="./img/placements/capgemini.webp" class="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#companies" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#companies" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Whychoiceus />
        <Placementrecords />
    </>
  )
}

export default Placements