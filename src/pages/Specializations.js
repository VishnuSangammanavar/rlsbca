import React from 'react'
import Specialization from '../Components/Specialization'

const Specializations = () => {
  return (
    <section id='specializations' className='specializations scrolled-offset'>
        <div className="container">
            <div className="section-title">
                <h2>Specializations</h2>
            </div>
            <div className="row">
              <Specialization />
            </div>
            <div className="row g-5 my-3">
                <div className="col-lg-4 col-md-6">
                    <div class="specialization-item">
                        <img src="./img/specialization/cloud-computing.jpg" alt="" />
                        <div className="content">
                            <h3 className='title'>Cloud Computing</h3>
                            <p className='desc'>With rapid changes in technology, Cloud computing has become the driving force of business in recent years and has impacted on nearly every aspect of the Information Technology landscape including data and analytics, information security and project management. The Cloud Computing will prepare students to understand the emerging technologies of Cloud Computing & Virtualization, their principles, modeling, analysis, design, deployment and industry-oriented applications.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div class="specialization-item">
                        <img src="./img/specialization/data-science.jpg" alt="" />
                        <div className="content">
                            <p className='title'>Data Science</p>
                            <p className='desc'>The Subject will introduce the students to the basics of the python programming environment, including fundamental python programming techniques such as lambdas, reading and manipulating csv files, and the numpy library,data manipulation and cleaning techniques using the popular python data science library and introduce the abstraction of the Series and DataFrame as the central data structures for data analysis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div class="specialization-item">
                        <img src="./img/specialization/web-development.png" alt="" />
                        <div className="content">
                            <p className='title'>Wen Development</p>
                            <p className='desc'>Designed to get you hired, this immersive full stack development subject. Gain a deep understanding of how to build, deploy, secure and scale programs and build expertise across the user interface, business logic and database stacks.Full Stack Developer breaks down the fundamentals of each technology into five separate segments – Frontend, Backend, Database, other essential technologies and Debugging/Version Control.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Specializations