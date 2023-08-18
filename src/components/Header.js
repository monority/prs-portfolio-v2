import React, { useState } from 'react';
import NavBar from './Nav';
import { useNavigate, Link } from 'react-router-dom';
import IconCustom from './IconCustom';

const Header = () => {
    const navigate = useNavigate();
    const [active, SetActive] = useState(false);


    const headerChange = () => {
        if (window.scrollY >= 392) {
            SetActive(true)
        }
        else {
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
                                <Link target='__blank' to="https://www.github.com/monority" aria-label='lien vers mon github'>
                                    <IconCustom
                                        type="AiOutlineGithub"
                                        size="2.7rem"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link target='__blank' aria-label="Lien vers mon linkedin" to="https://www.linkedin.com/in/ronanchenu/">
                                <IconCustom
                                        type="AiOutlineLinkedin"
                                        size="2.7rem"
                                    />
                                    </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
