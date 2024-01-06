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

const FilterProduct=()=>{
    return(
        <>
            <Card 
            style={{ 
                width: '16vw',
                minHeight:'26rem',
                border:'none',
                padding:'0'
            }}
            className='filter-product-card'
            >
                {/* <Card.Img variant="top" src="/logo.png" /> */}
                <Card.Body
                style={{
                    textAlign:'center',
                    position:'relative',
                    padding:'0'
                }}
                className=''
                >
                    <Row
                    style={{
                        border:'1px solid rgba(232, 99, 154, 1)',
                        borderRadius:'5px',
                        marginBottom:'10px'
                    }}
                    >
                        <Col 
                        xs={12}
                        style={{
                            padding:'5px',
                        }}
                        >
                            <Card.Title
                            style={{
                                textAlign:'left',
                                padding:'0'
                            }}
                            >
                                <Button 
                                className='card-button'
                                >
                                    Shop Now
                                </Button>
                            </Card.Title>
                            <Image
                            src='/products2.jpg'
                            height={300}
                            width={259}
                            alt=""
                            />
                        </Col>
                    </Row>
                    <Card.Text
                    style={{
                        
                    }}
                    >
                        <span>
                            Neogen Dermalogy Black 
                            Energy Cream 80ml
                        </span>
                    </Card.Text>
                     <Button 
                    className='card-button product-card-button'
                    style={{
                        position:'absolute',
                        bottom:'5px',
                        left:0,
                        right:0
                    }}
                    >
                        Add To Bag ৳ 2100 ৳ 1900
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default FilterProduct;