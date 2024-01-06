'use client'
import React from 'react';
import {
    Card,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import StaticProducts from '@/app/ui/StaticCard';
import StaticCardWithImage from '@/app/ui/StaticCardWithImage';
import FilterProduct from '@/app/ui/FilterProduct';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const ProductLists=()=>{
    const settings = {
        //centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };
    return(
        <>
            <Slider className="filter-container" {...settings}>
                <div
                // style={{
                //     width:'23rem !important',
                //     border:'1px solid red'
                // }}
                // className='testttt-classss'
                >
                    <StaticCardWithImage/>
                </div>
                <div className="filter-item vege my-test-slick">
                    <FilterProduct/>
                </div>
                <div className="filter-item vege my-test-slick">
                    <FilterProduct/>
                </div>
                <div className="filter-item vege my-test-slick">
                    <FilterProduct/>
                </div>
                <div className="filter-item vege my-test-slick">
                    <FilterProduct/>
                </div>
                <div>
                    <FilterProduct/>
                </div>
            </Slider>
        </>
    )
}
export default ProductLists;