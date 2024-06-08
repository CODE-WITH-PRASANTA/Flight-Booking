import React from 'react'
import '../Longe/Longe.css'
import gridImage from '../../Asserts/Gridimg.png'


const Longe = () => {
    return (
        <div className='longe container section'>
            <div className="sectionContainer grid">

                <div className="imgDiv">
                    <img src={gridImage} alt="" />
                </div>

                <div className="textDiv">
                    <h2>Unaccompained Minor Lounge</h2>

                    <div className="grids grid">

                        <div className="singleGrid">
                            <span className='gridTitle'>
                                Help througgh the airport
                            </span>

                            <p>
                                You can also call airlines fromyour phone and book a flight ticket to one of your favorite destination.
                            </p>
                        </div>



                        <div className="singleGrid">
                            <span className='gridTitle'>
                                Priority Boardinng
                            </span>

                            <p>
                                You can also call airlines fromyour phone and book a flight ticket to one of your favorite destination.
                            </p>
                        </div>



                        <div className="singleGrid">
                            <span className='gridTitle'>
                                Care on flight
                            </span>

                            <p>
                                You can also call airlines fromyour phone and book a flight ticket to one of your favorite destination.
                            </p>
                        </div>

                        <div className="singleGrid">
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
