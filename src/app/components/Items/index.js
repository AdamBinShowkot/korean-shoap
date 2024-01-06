'use client'
import React, { useEffect, useState } from 'react';
import {
    Card,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import StaticProducts from '@/app/ui/StaticCard';
import Product from '@/app/ui/Product';
import useDeviceSize from '@/hooks/useDeviceSize';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import Image from 'next/image';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className+` slider-next-arrow-btn`}
        // style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className+` slider-previous-arrow-btn`}
        // style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
}
const ItemsContainer=({title})=>{
    const [settings,setSettings]=useState(
        {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        }
    )
    const [width, height] = useDeviceSize();  

    useEffect(() => {
        if(width<420){

            let newSettings={...settings,slidesToShow:2};
            setSettings(newSettings)
        }else{
            let newSettings={...settings,slidesToShow:5};
            setSettings(newSettings)
        }
    
        return () => {
          
        };
    }, [width]);

    return(
        <>
            <Row>
                <Col 
                xs={12}
                className='products-item-title'
                >
                    <p>
                        <strong>{title?title:''}</strong> <span>{'  '}items</span>
                    </p>
                </Col>
            </Row>
            <Row 
            className='product-slider-container'
            >
                <Col xs={12}>
                    <Slider {...settings}>
                        <div>
                            <StaticProducts/>
                        </div>
                        <div >
                            <Product windowWidth={width}/>
                        </div>
                        <div>
                            <Product windowWidth={width}/>
                        </div>
                        <div>
                            <Product windowWidth={width}/>
                        </div>
                        <div>
                            <Product windowWidth={width}/>
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
                </Col>
            </Row>
        </>
    )
}
export default ItemsContainer;