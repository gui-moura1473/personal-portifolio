import BotaoCartoon from 'componentes/BotaoCartoon';
import { useState, useEffect } from 'react';
import './Header.css';
import { FaHome } from 'react-icons/fa'
import { BsFillStarFill, BsFillPencilFill } from 'react-icons/bs'
import { MdOutlineWork } from 'react-icons/md'
import ToggleDeTema from 'componentes/ToggleDeTema';
import { Link } from 'react-scroll';

const Header = ({ setToggleTemaDark }) => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', mudaNavBar);

        function mudaNavBar() {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        return () => window.removeEventListener('scroll', mudaNavBar);
    }, [])


    return (
        <>
            <header className={scrolled ? 'header scrolled' : 'header'} id="header">
                <div className='headerWrapper'>
                    <div className='header__logo'>
                        <a href='#'>Gui Moura</a>
                    </div>
                    <div className='header__rightGroup'>
                        <nav className='header__navbar'>
                            <ul>
                                <li className='navItem'>
                                    <Link
                                        activeClass="active"
                                        to="header"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={0}
                                        className='navLink'
                                    >
                                        <FaHome size={23} />
                                        home
                                    </Link>
                                </li>
                                <li className='navItem'>
                                    <Link
                                        activeClass="active"
                                        to="sobre"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={0}
                                        className='navLink'
                                    >
                                        <BsFillStarFill size={23} />
                                        sobre
                                    </Link>
                                </li>
                                <li className='navItem'>
                                    <Link
                                        activeClass="active"
                                        to="skills"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={0}
                                        className='navLink'
                                    >
                                        <MdOutlineWork size={23} />
                                        skills
                                    </Link>
                                </li>
                                <li className='navItem'>
                                    <Link
                                        activeClass="active"
                                        to="portifolio"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={0}
                                        className='navLink'
                                    >
                                        <BsFillPencilFill size={23} />
                                        portifolio
                                    </Link>
                                </li>
                            </ul>
                            <BotaoCartoon>Entre em contato!</BotaoCartoon>
                        </nav>
                        <ToggleDeTema onChange={(e) => setToggleTemaDark(e.target.checked)} />
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header