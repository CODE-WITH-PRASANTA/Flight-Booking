import React, { useEffect } from 'react'
import '../Longe/Longe.css'
import gridImage from '../../Asserts/Gridimg.png'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Longe = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='longe container section'>
            <div className="sectionContainer grid">

                <div data-aos='fade-right ' data-aos-duration='2500' className="imgDiv">
                    <img src={gridImage} alt="" />
                </div>

                <div className="textDiv">
                    <h2 data-aos='fade-down' data-aos-duration='2500' >Unaccompained Minor Lounge</h2>

                    <div className="grids grid">

                        <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                            <span className='gridTitle'>
                                Help througgh the airport
                            </span>

                            <p>
                                You can also call airlines fromyour phone and book a flight ticket to one of your favorite destination.
                            </p>
                        </div>



                        <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                            <span className='gridTitle'>
                                Priority Boardinng
                            </span>

                            <p>
                                You can also call airlines fromyour phone and book a flight ticket to one of your favorite destination.
                            </p>
                        </div>



                        <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                            <span className='gridTitle'>
                                Care on flight
                            </span>

                            <p>
                                You can also call airlines fromyour phone and book a flight ticket to one of your favorite destination.
                            </p>
                        </div>

                        <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                            <span className='gridTitle'>
                                Chauffeu-drive service
                            </span>

                            <p>
                                You can also call airlines fromyour phone and book a flight ticket to one of your favorite destination.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Longe
