import React from 'react'
import Carousel from '../Components/Carousel'
import About from '../Components/About'
import Specialization from '../Components/Specialization'
import Placements from '../Components/Placements'
import Happenings from '../Components/Happenings'
import Recognition from '../Components/Recognition'
import Contact from './Contact'
import Footer from '../Components/Footer'
import Whychoiceus from '../Components/Whychoiceus'

const Home = () => {
  return (
    <>
        <Carousel />
        <Recognition />
        <About />
        <Specialization />
        <Whychoiceus />
        <Placements />
        <Happenings />
        <Contact />
        {/* <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a> */}
    </>
  )
}

export default Home