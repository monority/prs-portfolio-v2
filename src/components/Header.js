import React, { useState } from 'react';
import MenuDropdown from './MenuDropdown';

const Header = () => {
    const [activeLink, setActiveLink] = useState(0);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <div className='header'>

            <div className='container-content'>
                <div className='wrappers'>
                    <div className='wrapper'>
                        <a href='/'>
                            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt='' />
                        </a>
                        <h3>ronan.dev</h3>
                    </div>
                    <div className='wrapper'>
                      
                        <ul>
                            <li className={activeLink === 0 ? 'active' : ''} onClick={() => handleLinkClick(0)}>
                                Home
                            </li>
                            <li className={activeLink === 1 ? 'active' : ''} onClick={() => handleLinkClick(1)}>
                                About me
                            </li>
                            <li className={activeLink === 2 ? 'active' : ''} onClick={() => handleLinkClick(2)}>
                                Skills
                            </li>
                            <li className={activeLink === 3 ? 'active' : ''} onClick={() => handleLinkClick(3)}>
                                Projects
                            </li>
                            <li className={activeLink === 4 ? 'active' : ''} onClick={() => handleLinkClick(4)}>
                                Personal
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper">
                        <ul>
                            <li>
                                <p>
                                    <i className='fa-brands fa-github'></i>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <i className='fa-brands fa-linkedin'></i>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <MenuDropdown />
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
