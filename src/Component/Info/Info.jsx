import React from 'react'
import '../Info/Info.css'
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";


const Info = () => {
    return (
        <div className='Info section'>
            <div className="infoContainer container">


                <div className="tittleDiv flex">
                    <h3>Travel to make memories all <br />around the world....</h3>
                    <button className='btn'>
                        View All
                    </button>
                </div>
                {/* 1st */}

                <div className="cardsDiv grid">

                    <div className="singleCard grid">
                        <div className="iconDiv flex">
                            <RxCalendar className='iconx' />
                        </div>

                        <span className='cardTittle'>Book & Relax</span>
                        <p>You can also call airlines from your phone and book a flight ticket!</p>
                    </div>


                    {/* 2nd */}

                    <div className="singleCard grid">
                        <div className="iconDiv flex colorOne">
                            <BsShieldCheck className='iconx ' />
                        </div>

                        <span className='cardTittle'>Smart Checklist</span>
                        <p>You can also call airlines from your phone and book a flight ticket!</p>
                    </div>



                    {/* 3rd */}
                    <div className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                            <BsBookmarkCheck className='iconx' />
                        </div>

                        <span className='cardTittle'>Save More</span>
                        <p>You can also call airlines from your phone and book a flight ticket!</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Info
