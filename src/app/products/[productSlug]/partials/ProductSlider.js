'use client'; 
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NormalProduct from './NormalProduct';
import VideoProduct from './VideoProduct';

const ProductSlider=({images,setActiveImage})=>{
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
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode:false
    };
    return(
        <>
            <Slider {...settings}>
                {
                    images.map((d,index)=>{
                        return <div
                        key={index}
                        >
                            <NormalProduct
                            setActiveImage={setActiveImage}
                            image={d}
                            />
                        </div>
                    })
                }
                {/* <div>
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
                </div> */}
            </Slider>
        </>
    )
}
export default ProductSlider;