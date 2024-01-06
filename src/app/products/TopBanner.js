import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import Image from 'next/image';
import './index.scss';

const TopBanner=()=>{
    return(
        <>
            <Row
            className='products-layout-container'
            >
                <Col 
                xs={12}
                style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <Image
                    src='/femaleMakup.png'
                    height={80}
                    width={220}
                    alt=""
                    />
                </Col>
            </Row>
        </>
    )
}
export default TopBanner;