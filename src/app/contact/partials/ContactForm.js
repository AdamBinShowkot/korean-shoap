'use client';
import React from 'react';
import {
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
import './index.scss';

const ContactForm=()=>{
    return(
        <>
            <Row
            style={{
                padding:'60px 200px 0px'
            }}
            >
                <Col 
                xs={12}
                >
                    <Row>
                        <Col
                        style={{
                            textAlign:'center'
                        }} 
                        xs={12}
                        >
                            <h2>Send A Message</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col 
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <hr className='contact-form-hr'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col 
                        xs={12}
                        >
                            <Form
                            className='contact-form'
                            >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label><sup>*</sup>{" "}Comments:</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Row>
                                    <Col xs={6}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                                            <Form.Label><sup>*</sup>{" "}Use your name:</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                            <Form.Label><sup>*</sup>{" "}Email:</Form.Label>
                                            <Form.Control type="email" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                                    <Form.Label><sup>*</sup>{" "}Subject</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Row
                                style={{
                                    marginTop:'50px'
                                }}
                                >
                                    <Col
                                    xs={12}
                                    style={{
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}
                                    >
                                        <Button
                                        className='contact-form-submit-button'
                                        >
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default ContactForm;