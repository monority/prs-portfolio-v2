import React from 'react';

import NavBar from './Nav';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='header'>

            <div className='container-content'>
                <div className='header-wrap'>
                    <div className='wraps'>
                        <div className="logo-wrap">
                            <a href='/'>
                                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt='' />
                            </a>
                            <h3>ronan.dev</h3>
                        </div>
                    </div>
                    <NavBar />
                    <div className="wrap">
                        <ul>
                            <li>
                                <Link to="https://www.github.com/monority"><i className='fa-brands fa-github'></i></Link>
                            </li>
                            <li>
                            <Link to="https://www.linkedin.com/id/ronanchenu"><i className='fa-brands fa-linkedin'></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
