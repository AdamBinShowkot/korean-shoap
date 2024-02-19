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
    Button,
    Modal,
    Card
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
import { 
    baseImageServer 
} from '@/utils/config';
import CartModal from '../../CartModal';

const TopBarMain=()=>{
    const {userInfo,setUserInfo}=useContext(UserInfoContextApi);
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const [totalQty,setTotalQty]=useState(0);
    const [cartTotal,setCartTotal]=useState(0);
    const [showModal,setShowModal]=useState(false);
    const [token,setToken]=useState("");
    

    useEffect(()=>{
        const Token=localStorage.getItem("token");
        if(Token){
            setToken(Token)
        }else{
            setToken("")
        }
        if(cartLists?.length){
            const total=cartLists.reduce((accum,current)=>{return accum+(parseFloat(current.price)*current.quantity)},0)
            const totalQty=cartLists.reduce((accum,current)=>{return accum+parseInt(current.quantity)},0);

            const totals=parseFloat(total).toFixed(2);
            setCartTotal(totals);
            setTotalQty(totalQty);
        }
    },[cartLists])

    //console.log("User : ",userInfo);
    return(
        <>
            <Col
            className='top-bar-container'
            >
                <div
                style={{
                    justifyContent:'center',
                    display:'flex',
                    alignItems:'center',
                    flexDirection:'row',
                    width:'86vw'
                }}
                >
                    <div 
                    className='logo-div'
                    style={{
                        width:'25vw'
                    }}
                    >
                        <Link href="/">
                            <Image
                            className='korean-shop-logo'
                            src="/shop-logo-two.jpg"
                            width={250}
                            height={100}
                            alt="Picture of the author"
                            />
                        </Link>
                    </div>
                    <div 
                    style={{
                        width:'32vw'
                    }}
                    >
                        <HeaderSearchInput/>
                    </div>
                    <div 
                    className='header-user-cart-section'
                    >
                        {/* <Link
                        href="/my-order"
                        > */}
                            <Button
                            className='user-button'
                            onClick={()=>{
                                if(cartLists.length){
                                    setShowModal(true)
                                }else{

                                }
                            }}
                            >
                                <Image
                                src="/cart.png"
                                width={20}
                                height={20}
                                alt="search"
                                onClick={()=>{
                                
                                }}
                                >
                                </Image>
                                <span
                                style={{
                                    zIndex:'100',
                                    position:'relative',
                                    top:'-26px !important',
                                    fontSize:'11px',
                                    padding:'2px 4px',
                                    borderRadius:'50px',
                                    backgroundColor:'#05f600',
                                    left:'5px'
                                }}
                                >
                                    {totalQty?totalQty:0}
                                </span>
                            </Button>
                        {/* </Link> */}
                        <Link
                        href="/accounts"
                        >
                            <Button
                            className='user-button'
                            style={{
                                margin:'0px 5px'
                            }}
                            >
                                <Image
                                src="/user.png"
                                width={16}
                                height={16}
                                alt="search"
                                />
                            </Button>
                        </Link>
                        {
                            !token?<Link href="accounts">
                            <span
                                style={{
                                    fontSize:'12px'
                                }}
                                >
                                    <b>
                                        Sign In / Login In
                                    </b>
                                </span>
                        </Link>:""
                        }
                    </div>
                    <div 
                    className='header-social-container'
                    style={{
                        width:'11vw'
                    }}
                    >
                        <a
                        href='https://www.facebook.com/koreanshopsBangladesh'
                        target="_blank"
                        >
                            <Image
                            className="header-social-image"
                            src="/facebook.png"
                            width={11}
                            height={11}
                            alt="search"
                            />
                        </a>
                        <a href="https://www.instagram.com/koreanshopbd/" target='_blank'>
                            <Image
                            className="header-social-image"
                            src="/instagram.png"
                            width={20}
                            height={20}
                            alt="search"
                            /> 
                        </a>
                        <Image
                        className="header-social-image"
                        src="/youtube.png"
                        width={22}
                        height={22}
                        alt="search"
                        />
                    </div>
                </div>
            </Col>
            <CartModal IsModalShow={showModal} setIsModalShow={setShowModal}/>
        </>
    )
}
export default TopBarMain;