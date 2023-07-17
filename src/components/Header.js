import React, { useState, useEffect } from 'react';

import NavBar from './Nav';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header = () => {
const navigate = useNavigate();
const [active,SetActive] = useState(false);

const headerChange = () =>{
    if (window.scrollY >= 392){
        SetActive(true)
    }
    else{
        SetActive(false);
    }
}
window.addEventListener("scroll", () => headerChange());
    return (
        <div className={`header ${active ? 'scrolled' : ''}`}>

            <div className='container-content'>
                <div className='header-wrap'>
                    <div className='wraps'>
                        <div className="logo-wrap" onClick={() => navigate("./")}>
                            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt='' />
                            <h3>ronan.dev</h3>
                        </div>
                    </div>
                    <NavBar />
                    <div className="wrap">
                        <ul>
                            <li>
                                <Link target='__blank' to="https://www.github.com/monority"><i className='fa-brands fa-github'></i></Link>
                            </li>
                            <li>
                            <Link  target='__blank' to="https://www.linkedin.com/in/ronanchenu/"><i className='fa-brands fa-linkedin'></i></Link>
                            </li>
                            <li>
                           <i onClick={() => navigate("./contact")} className="fa-solid fa-envelope"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
