'use client'; 
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Product from '@/app/ui/Product';

const FooterProductSlider=()=>{
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
        slidesToShow: 5,
        slidesToScroll: 5,
        centerMode:false
    };
    return(
        <>
            <Slider {...settings}>
                <div>
                    <Product/>
                </div>
                <div>
                    <Product/>
                </div>
                <div>
                    <Product/>
                </div>
                <div>
                    <Product/>
                </div>
                <div>
                    <Product/>
                </div>
                <div>
                    <Product/>
                </div>
                <div>
                    <Product/>
                </div>
                <div>
                    <Product/>
                </div>
                <div>
                    <Product/>
                </div>
                <div>
                    <Product/>
                </div>
            </Slider>
        </>
    )
}
export default FooterProductSlider;