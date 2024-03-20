'use client';
import React from 'react';
import {
    Row,
    Col,
} from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardMain from './Card';

const SliderMain=()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <>
            <Slider {...settings}>
                <div>
                    <CardMain/>
                </div>
                <div>
                    <CardMain/>
                </div>
                <div>
                    <CardMain/>
                </div>
            </Slider>
        </>
    )
}
export default SliderMain;