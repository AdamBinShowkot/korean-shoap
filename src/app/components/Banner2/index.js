import React from 'react';
import {
    Card,
    Button,
    Col,
    Row
} from 'react-bootstrap';
import Image from 'next/image'
import './index.scss';

const BannerTwo=()=>{
    return(
        <>
            <Col 
            xs={12}
            style={{
                padding:'40px 0'
            }}
            >
                <Image
                src='/bannerTwo.jpg'
                height={406}
                width={1643}
                alt=""
                //style={{ width: '100vh', height: 'auto' }}
                />
            </Col>
        </>
    )
}
export default BannerTwo;