import React from 'react';
import {
    Row,
    Col,
    Button
} from 'react-bootstrap';
import Image from 'next/image';
import './index.scss';


const OurStory=()=>{
    return(
        <>
            <Row
            className='our-story-container'
            >
                <Col 
                xs={6}
                className='our-story-left'
                >
                    <Image
                    src='/storyImage.png'
                    height={700}
                    width={600}
                    alt="Image"
                    />
                </Col>
                <Col 
                xs={6}
                className='our-story-right'
                >
                    <h2>Our Story</h2>
                    <hr
                    className='our-story-hr'
                    />
                    <p>
                    As a team of four female founders, we started Aloisia Beauty to pursue a shared passion: creating clean, effective, affordably luxurious skincare that leads to real results. We believe in high-performing formulas that can be used on all skin types, while also targeting individual concerns to help everyone and anyone achieves their dream skin. 
                    <br/><br/>
                    Our products turn your skincare routine into everyday moments of self-indulgence, so you can Breathe In, Glow Out ™.
                    <br/><br/>
                    We took the leap to develop our own brand after spending our careers building others across the fashion, celebrities, science wellness industries. As fate would have it, our friend Jacob, a scientist from South Korea, was interested in joining our mission as a founding partner and introduced us to the Korean Beauty Philosophy. Representing various ethnicities, we were already well-versed in exploring and appreciating different cultural approaches to skincare. We quickly fell in love with everything about Korean Beauty: The use of clean, proven plant-derived ingredients, the cutting-edge innovations, the core mantra of respecting the skin first and the ritual of self-care. Plus, as moms, we were drawn to the importance of teaching our children about the benefits of a consistent skincare routine; not only for the skin, but also for the soul.
                    </p>
                    <br/>
                    <br/>
                    <Button
                    className='premium-product-btn'
                    >
                        Premium Products
                    </Button>
                </Col>
            </Row>
        </>
    )
}
export default OurStory;