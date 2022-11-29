import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer mt-5">
                <div className="container">
                    <div className="row text-center">

                        <div className=" align col-12 col-md-3 ">
                            <li>
                                Abouts Us
                            </li>
                            <li>
                                EDITORIAL
                            </li>
                            <li>
                                FAQS
                            </li>
                        </div>
                        
                        <div className=" align col-12 col-md-3">
                            <li>
                                OUR PRODUCTS
                            </li>
                            <li>
                                OUR RETREATS
                            </li>
                            <li>
                                PARTNER WITH US
                            </li>
                        </div>

                        <div className=" align col-12 col-md-3">
                            <li>
                                CONTACT US
                            </li>
                            <li>
                                88888888
                            </li>
                            <li>
                                88888888
                            </li>
                        </div>
                        <div className=" align col-12 col-md-3">
                            <li>
                                CONTACT US
                            </li>
                            <li>
                                <i className="fa-solid fa-envelope me-3"></i>
                                into@Ayurvedic.com
                            </li>
                            <li>
                                <i className="fa-solid fa-location-dot me-3"></i>
                                location
                            </li>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer