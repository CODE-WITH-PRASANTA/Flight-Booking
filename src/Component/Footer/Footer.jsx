import React, { useEffect } from 'react'
import Logo from '../../Asserts/Logo.png'
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import '../Footer/Footer.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='Footer'>
            <div data-aos='fade-up' data-aos-duration='2500' className="sectioncontainer container grid">
                <div className="gridOne">
                    <div className="logoDiv">
                        <img src={Logo} alt="" className='logo2' />
                        <p>Your mind should be stronger than <br /> your feelings , fly! </p>
                        <div className="socialIcon flex">
                            <TiSocialFacebook className='icon' />
                            <AiOutlineTwitter className='icon' />
                            <AiFillYoutube className='icon' />
                            <FaPinterest className='icon' />
                        </div>
                    </div>
                </div>

                <div className="Footerparts">
                    <div data-aos='fade-up' data-aos-duration='2500' className="footerlinks">
                        <span className='linkTitle'>Information</span>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Explore</a>
                        </li>
                        <li>
                            <a href="/">Flight Status</a>
                        </li>
                        <li>
                            <a href="/">Travel</a>
                        </li>
                        <li>
                            <a href="/">Check-In</a>
                        </li>
                        <li>
                            <a href="/">Manage Your Booking</a>
                        </li>
                    </div>




                    <div data-aos='fade-up' data-aos-duration='2500' className="footerlinks">
                        <span className='linkTitle'>Quick Guide</span>
                        <li>
                            <a href="/">FAQ</a>
                        </li>
                        <li>
                            <a href="/">How to</a>
                        </li>
                        <li>
                            <a href="/">Features</a>
                        </li>
                        <li>
                            <a href="/">Baggage</a>
                        </li>
                        <li>
                            <a href="/">Route Map</a>
                        </li>
                        <li>
                            <a href="/">Our Communities</a>
                        </li>
                    </div>



                    <div data-aos='fade-up' data-aos-duration='2500' className="footerlinks">
                        <span className='linkTitle'>Information</span>
                        <li>
                            <a href="/">Chauffuer</a>
                        </li>
                        <li>
                            <a href="/">Our Partner</a>
                        </li>
                        <li>
                            <a href="/">Destination</a>
                        </li>
                        <li>
                            <a href="/">Carriers</a>
                        </li>
                        <li>
                            <a href="/">Transportation</a>
                        </li>
                        <li>
                            <a href="/">Programme Rules</a>
                        </li>
                    </div>
                </div>




            </div>


            <div className="copyRightDiv flex">
                <p>@Courtesy Design | Developed By <a href="https://www.linkedin.com/in/prasanta-kumar-khuntia-a5464a260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noopener noreferrer">Prasanta</a></p>
            </div>

        </div>
    )
}

export default Footer
