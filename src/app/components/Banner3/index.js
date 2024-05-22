import React from 'react';
import {
    Card,
    Button,
    Col,
    Row,
    Container
} from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link'
import './index.scss';

const BannerThree=()=>{
    return(
        <>
            <Col 
            xs={12}
            // style={{
            //     padding:'40px 0'
            // }}
            className='banner-three-container'
            >
                <Container>
                    <Row
                    className='banner-three-row'
                    >
                        <Col 
                        xs={4}
                        xl={4}
                        >
                            <Link
                            href={"/products/brands"}
                            >
                                <Button
                                className='banner-three-button'
                                >
                                    Shop By Brand
                                </Button>
                            </Link>
                        </Col>
                        <Col 
                        xs={4}
                        xl={4}
                        className='middle-column column'
                        >
                            <Image
                            src='/femaleMakup.png'
                            height={70}
                            width={200}
                            alt=""
                            />
                        </Col>
                        <Col 
                        xs={4}
                        xl={4}
                        className='column'
                        >
                            <Link
                            href={"/products"}
                            >
                                <Button
                                className='banner-three-button'
                                >
                                    Shop Now
                                </Button>
                            </Link>   
                        </Col>
                    </Row>
                </Container>
            </Col>
        </>
    )
}
export default BannerThree;