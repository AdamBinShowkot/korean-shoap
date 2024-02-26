'use client'
import React,{
    useState,
    useEffect
} from 'react';
import {
    Row,
    Col,
    Button
} from 'react-bootstrap';
import Image from 'next/image';
import HeaderSearchInput from '../shared/HeaderSearchInput';
import './index.scss';
import Link from 'next/link';
import MenuModal from '../../CartModal/MenuModal';

const MobileHeader=()=>{
    const [showModal,setShowModal]=useState(false);
    return(
        <>
            <Col 
            sm={12}
            >
                <Row
                className='mobile-header-top-container'
                >
                    <Col 
                    xs={2}
                    style={{
                        textAlign:'right'
                    }}
                    >
                        <Image
                        src="/mobile_menu.png"
                        width={60}
                        height={60}
                        className='mobile-humberger-menu'
                        alt="Picture of the author"
                        onClick={()=>{
                            setShowModal(true)
                        }}
                        />
                    </Col>
                    <Col 
                    xs={6}
                    >
                       <Link
                       href="/"
                       >
                            <Image
                            src="/shop-logo.png"
                            width={250}
                            height={100}
                            className='mobile-shoap-logo'
                            alt="Picture of the author"
                            />
                       </Link>
                    </Col>
                    <Col 
                    xs={4}
                    style={{
                        display:'flex'
                    }}
                    >
                        <Button
                        className='normal-social-button'
                        >
                            <Image
                            src="/facebook.png"
                            width={16}
                            height={16}
                            alt="search"
                            className="header-social-icon facebook-icon"
                            />
                        </Button>
                    
                        <Button
                        className='normal-social-button'
                        >
                            <Image
                            src="/instagram.png"
                            width={25}
                            height={25}
                            alt="search"
                            className="header-social-icon instagram-icon"
                            />
                        </Button>
                        <Button
                        className='normal-social-button'
                        >
                            <Image
                            src="/youtube.png"
                            width={22}
                            height={22}
                            alt="search"
                            className="header-social-icon youtube-icon"
                            />
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col 
                    sm={12}
                    style={{
                        padding:'4px 10% 10px'
                    }}
                    >
                        <HeaderSearchInput/>
                    </Col>
                </Row>
            </Col>
            <MenuModal IsModalShow={showModal} setIsModalShow={setShowModal}/>
        </>
    )
}
export default MobileHeader;