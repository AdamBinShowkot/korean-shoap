import React from 'react';
import {
    Row,
    Col,
    Button
} from 'react-bootstrap';
import './index.scss';
import CardMain from './Card';
import SliderMain from './Slider';


const OurMission=()=>{
    return(
        <>
            <Row
            className="our-mission-container"
            >
                <Col 
                xs={6}
                className='mission left-container'
                >
                    <h2>Our Mission</h2>
                    <hr
                    className='mission-hr'
                    />
                    <p>
                    Real beauty starts truly with your skin. But independent from age, sex and race it can be challenging to find the right skincare products.<br/><br/> 
                    We take care of that by selecting only quality products. <br/><br/>
                    Luxe, lightweight, and made with the perfect blend of cashmere and cotton, our Sonoma Pillows and Throws are inspired by the basics we turn to season after season. Get to know the cozy essentials that will elevate your space in an instant.
                    </p>
                    <br/>
                    <br/>
                    <Button
                    className='premium-product-btn'
                    >
                        Premium Products
                    </Button>
                </Col>
                <Col 
                xs={6} 
                className='mission right-container'
                >
                    <SliderMain/>
                </Col>
            </Row>
        </>
    )
}
export default OurMission;