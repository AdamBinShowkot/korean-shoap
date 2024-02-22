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
import SuccessToaster from '@/app/ui/SuccessToaster';
import ErrorToaster from '@/app/ui/ErrorToaster';
import axios from 'axios';
import { 
    baseImageServer 
} from '@/utils/config';
import WarningModal from '@/app/ui/WarningModal';
import NotFoundComponent from '@/app/ui/NotFound';
import './index.scss';

const MenuModal=({IsModalShow,setIsModalShow})=>{
    const {userInfo,setUserInfo}=useContext(UserInfoContextApi);
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const [addToCartSuccess,setAddToCartSuccess]=useState(false);
    const [addToCartError,setAddToCartError]=useState(false);
    const [cartTotal,setCartTotal]=useState(0);
    //const [showModal,setShowModal]=useState(IsModalShow);
    const [quantity,setQuantity]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);
    const [IsShow,setIsShow]=useState(false);
    const [yesDelete,setYesDelete]=useState(false);
    const [removeData,setRemoveData]=useState({});
    const [successMsg,setSuccessMsg]=useState("");
    const [errorMsg,setErrorMsg]=useState("");

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
           <Modal 
            show={IsModalShow} fullscreen={false} onHide={() => setIsModalShow(false)}
            className="products-cart-modal left"
            >
                <Modal.Header>
                    <Row>
                        <Col
                        style={{
                            //position:'relative',
                            textAlign:'center',
                           // display:'flex',
                            //flexDirection:'column',
                            padding:'4px 10px',
                            display:'flex',
                            justifyContent:'flex-end',
                            alignItems:'center'
                        }}
                        >
                            <Row>
                                <Col
                                style={{
                                    textAlign:'center'
                                }}
                                //xs={10}
                                >
                                    <h4
                                    style={{
                                        textAlign:'center'
                                    }}
                                    >Menu</h4>
                                </Col>
                                <Col
                                //xs={2}
                                >
                                    <Image
                                    src={'/modal_close_icon.png'}
                                    alt="Modal Close"
                                    height={18}
                                    width={16}
                                    style={{
                                        // position:'absolute',
                                        // left:10,
                                        // top:-6
                                    }}
                                    onClick={()=>{
                                        setIsModalShow(false)
                                    }}
                                    className="modal-close-icon"
                                    ></Image>
                                </Col>
                            </Row>
                           
                        </Col>
                    </Row>
                </Modal.Header>
                <Modal.Body
                style={{
                    backgroundColor:"#f7f5fb"
                }}
                className="cart-modal-body"
                >
                   
                </Modal.Body>
            </Modal>
        </>
    )
}
export default MenuModal;