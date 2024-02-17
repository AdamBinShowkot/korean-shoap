'use client'; 
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//import Product from '@/app/ui/Product';
//import ProductTwo from '@/app/ui/ProductTwo';
import NewProduct from '@/app/ui/NewProduct';

const FooterProductSlider=({product_lists})=>{
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
               {
                    product_lists?.length?product_lists.map((dta)=>{
                        return  <div key={dta.id}>
                            <NewProduct data={dta}/>
                        </div>
                    }):""
               }
                {/* <div>
                    <NewProduct/>
                </div>
                <div>
                    <NewProduct/>
                </div>
                <div>
                    <NewProduct/>
                </div>
                <div>
                    <NewProduct/>
                </div>
                <div>
                    <NewProduct/>
                </div> */}
            </Slider>
        </>
    )
}
export default FooterProductSlider;