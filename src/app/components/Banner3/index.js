import React from 'react';
import {
    Card,
    Button,
    Col,
    Row,
    Container
} from 'react-bootstrap';
import Image from 'next/image'
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
                            <Button
                            className='banner-three-button'
                            >
                                Shop By Brand
                            </Button>
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
                            <Button
                            className='banner-three-button'
                            >
                                Shop Now
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </>
    )
}
export default BannerThree;