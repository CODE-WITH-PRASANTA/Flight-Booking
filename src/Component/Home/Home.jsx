import React from 'react'
import '../Home/Home.css'
import video from '../../Asserts/Video.mp4'
import airoplane from '../../Asserts/Airoplane.png'
const Home = () => {
    return (
        <div className='Home flex container'>

            <div className="maintext">
                <h1>Create Ever-Lasting ... </h1>

                <h2> Memories With Us..</h2>
            </div>

            <div className="homeImages flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className='video'></video>

                </div>
                <img src={airoplane} alt="" className='plane' />
            </div>
        </div>
    )
}

export default Home
