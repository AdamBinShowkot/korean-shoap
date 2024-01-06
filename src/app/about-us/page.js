import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import OurMission from './partials/OurMission';
import OurValues from './partials/OurValues';
import OurStory from './partials/OurStory';
import './index.scss';

const AboutPage=()=>{
    return(
        <>
            <Row
            className='about-us-container'
            >
                <OurMission/>
                <OurValues/>
                <OurStory/>
            </Row>
        </>
    )
}
export default AboutPage;