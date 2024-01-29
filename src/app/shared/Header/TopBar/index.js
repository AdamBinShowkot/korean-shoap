'use client'
import React,{
    useContext,
    useEffect,
    useState
} from 'react';
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
import './index.scss'
import Image from 'next/image';
import HeaderSearchInput from '../shared/HeaderSearchInput';
import Link from 'next/link';
import { 
    UserInfoContextApi 
} from '@/contextApi/userInfoApi';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import ConfigureAxios from '@/utils/axiosConfig';
import { 
    ToastContainer 
} from 'react-toastify';
import axios from 'axios';

const TopBarMain=()=>{
    const {userInfo,setUserInfo}=useContext(UserInfoContextApi);
    const {cartLists,setCartLists}=useContext(AddToCartContext);

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

    useEffect(()=>{
        const token=localStorage.getItem("token");

        if(token){
            ConfigureAxios(token);
            getCartLists(token)
            let lists=localStorage.getItem("ProductCarts");
            lists=JSON.parse(lists);
            if(lists?.length){
                let configData=[];
                lists.map((dta)=>{
                    const newObj={
                        product_id:dta.product_id,
                        product_variant_id:dta.product_variant_id,
                        quantity:dta.quantity
                    }
                    configData=[...configData,newObj]
                })
                axios.post(`/cart-sync`,JSON.stringify(configData)).then((response)=>{
                    //console.log(response)
                    if(response.status===201){
                        localStorage.removeItem("ProductCarts");
                        getCartLists(token)
                    }
                }).catch((error)=>{

                })
            }
        }
    },[userInfo])
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
    //console.log("User : ",userInfo);
    return(
        <>
            <Col
            className='top-bar-container'
            >
                <Row
                style={{
                    justifyContent:'center',
                    display:'flex',
                    alignItems:'center'
                }}
                >
                    <Col 
                    xs={3} 
                    className='logo-div'
                    >
                        <Image
                        src="/shop-logo.png"
                        width={250}
                        height={100}
                        alt="Picture of the author"
                        />
                    </Col>
                    <Col 
                    xs={5}
                    >
                        <HeaderSearchInput/>
                    </Col>
                    <Col 
                    xs={2}
                    style={{
                        textAlign:'right'
                    }}
                    >
                        <Link
                        href="/login-registration"
                        >
                            <Button
                            className='user-button'
                            >
                                <Image
                                src="/user.png"
                                width={16}
                                height={16}
                                alt="search"
                                />
                            </Button>
                        </Link>

                        <Button
                        className='user-button'
                        style={{
                            marginLeft:'10px'
                        }}
                        >
                            <Image
                            src="/cart.png"
                            width={20}
                            height={20}
                            alt="search"
                            />
                        </Button>
                    </Col>
                    <Col 
                    className='header-social-container'
                    xs={2}>
                        {/* <Button
                        className='normal-social-button'
                        >
                            <Image
                            src="/facebook.png"
                            width={16}
                            height={16}
                            alt="search"
                            />
                        </Button> */}
                    
                        {/* <Button
                        className='normal-social-button'
                        > */}
                        {/* <InputGroup>
                            <InputGroupText
                            className='normal-input global-search'
                            > */}
                                <Image
                                className="header-social-image"
                                src="/facebook.png"
                                width={11}
                                height={11}
                                alt="search"
                                />
                            {/* </InputGroupText>
                            <InputGroupText
                            className='normal-input global-search'
                            > */}
                                <Image
                                className="header-social-image"
                                src="/instagram.png"
                                width={20}
                                height={20}
                                alt="search"
                                />
                            {/* </InputGroupText>
                        </InputGroup> */}
                        {/* </Button> */}
                        {/* <Button
                        className='normal-social-button'
                        > */}
                            <Image
                            className="header-social-image"
                            src="/youtube.png"
                            width={22}
                            height={22}
                            alt="search"
                            />
                        {/* </Button> */}
                    </Col>
                </Row>
            </Col>
          
        </>
    )
}
export default TopBarMain;