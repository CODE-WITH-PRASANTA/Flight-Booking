import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../Home/Home.css'
import video from '../../Asserts/Video.mp4'
import airoplane from '../../Asserts/Airoplane.png'


const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className='Home flex container'>

            <div className="maintext">
                <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-Lasting ... </h1>

                <h2 data-aos='fade-up' data-aos-duration='2500'> Memories With Us..</h2>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="homeImages flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className='video'></video>

                </div>
                <img src={airoplane} alt="" className='plane' />
            </div>
        </div>
    )
}

export default Home
