import React from 'react'
import { faculties } from '../Data';

const Faculty = () => {
  return (
    <section id="faculties" class="faculties scrolled-offset">
        <div class="container">
            <div className="section-title">
                <h2>Faculty Members</h2>
            </div>
            <div class="row gy-5">
                {
                    faculties.map((value) => {
                        return (
                            <div class="col-lg-4 col-md-6 faculty" data-aos="fade-up" data-aos-delay="100">
                                <div class="faculty-img">
                                    <img src={value.imgUrl} class="img-fluid" alt="" />
                                    <div class="social">
                                        <a href="#"><i class="bi bi-twitter"></i></a>
                                        <a href="#"><i class="bi bi-facebook"></i></a>
                                        <a href="#"><i class="bi bi-instagram"></i></a>
                                        <a href="#"><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div class="faculty-info text-center">
                                    <h4>{value.name}</h4>
                                    <span>{value.role}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Faculty