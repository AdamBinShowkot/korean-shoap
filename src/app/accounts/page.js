import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import LoginRegistrationMain from './partials/LoginRegistrtationMain';
import './index.scss';

const ContactPage=()=>{
    return(
        <>
            <Row
            className='login-registration-container'
            >
                <Col 
                xs={12}
                >
                    <LoginRegistrationMain/>
                </Col>
            </Row>
        </>
    )
}
export default ContactPage;