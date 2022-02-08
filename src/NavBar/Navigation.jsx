import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoSearch } from 'react-icons/go';
import './Navigation.css'
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    const [showmedia, setShowmedia] = useState(false);
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    
                        <img src="https://cdn.dribbble.com/users/2057697/screenshots/11405073/media/7c71d0d51ef5a492c02043429bce5294.jpg" alt="" />
                    
                </div>
                <div className="social-media ">
                    {/* <ul className="social-media-desktop">
                        <li>
                            <a href=""><FaFacebook className='facebook'/></a>
                          
                        </li>
                        <li>
                        <a href=""><FaInstagram className='instagram'/></a>
                        </li>
                        <li>
                              
                        <a href=""><FaYoutube className='youtube'/></a>
                        </li>
                    </ul> */}
                  
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowmedia(!showmedia)}><GiHamburgerMenu /></a>
                    </div>
                </div>
                <div className={showmedia ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin">Admin</NavLink>
                        </li>
                        <li>
                            <NavLink to="/userlogin">Login</NavLink>
                        </li>
                    </ul>
                </div>



            </nav>
            {/* <section className="hero-section">
                <p>Ajay Kharat </p>
                <h1>Front End Developer</h1>
            </section> */}
        </>
    )
}
