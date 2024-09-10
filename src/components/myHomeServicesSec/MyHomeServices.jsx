import React from 'react'
import './myHomeServices.css'
import MyMainHeader from '../myMainHeaderSec/MyMainHeader'
import img1 from '../../assets/serviceIcon/Vector (5).png'
import img2 from '../../assets/serviceIcon/Vector (6).png'
import img3 from '../../assets/serviceIcon/Vector (7).png'
import img4 from '../../assets/serviceIcon/Vector (8).png'
export default function MyHomeServices() {
    return (
        <div className='myHomeServices__handler'>
            <div className="container">
                <MyMainHeader 
                    secHead='OUR services'
                    secText='We create solutions that are bold & up with the times' 
                />
                <div className="servicesItem__handler">
                    <div className="row mt-5 mb-3">
                        <div className="col-lg-3 col-md-3 mb-3">
                            <div className="serviceItem_box">
                                <img src={img1} alt="icon-1" />
                                <div className="serviceItem_info">
                                    <h3>
                                        Management Consultancy
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mb-3">
                            <div className="serviceItem_box">
                                <img src={img2} alt="icon-1" />
                                <div className="serviceItem_info">
                                    <h3>
                                        Management Consultancy
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mb-3">
                            <div className="serviceItem_box">
                                <img src={img3} alt="icon-1" />
                                <div className="serviceItem_info">
                                    <h3>
                                        Management Consultancy
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mb-3">
                            <div className="serviceItem_box">
                                <img src={img4} alt="icon-1" />
                                <div className="serviceItem_info">
                                    <h3>
                                        Management Consultancy
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
