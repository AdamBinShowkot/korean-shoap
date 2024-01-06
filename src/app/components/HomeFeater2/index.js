import React from 'react';
import {
    Card,
    Button,
    Col,
    Row
} from 'react-bootstrap';
import Image from 'next/image';
import ConfigureAxios from '@/utils/axiosConfig';
import axios from 'axios';
import './index.scss';


const HomeFeatured=()=>{
    return(
        <>
            <Col 
            xs={12} 
            xl={6}
            className="home-featured-container"
            >
                <Row
                style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <Col 
                    xs={12} 
                    xl={6}
                    className='home-featured'
                    >
                        <h2>
                        COSRX
                        </h2>
                        <span  className="normal-description">
                        All About Snail Korean Skincare
                        </span><br/><br/>
                        <Button 
                        variant="outline-primary"
                        className="home-featured-button"
                        >
                            Explore
                        </Button>
                    </Col>
                    <Col 
                    xs={12}
                    xl={6}
                    className='home-featured'
                    >
                        <Image
                        src='/featuredOne.jpg'
                        height={411}
                        width={411}
                        alt=""
                        />
                    </Col>
                </Row>
            </Col>
            <Col 
            xs={12} 
            xl={6}
            className="home-featured-container"
            >
                <Row
                style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <Col 
                    xs={12}
                    xl={6}
                    className='home-featured'
                    >
                        <h2>
                        TIA&apos;M –
                        </h2>
                        <span className="normal-description">
                        All About Snail Korean Skincare
                        </span><br/><br/>
                        <Button 
                        variant="outline-primary"
                        className="home-featured-button"
                        >
                            Explore
                        </Button>
                    </Col>
                    <Col 
                    xs={12}
                    xl={6}
                    className='home-featured'
                    >
                        <Image
                        src='/featuredTwo.jpg'
                        height={411}
                        width={411}
                        alt=""
                        />
                    </Col>
                </Row>
            </Col>
        </>
    )
}
export default HomeFeatured;