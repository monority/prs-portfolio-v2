import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRef } from "react";
import { Link } from "react-scroll";
import React from 'react';

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive-nav"
        );
    };
    return (
        <div className="menu-wrap">

            <div className="list-wrap" ref={navRef}>
                <ul>
                    <li className="nav-item">
                        <Link onClick={showNavbar} to="landing-page" offset={-150} spy={true} smooth={true} duration={300}>Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={showNavbar} to="about-page" offset={-100} spy={true} smooth={true} duration={300}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={showNavbar} to="tech-page" offset={0} spy={true} smooth={true} duration={300}>Techno</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={showNavbar} to="skill-page" offset={-50} spy={true} smooth={true} duration={300}>Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={showNavbar} to="project-page" offset={-50} spy={true} smooth={true} duration={300}>Project</Link>
                    </li>
                </ul>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}
                    aria-label="Fermer le menu"
                    >
                    <AiOutlineClose />
                </button>
            </div>
            <button
                className="nav-btn"
                aria-label="Ouvrir le menu"
                onClick={showNavbar}>
                <AiOutlineMenu />
            </button>
        </div>
    );
}

export default Navbar;