'use client';
import React,{
    useEffect,
    useState,
    useContext
} from 'react';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import {
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';

const CheckoutMain=()=>{
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const [totalPrice,setTotalPrice]=useState(0);

    useEffect(()=>{
        if(cartLists.length){
            const totalPrice=cartLists.reduce(
                (accumulator, currentValue) => accumulator + (currentValue.quantity*currentValue.price),
                0,
            )
            setTotalPrice(totalPrice)
        }else{
            setTotalPrice(0)
        }
    },[cartLists])
    return(
        <>
            <Row>
                <Col
                className='checkout-container'
                >
                    <Row>
                        <Col>
                            <Form
                            className='contact-form'
                            >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label><sup>*</sup>{" "}Phone:</Form.Label>
                                    <Form.Control type="text" placeholder="" />
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
            <Row>
                <Col
                className="billing-shipping-container"
                >
                    <h3>BILLING & SHIPPING</h3>
                    <Row
                    className='form-container'
                    >
                        <Col>
                            <Row>
                                <Col xs={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                                        <Form.Label>NAME {" "}<sup>*</sup></Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                        <Form.Label>PHONE {" "}<sup>*</sup></Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                        <Form.Label>ADDRESS {" "}<sup>*</sup></Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                        <Form.Label>ORDER NOTE (OPTIONAL)</Form.Label>
                                        <Form.Control as="textarea" rows={2} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                className='option-container'
                                >
                                    <h4 className='title'>YOUR ORDER</h4>
                                    <span className='cupon'>Have Coupon?</span>
                                    <Row
                                    
                                    >
                                        <Col 
                                        xl={6}
                                        className="right-side side"
                                        >
                                            <h3 className='inner-title'>Choose Shipping Method</h3>
                                            <Row>
                                                <Col xl={6}>
                                                    <Form.Check
                                                    inline
                                                    label="Delivery Outside Dhaka:"
                                                    name="group1"
                                                    type={"radio"}
                                                    id={`inline-radio-1`}
                                                    />
                                                </Col>
                                                <Col 
                                                xl={6}
                                                style={{
                                                    textAlign:'right'
                                                }}
                                                >
                                                    <span>৳ 49.00</span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xl={6}>
                                                    <Form.Check
                                                    inline
                                                    label="Delivery Inside Dhaka:"
                                                    name="group1"
                                                    type={"radio"}
                                                    id={`inline-radio-2`}
                                                    />
                                                </Col>
                                                <Col 
                                                xl={6}
                                                style={{
                                                    textAlign:'right'
                                                }}
                                                >
                                                    <span>৳ 49.00</span>
                                                </Col>
                                            </Row>
                                            <Row
                                            style={{
                                                marginTop:"25px"
                                            }}
                                            >
                                                <Col xl={6}>
                                                    <h4>Cart Total:</h4>
                                                </Col>
                                                <Col 
                                                xl={6}
                                                style={{
                                                    textAlign:'right'
                                                }}
                                                >
                                                    <span>৳ {totalPrice?parseFloat(totalPrice).toFixed(2):0.00}</span>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row
                                            >
                                                <Col xl={6}>
                                                    <h4>Grand Total</h4>
                                                </Col>
                                                <Col 
                                                xl={6}
                                                style={{
                                                    textAlign:'right'
                                                }}
                                                >
                                                    <span>৳ {totalPrice?parseFloat(totalPrice+49).toFixed(2):0.00}</span>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col 
                                        xl={6}
                                        className="left-side side"
                                        >
                                            <h3 className='inner-title'>Choose Shipping Method</h3>
                                            <Form.Check
                                            inline
                                            label="Cash On Delivery"
                                            name="group1"
                                            type={"radio"}
                                            id={`inline-radio-3`}
                                            />
                                            <Form.Check
                                            inline
                                            label="bKash"
                                            name="group1"
                                            type={"radio"}
                                            id={`inline-radio-4`}
                                            />
                                            <Form.Check
                                            inline
                                            label="Pay with Card /Mobile Wallet"
                                            name="group1"
                                            type={"radio"}
                                            id={`inline-radio-5`}
                                            />

                                            <span
                                            style={{
                                                margin:"5px 0px"
                                            }}
                                            >Before confirming Your Order Please Check Our terms & conditions for Return Policy *</span>
                                            <Button
                                            className='checkout-submit-button'
                                            style={{
                                                width:'30%',
                                                margin:'10px 0px'
                                            }}
                                            >
                                                PLACE ORDER
                                            </Button>
                                        </Col>
                                    </Row>
                                   
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default CheckoutMain;

