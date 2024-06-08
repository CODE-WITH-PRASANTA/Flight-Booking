import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import logo from '../../Asserts/Logo.png';
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
    const [active, setActive] = useState('navBarMenu');
    const [noBg, setNoBg] = useState('navBarTwo');

    const showNavbar = () => {
        setActive('navBarMenu showNavbar');
    };

    const removeNavbar = () => {
        setActive('navBarMenu');
    };

    const addBgColor = () => {
        if (window.scrollY >= 10) {
            setNoBg('navBarTwo navBar_with_Bg');
        } else {
            setNoBg('navBarTwo');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', addBgColor);
        return () => {
            window.removeEventListener('scroll', addBgColor);
        };
    }, []);

    return (
        <div className='navbar flex'>
            <div className="navBarOne flex">
                <div className='icon'>
                    <SiConsul />
                </div>
                <div className='flex'>
                    <li className='flex'><BsPhoneVibrate className='icon' />Support</li>
                    <li className='flex'><AiOutlineGlobal className='icon' />Languages</li>
                </div>
                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>

            <div className={noBg}>
                <div className="logoDiv">
                    <img src={logo} alt="Logo" className='logo' />
                </div>

                <div className={active}>
                    <ul className='menu flex'>
                        <div className="menu flex">
                            <li onClick={removeNavbar} className='listItem'>Home</li>
                            <li onClick={removeNavbar} className='listItem'>About</li>
                            <li onClick={removeNavbar} className='listItem'>Offers</li>
                            <li onClick={removeNavbar} className='listItem'>Seats</li>
                            <li onClick={removeNavbar} className='listItem'>Destination</li>
                        </div>

                        <button onClick={removeNavbar} className='btn flex btnOne'>Contact</button>
                    </ul>
                </div>

                <div onClick={showNavbar} className="toggleIcon">
                    <CgMenuGridO className='icon' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
