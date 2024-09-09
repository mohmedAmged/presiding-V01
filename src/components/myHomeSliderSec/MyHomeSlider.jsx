import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';
import "swiper/css/autoplay";
import Autoplay from "../../../node_modules/swiper/modules/autoplay.mjs";
import './myHomeSlider.css'

import sliderImg1 from '../../assets/slider-bg/prx-img-07.png'
import sliderImg2 from '../../assets/slider-bg/singleCompanyQuote.png'
import { Navigation } from "swiper/modules";
export default function MyHomeSlider() {


    return (
        <div className="slider__handler">
            <Swiper
                className='mySwiper'
                modules={[Autoplay, Navigation]}
                autoplay={{
                    delay: 2500,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
            >
                <SwiperSlide className="slide__item__handler"
                    style={{ backgroundImage: `url(${sliderImg1})` }}>
                    <div className="container">
                        <div className="slideItem__info">
                            <>
                                <p>
                                    Presiding Solutions
                                </p>
                                <h2>
                                    We grow your business
                                </h2>
                                <button>
                                    View More
                                </button>
                            </>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className="slide__item__handler"
                    style={{ backgroundImage: `url(${sliderImg2})` }}
                >
                    <div className="container">
                        <div className="slideItem__info">
                            <>
                                <p>
                                    Presiding Solutions
                                </p>
                                <h2>
                                    We grow your business
                                </h2>
                                <button>
                                    View More
                                </button>
                            </>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* Custom Navigation Buttons */}
            <div className="custom-navigation">
                <div className="swiper-button-prev-custom"><i className="bi bi-arrow-bar-left"></i></div>
                <div className="swiper-button-next-custom"><i className="bi bi-arrow-bar-right"></i></div>
            </div>
        </div>
    )
}
