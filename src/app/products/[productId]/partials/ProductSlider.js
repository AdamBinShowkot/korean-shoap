'use client'; 
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NormalProduct from './NormalProduct';
import VideoProduct from './VideoProduct';

const ProductSlider=()=>{
    const settings = {
        // className: "center",
        // centerMode: true,
        // infinite: true,
        // centerPadding: "60px",
        // slidesToShow: 4,
        // speed: 500
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode:false
    };
    return(
        <>
            <Slider {...settings}>
                <div>
                    <NormalProduct/>
                </div>
                <div>
                    <NormalProduct/>
                </div>
                <div>
                    <NormalProduct/>
                </div>
                <div>
                    <NormalProduct/>
                </div>
                <div>
                    <NormalProduct/>
                </div>
                <div>
                    <NormalProduct/>
                </div>
            </Slider>
        </>
    )
}
export default ProductSlider;