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
                        <Button
                        className="footer-cart-button"
                        >
                            <Image
                            src="/m_icon1.png"
                            width={60}
                            height={60}
                            className="mobile-menu-image"
                            alt="Icon One"
                            />
                        </Button>
                    </Link>
                    <Button
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
                   </Button>
                   <Button
                   className="footer-cart-button"
                   onClick={()=>{
                    setShowModal(true)
                   }}
                   >
                        <Image
                        src="/m_icon3.png"
                        width={60}
                        height={60}
                        className="mobile-menu-image"
                        alt="Icon One"
                        />
                        <span
                        style={{
                            zIndex:'100',
                            position:'relative',
                            top:'-24px !important',
                            fontSize:'11px',
                            padding:'3px 6px',
                            borderRadius:'50px',
                            backgroundColor:'#05f600',
                            left:'5px'
                        }}
                        >
                            {totalQty?totalQty:0}
                        </span>
                   </Button>
                  <Link
                  href={`/accounts`}
                  >
                    <Button
                    className="footer-cart-button"
                    >
                            <Image
                            src="/m_icon4.png"
                            width={60}
                            height={60}
                            className="mobile-menu-image"
                            alt="Icon One"
                            />
                    </Button>
                  </Link>
                </Col>
            </Row>
            <CartModal IsModalShow={showModal} setIsModalShow={setShowModal}/>
            <MenuModal IsModalShow={menuModalShow} setIsModalShow={setMenuModalShow}/>
        </>
    )
}
export default MobileFooterMenu;