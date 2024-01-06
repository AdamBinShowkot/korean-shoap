'use client'
import React from 'react';
import {
    Card,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import Image from 'next/image';

const StaticCardWithImage=()=>{
    return(
        <>
            <Card style={{ 
                width: '19vw',
                marginRight:'1vw !important',
                minHeight:'26rem',
                backgroundImage:`url('/filterFeatured.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%'
                }}>
                {/* <Card.Img variant="top" src="/logo.png" /> */}
                {/* <Card.Body
                style={{
                    textAlign:'center'

                }}
                className='product-card-body'
                > */}
                    {/* <Image
                    src='/filterFeatured.png'
                    height={500}
                    width={600}
                    /> */}
                {/* </Card.Body> */}
            </Card>
        </>
    )
}
export default StaticCardWithImage;