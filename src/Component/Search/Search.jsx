import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import '../Search/Search.css'


const Search = () => {
    return (
        <div className='Search container section'>

            <div className="sectionContainer grid">
                <div className="btns flex">
                    <div className="singlebtn">
                        <span>Economy</span>
                    </div>

                    <div className="singlebtn">
                        <span>Business Class</span>
                    </div>

                    <div className="singlebtn">
                        <span>First Class</span>
                    </div>
                </div>

                <div className="allSection flex">
                    {/* Single Input */}
                    <div className="searchInput flex">
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <HiOutlineLocationMarker className='iconx' />
                            </div>

                            <div className="texts">
                                <h4>Location</h4>
                                <input type="text" placeholder='Enter Location' />
                            </div>
                        </div>
                    </div>


                    {/* Single Input */}

                    <div className="searchInput flex">
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <RiAccountPinCircleLine className='iconx' />
                            </div>

                            <div className="texts">
                                <h4>Travelers</h4>
                                <input type="text" placeholder='Add Guests' />
                            </div>
                        </div>
                    </div>


                    {/* Single Input */}

                    <div className="searchInput flex">
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <RxCalendar className='iconx' />
                            </div>

                            <div className="texts">
                                <h4>Check In</h4>
                                <input type="text" placeholder='Add date' />
                            </div>
                        </div>
                    </div>




                    <div className="searchInput flex">
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <RxCalendar className='iconx' />
                            </div>

                            <div className="texts">
                                <h4>Check Out</h4>
                                <input type="text" placeholder='Add date' />
                            </div>
                        </div>
                    </div>


                    <button className='btn btnBlock flex'>Search Flight</button>

                </div>



            </div>
        </div>
    )
}

export default Search
