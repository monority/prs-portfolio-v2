import React from 'react';

import NavBar from './Nav';

const Header = () => {
    return (
        <div className='header'>

            <div className='container-content'>
                <div className='wrapper-header'>
                    <div className='wrapper'>
                        <a href='/'>
                            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt='' />
                        </a>
                        <h3>ronan.dev</h3>
                    </div>
                    <NavBar></NavBar>
                    <div className="wrapper">
                        <ul>
                            <li>
                                <p><i className='fa-brands fa-github'></i></p>
                            </li>
                            <li>
                                <p><i className='fa-brands fa-linkedin'></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
