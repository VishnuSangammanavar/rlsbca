import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import DragHandleIcon from '@mui/icons-material/DragHandle';

const Layout = () => {

    const [scroll, setScroll] = useState()
    const [toggle, setToggle] = useState(true)
    
    const headerFixed = () => {
        let selectHeader = document.getElementById('header')
        let selectTopbar = document.getElementById('topbar')

        if (selectHeader) {
            if (scroll > 100) {
                selectHeader.classList.add('header-scrolled')
                if (selectTopbar) {
                  selectTopbar.classList.add('topbar-scrolled')
                }
            }
            else {
                selectHeader.classList.remove('header-scrolled')
                if (selectTopbar) {
                  selectTopbar.classList.remove('topbar-scrolled')
                }
            }
        }
    }

    useEffect(() => {
        setInterval(() => {
            setScroll(window.scrollY)
        }, 100);

        headerFixed()
    }, [scroll])

  return (
    <>
        <header id="header" class="fixed-top d-flex align-items-center">
            <div class="container-lg container-md container-sm container-fluid d-flex align-items-center">
                <div class="logo me-auto">
                    <a href="/">
                        <img src="../img/header/logo-header1.jpg" alt="logo" className='img-fluid' />
                    </a>
                </div>
                <nav id="navbar" class="navbar">
                    {!toggle?<div className="navbar-overlay d-lg-none d-block"></div>:null}
                    <ul style={ {right: `${toggle? '-520px':'0'}`} }>
                        <li className='nav-item'>
                            <Link to='/rlsbca/' className='nav-link'>Home</Link>
                        </li>
                        <li class="dropdown"><a href="#"><span>About</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <Link to='/about/kle-society'>KLE Society</Link>
                                <Link to='/about/kle-bca'>KLE BCA</Link>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="#"><span>Academics</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <Link to='#'>BCA Syllabus</Link>
                                <Link to='/academics/specializations'>Specializations</Link>
                                <Link to='/academics/academy-alliances'>Academy Alliances</Link>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Admission</a>
                        </li>
                        <li className='nav-item'>
                            <Link to='/placements' className='nav-link'>Placements</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/faculty' className='nav-link'>Faculty</Link>
                        </li>
                        <li class="dropdown"><a href="#"><span>Happenings</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <Link to='happenings/news'>NEWS</Link>
                                <Link to='happenings/events'>Events</Link>
                                <Link to='happenings/workshops'>Workshops</Link>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <Link to='/gallery' className='nav-link'>Gallery</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Contact' className='nav-link'>Contact</Link>
                        </li>
                        <div className="close-menu" onClick={() => setToggle(!toggle)}>
                            <CloseIcon className='mobile-nav-toggle' />
                        </div>
                    </ul>
                    <div className="open-menu" onClick={() => setToggle(!toggle)}>
                        <DragHandleIcon className='mobile-nav-toggle' />
                    </div>
                </nav>
            </div>
        </header>
        <Outlet />
    </>
  )
}

export default Layout