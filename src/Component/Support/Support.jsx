import React, { useEffect } from 'react'
import '../Support/Support.css'
import gridImage from '../../Asserts/Grid.jpg'
import gridImage2 from '../../Asserts/Grid2.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className='Support container section'>
            <div data-aos='fade-down' data-aos-duration='2500' className="sectionContainer">
                <div className="tittleDiv">
                    <small>travel support</small>
                    <h2>Plane your travel with confidence</h2>
                    <p>Find help with booking and travel planes , see what to expect along the journey!</p>
                </div>


                <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv2">
                    <img src={gridImage2} alt="" />
                </div>


                <div className="infoDiv grid">
                    <div className="textDiv grid">
                        <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
                            <span className='number'>01</span>
                            <h4>Travel requirement for Dubai</h4>
                            <p>
                                Find help with booking and travel planes , see what to expect along the journey to your favourity Destination!
                            </p>
                        </div>



                        <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
                            <span className='number colorOne'>02</span>
                            <h4>Chauffeur services at your arival</h4>
                            <p>
                                Find help with booking and travel planes , see what to expect along the journey to your favourity Destination!
                            </p>
                        </div>


                        <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
                            <span className='number colorTwo'>03</span>
                            <h4>Multy-risk travel insurance</h4>
                            <p>
                                Find help with booking and travel planes , see what to expect along the journey to your favourity Destination!
                            </p>
                        </div>
                    </div>

                    <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
                        <img src={gridImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
