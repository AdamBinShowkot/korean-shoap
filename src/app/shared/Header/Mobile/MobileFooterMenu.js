'use client'
import React,{
    useState,
    useEffect,
    useContext
} from 'react';
import {
    Row,
    Col,
    Button
} from 'react-bootstrap';
import Image from 'next/image';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import { 
    UserInfoContextApi 
} from '@/contextApi/userInfoApi';
import './index.scss';
import Link from 'next/link';
import CartModal from '../../CartModal';
import MenuModal from '../../CartModal/MenuModal';

const MobileFooterMenu=()=>{
    const {userInfo,setUserInfo}=useContext(UserInfoContextApi);
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const [totalQty,setTotalQty]=useState(0);
    const [cartTotal,setCartTotal]=useState(0);
    const [menuModalShow,setMenuModalShow]=useState(false);
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

    return(
        <>
            <Row
            className='mobile-footer-menu'
            >
                <Col
                className='mobile-menu-column'
                >
                    <Link 
                    href="/"
                    >
                        {/* <Button
                        className="footer-cart-button"
                        >
                            <Image
                            src="/m_icon1.png"
                            width={60}
                            height={60}
                            className="mobile-menu-image"
                            alt="Icon One"
                            />
                        </Button> */}
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="28" 
                        height="30" 
                        fill="currentColor" 
                        class="bi bi-house-door-fill" 
                        viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                        </svg>
                    </Link>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28" 
                    height="30" 
                    fill="currentColor" 
                    class="bi bi-list" 
                    viewBox="0 0 16 16"
                    onClick={()=>{
                        setMenuModalShow(true)
                    }}
                    >
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    {/* <Button
                    className="footer-cart-button"
                    onClick={()=>{
                        setMenuModalShow(true)
                    }}
                    >
                        <Image
                        src="/m_icon2.png"
                        width={60}
                        height={60}
                        className="mobile-menu-image"
                        alt="Icon One"
                        />
                    </Button> */}

                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="26" 
                    height="28" 
                    fill="currentColor" 
                    class="bi bi-heart" 
                    viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>

                    <span
                    className="shop-button-span-for-mobile"
                    onClick={()=>{
                        setShowModal(true)
                    }}
                    >
                        {/* <Image
                        src="/m_icon3.png"
                        width={60}
                        height={60}
                        className="mobile-menu-image"
                        alt="Icon One"
                        /> */}
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="32" 
                        height="34" 
                        fill="currentColor" 
                        className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                        <span
                        className='shop-button-span'
                        >
                            {totalQty?totalQty:0}
                        </span>
                    </span>
                  <Link
                  href={`/accounts`}
                  >
                    {/* <Button
                    className="footer-cart-button"
                    >
                            <Image
                            src="/m_icon4.png"
                            width={60}
                            height={60}
                            className="mobile-menu-image"
                            alt="Icon One"
                            />
                    </Button> */}
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28" 
                    height="30" 
                    fill="currentColor" 
                    class="bi bi-person" 
                    viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                  </Link>
                </Col>
            </Row>
            <CartModal IsModalShow={showModal} setIsModalShow={setShowModal}/>
            <MenuModal IsModalShow={menuModalShow} setIsModalShow={setMenuModalShow}/>
        </>
    )
}
export default MobileFooterMenu;