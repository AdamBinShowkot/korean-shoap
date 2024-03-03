'use client';
import React,{
    useContext, useEffect, useState
} from 'react';
import {
    Col,
    Container,
    Row,
    FormControl,
    InputGroup,
    InputGroupText,
    Form,
    Button,
    Modal,
    Card
} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import { 
    UserInfoContextApi 
} from '@/contextApi/userInfoApi';
import ConfigureAxios from '@/utils/axiosConfig';
import SuccessToaster from './ui/SuccessToaster';
import ErrorToaster from './ui/ErrorToaster';
import axios from 'axios';
import { 
    baseImageServer 
} from '@/utils/config';
import CartModal from './shared/CartModal';

const FlatButton=()=>{
    const {userInfo,setUserInfo}=useContext(UserInfoContextApi);
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const [addToCartSuccess,setAddToCartSuccess]=useState(false);
    const [addToCartError,setAddToCartError]=useState(false);
    const [cartTotal,setCartTotal]=useState(0);
    const [showModal,setShowModal]=useState(false);
    const [quantity,setQuantity]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);

    // get cart lists on initial load
    useEffect(()=>{
        const token=localStorage.getItem("token");

        if(token){
            getCartLists(token)
        }else{
            let lists=localStorage.getItem("ProductCarts");
            lists=JSON.parse(lists);
            if(lists?.length){
                setCartLists(lists)
            }
        }
    },[])

    // calculate cart lists total prices
    useEffect(()=>{
        if(cartLists.length){
            const totalQuantity=cartLists.reduce(
                (accumulator, currentValue) => accumulator + parseInt(currentValue.quantity),
                0,
            );
            const totalPrice=cartLists.reduce(
                (accumulator, currentValue) => accumulator + (parseInt(currentValue.quantity)*parseInt(currentValue.discount_price)),
                0,
            )
            setTotalPrice(totalPrice);
            setQuantity(totalQuantity);
        }else{
            setQuantity(0);
            setTotalPrice(0);
        }
    },[cartLists,setCartLists])

   


    // get cart lists onload
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

   

    
    return(
        <>
           {/* <Link href="/products/checkout"> */}
            <Row 
            className='fixed-button'
            onClick={()=>{
                if(cartLists?.length){
                    setShowModal(true)
                }
            }}
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
                            <span>৳ {totalPrice?parseFloat(totalPrice).toFixed(0):0}</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
           {/* </Link> */}
           <CartModal IsModalShow={showModal} setIsModalShow={setShowModal}/>
        </>
    )
}
export default FlatButton;