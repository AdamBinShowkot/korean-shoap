import React from 'react';
import {
    Col,
    Container,
    Row,
    FormControl,
    InputGroup,
    InputGroupText,
    Form,
    Button
} from 'react-bootstrap';
import Module from './index.module.css';
import Image from 'next/image';

const ContactFormMain=()=>{
    return(
        <>
            <Col>
                <Row
                className='contact-footer-form-container'
                >
                    <Col
                    className='contact-footer-form first'
                    xl={6}
                    xs={12}
                    >
                        <Image
                        src='/messageBox.png'
                        height={40}
                        width={50}
                        alt=""
                        style={{
                            marginRight:'10px'
                        }}
                        />
                        <p>SIGN UP FOR NEWSLETTER FOR OFFER AND UPDATES</p>
                    </Col>
                    <Col
                    style={{
                        textAlign:'right'
                    }}
                    xl={6}
                    xs={12}
                    className='contact-footer-form second'
                    >
                        <InputGroup>
                            <FormControl
                            className='normal-input'
                            placeholder='Enter Your Email Address'
                            >

                            </FormControl>
                            <Button
                             className={`${Module.contactSubmmit} normal-input global-search`}
                            >
                                Send
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
export default ContactFormMain;