import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-info">
                            <img src="./img/college_logo/RLSI_logo.png" alt="KLE BCA RLSI" width={"200px"} />
                            <p>KLE’S R.L.SCIENCE INSTITUTE BACHELOR OF COMPUTER APPLICATION COLLEGE ROAD, BELAGAVI KARNATAKA - INDIA</p>
                            <p className='mt-5'>
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>
                            <div class="social-links mt-3">
                                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-9'>
                        <div className="row">
                            <div class="col-lg-3 col-md-6 col-6 footer-links">
                                <h4>KLE BCA</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about/kle-society">About KLE Society</Link></li>
                                    <li><Link to="/about/kle-bca">About KLE BCA</Link></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 col-6 footer-links">
                                <h4>Academics</h4>
                                <ul>
                                    <li><Link to="/academics/bca-syllabus">BCA Syllabus</Link></li>
                                    <li><Link to="/academics/specializations">Specialization</Link></li>
                                    <li><Link to="/academics/academy-alliances">Academy Alliances</Link></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 col-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><Link to="/placements">Placements</Link></li>
                                    <li><Link to="/faculty">Faculties</Link></li>
                                    <li><a to="#">Admission Broucher</a></li>
                                    <li><a to="#">Admission Enquiry</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 col-6 footer-links">
                                <h4>Happenings</h4>
                                <ul>
                                    <li><Link to="/happenings/news">NEWS</Link></li>
                                    <li><Link to="/happenings/event">Event</Link></li>
                                    <li><Link to="/happenings/workshops">Workshops</Link></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 col-6 footer-links">
                                <h4>Facilities</h4>
                                <ul>
                                    <li><Link to="/facilities/classroom">Classroom</Link></li>
                                    <li><Link to="/facilities/library">Library</Link></li>
                                    <li><Link to="/facilities/computer-lab">Computer Lab</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                &copy; Copyright <strong><span>KLE BCA RLSI</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
                Designed by <a href="https://www.linkedin.com/in/vishnu-sangammanavar-11230021b/">Vishnu Sangammanavar</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer