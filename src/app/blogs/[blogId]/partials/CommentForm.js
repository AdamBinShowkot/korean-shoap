'use client';
import React from 'react';
import {
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
import './index.scss'

const CommentFormArea=()=>{
    return(
        <>
            <Row>
                <Col 
                xs={12}
                style={{
                    textAlign:'left'
                }}
                >
                    <h1 className='comment-header'>Leave a Reply</h1><br/>
                    <span style={{fontSize:'16px'}}><sup>*</sup>&nbsp;&nbsp;Indicates a required field</span><br/><br/>
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
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                                    <Form.Check
                                    type='checkbox'
                                    label={`Save my name, email, and website in this browser for the next time I comment.`}
                                    id={`disabled-default`}
                                    />
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
                                        justifyContent:'flex-start',
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
export default CommentFormArea;