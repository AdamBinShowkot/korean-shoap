'use client'
import React,{
    useEffect,
    useState
} from 'react';
import {
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';

const RegistrationMain=()=>{
    const [registrationInfo,setRegistrationInfo]=useState({
        
    })
    return(
        <>
            <Row>
                <Col>
                    <Form
                    className="contact-form"
                    >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label><sup>*</sup>{" "}Name:</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="" 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                            <Form.Label><sup>*</sup>{" "}Mobile:</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="" 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                            <Form.Label><sup>*</sup>{" "}Password:</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="" 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <span>
                                Your personal data will be used to support your experience throughout this website, to 
                                manage access to your account, and for other purposes described in our privacy policy.
                            </span>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
                            <Button
                            //className='checkout-submit-button'
                            className="login-register-button"
                            >
                                REGISTRATION
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </>
    )
}
export default RegistrationMain;