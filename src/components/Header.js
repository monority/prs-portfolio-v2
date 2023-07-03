import React, { useState } from 'react';
import MenuDropdown from './MenuDropdown';

const Header = () => {
    const [activeLink, setActiveLink] = useState(0);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <div className='header'>

            <div className='container'>
                <div className='wrappers'>
                    <div className='wrapper'>
                        <a href='/'>
                            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt='' />
                        </a>
                        <h3>ronan</h3>
                    </div>
                    <div className='wrapper'>
                        <ul>
                            <li className={activeLink === 0 ? 'active' : ''} onClick={() => handleLinkClick(0)}>
                                <p>Home</p>
                            </li>
                            <li className={activeLink === 1 ? 'active' : ''} onClick={() => handleLinkClick(1)}>
                                <p>Work</p>
                            </li>
                            <li className={activeLink === 2 ? 'active' : ''} onClick={() => handleLinkClick(2)}>
                                <p>Personal</p>
                            </li>
                        </ul>
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
