import React from 'react'

const Topbar = () => {
  return (
    <section id="topbar" class="fixed-top d-flex align-items-center d-lg-block d-md-none d-none">
        <div class="container d-flex justify-content-center justify-content-md-between">
            <div class="contact-info d-flex align-items-center">
                <i class="bi bi-envelope-fill"></i><a href="#">KLE Socity's college of BCA RLSI, Belagavi</a>
                <span className='mx-4'>|</span>
                <i class="bi bi-envelope-fill"></i><a href="mailto:contact@example.com">info@example.com</a>
                <span className='mx-4'>|</span>
                <i class="bi bi-phone-fill phone-icon"></i> +1 5589 55488 55
            </div>
            <div class="social-links d-none d-md-block">
                <a href="#" target='_blank' class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" target='_blank' class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" target='_blank' class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" target='_blank' class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Topbar