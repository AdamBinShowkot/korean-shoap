'use client'
import React from 'react';
import {
    Card,
    Button,
    Col,
    Row
} from 'react-bootstrap';
import Slider from 'react-slick';
import './index.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const SliderBanner=()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true
    };
    return(
        <>
            <Row
            style={{
                // minHeight:'280px',
                overflow:'hidden',
            }}
            className='slide-image-row'
            >
                <Col
                style={{
                    // minHeight:'280px',
                    padding:'0px !important',
                    margin:'0px !important'
                }}
                //className='slide-image-col'
                >
                    <Slider 
                    {...settings}
                    className="main-slide"
                    >
                        <div
                        // style={{
                        //     minHeight:'500px'
                        // }}
                         //className='slide-image'
                        >
                            <Image
                            src={'/bsOne.png'}
                            width={1920}
                            height={440}
                            alt="Slide Image"
                            className='top-slide-image'
                            //style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                        <div
                        // style={{
                        //     minHeight:'500px'
                        // }}
                        //className='slide-image'
                        >
                            <Image
                            src={'/bsOne.png'}
                            width={1920}
                            height={440}
                            alt="Slide Image"
                            className='top-slide-image'
                            //style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </Slider>
                </Col>
            </Row>
        </>
    )
}
export default SliderBanner;