'use client';
import React,{
    useContext, useEffect, useState
} from 'react';
import {
    Button, 
    Row,
    Col
} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';

const FlatButton=()=>{
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const [quantity,setQuantity]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);

    useEffect(()=>{
        if(cartLists.length){
            const totalQuantity=cartLists.reduce(
                (accumulator, currentValue) => accumulator + currentValue.quantity,
                0,
            );
            const totalPrice=cartLists.reduce(
                (accumulator, currentValue) => accumulator + (currentValue.quantity*currentValue.price),
                0,
            )
            setTotalPrice(totalPrice);
            setQuantity(totalQuantity);
        }else{
            setQuantity(0);
            setTotalPrice(0);
        }
    },[cartLists])


    
    return(
        <>
           <Link href="/products/checkout">
                <Row 
                className='fixed-button'
                >
                    <Col 
                    xs={12}
                    style={{
                        padding:"0px"
                    }}
                    >
                        <Row
                        className='flat-button-top-area'
                        >
                            <Col 
                            xs={12}
                            style={{
                                textAlign:'center'
                            }}
                            >
                                <Row
                                >
                                    <Col 
                                    xs={12}
                                    style={{
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:"center"
                                    }}
                                    >
                                        <Image
                                        src={'/shop-bag.png'}
                                        height={20}
                                        width={20}
                                        alt="Image"
                                        />
                                    </Col>
                                </Row>
                                <span>{quantity?quantity:0} Items</span>
                            </Col>
                        </Row>
                        <Row
                        className='flat-button-footer-area'
                        >
                            <Col 
                            xs={12}
                            >
                                <span>৳ {totalPrice?parseFloat(totalPrice).toFixed(2):0}</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
           </Link>
        </>
    )
}
export default FlatButton;