'use client';
import React from 'react';
import {
    Row,
    Col,
    Button,
    Form 
} from 'react-bootstrap';

const LoginWithOthers=()=>{
    return(
        <>
            <Row>
                <Col
                className='others-login-container'
                >
                    <Row>
                        <Col>
                            <Form
                            className='contact-form'
                            >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label><sup>*</sup>{" "}Phone:</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="" 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Button
                                    className='checkout-submit-button'
                                    >
                                        LOGIN WITH OTP
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                        style={{
                            display:'flex',
                            //flexDirection:'row'
                        }}
                        className='break-section'
                        >
                            <hr
                            className='hr'
                            />
                            <h4 className='heading'>OR</h4>
                            <hr
                            className='hr'
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default LoginWithOthers;