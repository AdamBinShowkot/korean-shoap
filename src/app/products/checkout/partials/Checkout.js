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
import ConfigureAxios from '@/utils/axiosConfig';
import axios from 'axios';

const CheckoutMain=()=>{
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const Token=localStorage.getItem("token");
    const [totalPrice,setTotalPrice]=useState(0);
    const [customerInfo,setCustomerInfo]=useState({
        name:"",
        phone:"",
        address:"",
        note:"",
        insideDhaka:true,
        paymentMethod:"COD"
    })

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

    const onValueChange=(e)=>{
        ///console.log(e)
        const data={...customerInfo};
        const {name,value}=e.target;

        data[name]=value;

        setCustomerInfo(data);
    }

    const getCartLists=async(token="")=>{
        if(token){
            ConfigureAxios(token);
            axios.get(`/cart`)
            .then((response)=>{
                console.log("Cart Lists : ",response.data)
                if(response.status===200){
                    setCartLists(response.data)
                }
            }).catch((error)=>{

            })
        }

    }

    const checkoutSubmit=(e)=>{
        e.preventDefault();

        const lists=[...cartLists];


        const {
            paymentMethod,
            name,
            address,
            phone,
            note,
            insideDhaka
        }=customerInfo;

        if(paymentMethod && name && note && address && phone && paymentMethod==="COD" && lists?.length){
            const obj={
                // coupon_code:"",
                // postal_code: "",
                // city: "",
                payment_method:paymentMethod,
                delivery_charge:49,
                name:name,
                mobile:phone,
                full_address:address,
                customer_note:note,
                grand_total:(totalPrice+49),
                products:[]
            }

            let myLists=[];
            lists.map((dta)=>{
                const newOBJ={
                    product_id:dta?.product_id,
                    product_variant_id:dta?.product_sku_id,
                    quantity:dta?.quantity
                }
                myLists=[...myLists,newOBJ];
            })

            obj.products=myLists;

            if(Token){
               // ConfigureAxios(Token);
                axios.post(`/public/orders`,JSON.stringify(obj))
                .then((response)=>{
                    console.log("order response: ",response);
                    if(response.status===200){
                        alert("Order Completed Suffessfully.")
                    }
                }).catch((error)=>{
                    alert("Something Went Wrong.")
                    console.log("order error: ",error)
                })
            }
        }else{

        }
    }
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
                                        <Form.Control 
                                        type="text" 
                                        placeholder=""
                                        name="name"
                                        value={customerInfo.name}
                                        onChange={onValueChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                        <Form.Label>PHONE {" "}<sup>*</sup></Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        placeholder=""
                                        name="phone"
                                        value={customerInfo.phone}
                                        onChange={onValueChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                        <Form.Label>ADDRESS {" "}<sup>*</sup></Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        placeholder=""
                                        name="address"
                                        value={customerInfo.address}
                                        onChange={onValueChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                        <Form.Label>ORDER NOTE (OPTIONAL)</Form.Label>
                                        <Form.Control 
                                        as="textarea" 
                                        rows={2} 
                                        name="note"
                                        value={customerInfo.note}
                                        onChange={onValueChange}
                                        />
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
                                                    onChange={(e)=>{
                                                        let lists={...customerInfo};

                                                        lists.insideDhaka=false;
                                                        setCustomerInfo(lists)
                                                    }}
                                                    checked={customerInfo.insideDhaka?false:true}
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
                                                    onChange={(e)=>{
                                                        let lists={...customerInfo};

                                                        lists.insideDhaka=true;
                                                        setCustomerInfo(lists)
                                                    }}
                                                    checked={customerInfo.insideDhaka?true:false}
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
                                            name="group2"
                                            type={"radio"}
                                            onChange={(e)=>{
                                                let lists={...customerInfo};

                                                lists.paymentMethod="COD";
                                                setCustomerInfo(lists)
                                            }}
                                            checked={customerInfo.paymentMethod==="COD"?true:false}
                                            id={`inline-radio-3`}
                                            />
                                            <Form.Check
                                            inline
                                            label="bKash"
                                            name="group2"
                                            type={"radio"}
                                            onChange={(e)=>{
                                                let lists={...customerInfo};

                                                lists.paymentMethod="BKASH";
                                                setCustomerInfo(lists)
                                            }}
                                            checked={customerInfo.paymentMethod==="BKASH"?true:false}
                                            id={`inline-radio-4`}
                                            />
                                            <Form.Check
                                            inline
                                            label="Pay with Card /Mobile Wallet"
                                            name="group2"
                                            type={"radio"}
                                            onChange={(e)=>{
                                                let lists={...customerInfo};

                                                lists.paymentMethod="PCARD";
                                                setCustomerInfo(lists)
                                            }}
                                            checked={customerInfo.paymentMethod==="PCARD"?true:false}
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
                                            onClick={checkoutSubmit}
                                            disabled={Token?false:true}
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

