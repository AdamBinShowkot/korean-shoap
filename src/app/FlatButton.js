'use client';
import React from 'react';
import {
    Button, 
    Row,
    Col
} from 'react-bootstrap';
import Image from 'next/image';

const FlatButton=()=>{
    return(
        <>
            <Row 
            className='fixed-button'
            >
                <Col 
                xs={12}
                style={{
                    padding:"0px"
                }}
                >
                    <Row
                    className='flat-button-top-area'
                    >
                        <Col 
                        xs={12}
                        >
                            <Row
                            >
                                <Col 
                                xs={12}
                                style={{
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}
                                >
                                    <Image
                                    src={'/shop-bag.png'}
                                    height={20}
                                    width={20}
                                    alt="Image"
                                    />
                                </Col>
                            </Row>
                            <span>10 Items</span>
                        </Col>
                    </Row>
                    <Row
                    className='flat-button-footer-area'
                    >
                        <Col 
                        xs={12}
                        >
                            <span>৳ 11025</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default FlatButton;