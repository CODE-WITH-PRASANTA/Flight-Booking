import React from 'react'
import '../Travellers/Travellers.css'
import parisImg from '../../Asserts/Paris.jpg'
import Traveller from '../../Asserts/Traveller1.jpg'
import Traveller2 from '../../Asserts/Traveller2.jpg'
import Traveller3 from '../../Asserts/Traveller3.jpg'
import Traveller4 from '../../Asserts/Traveller4.jpg'
import dubaiImg from '../../Asserts/Dubai.jpg'
import japanImg from '../../Asserts/Japan.jpg'
import newyorkImg from '../../Asserts/NewYork.jpg'


const Travellers = () => {
    return (
        <div className='Travellers container section'>


            <div className="sectionContainer">
                <h2>Top travelers of the month!</h2>

                <div className="travellersContainer grid">
                    {/* Single Passenger */}


                    <div className="singleTraveller">
                        <img src={parisImg} className='destinationImage' alt="" />
                        <div className="travellersDetail">
                            <div className="travellersPicture">
                                <img src={Traveller} className='travellerImage' alt='' />
                            </div>
                        </div>
                        <div className="travellerName">
                            <span>IsraTech</span>
                            <p>@isratech8</p>
                        </div>
                    </div>


                    <div className="singleTraveller">
                        <img src={dubaiImg} className='destinationImage' alt="" />
                        <div className="travellersDetail">
                            <div className="travellersPicture">
                                <img src={Traveller2} className='travellerImage' alt='' />
                            </div>
                        </div>
                        <div className="travellerName">
                            <span>Walson Lindsey</span>
                            <p>@walsonlindsey5</p>
                        </div>
                    </div>


                    <div className="singleTraveller">
                        <img src={newyorkImg} className='destinationImage' alt="" />
                        <div className="travellersDetail">
                            <div className="travellersPicture">
                                <img src={Traveller3} className='travellerImage' alt='' />
                            </div>
                        </div>
                        <div className="travellerName">
                            <span>Naresh Lamer</span>
                            <p>@nareshlamer4</p>
                        </div>
                    </div>



                    <div className="singleTraveller">
                        <img src={japanImg} className='destinationImage' alt="" />
                        <div className="travellersDetail">
                            <div className="travellersPicture">
                                <img src={Traveller4} className='travellerImage' alt='' />
                            </div>
                        </div>
                        <div className="travellerName">
                            <span>Nicole Web</span>
                            <p>@nicolweb7</p>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default Travellers
