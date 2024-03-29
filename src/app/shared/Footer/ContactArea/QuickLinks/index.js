'use client';
import React,{
    useState,
    useEffect
} from 'react';
import useDeviceSize from '@/hooks/useDeviceSize';
import {
    Row,
    Col 
} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import './index.scss';

const QuickLinks=()=>{
    const [isContentShow,setIsContentShow]=useState(true);
    const [isButtonShow,setIsButtonShow]=useState(false);
    const [width, height] = useDeviceSize();  

    useEffect(()=>{
        if(width<420){
            setIsContentShow(false);
            setIsButtonShow(true);
        }else{
            setIsContentShow(true)
            setIsButtonShow(false);
        }
    
    
        return () => {
          
        };
    },[width])

    return(
        <>
            <Col 
            className='footer-column'
            xl={3}
            xs={12}
            >
                <Row>
                    <Col
                    xs={12}
                    className='inner-column'
                    >
                        <strong className="footer-header">quick links</strong>
                        <Image
                        onClick={()=>{
                            setIsContentShow(!isContentShow)
                        }}
                        src="/footer_plus.png"
                        width={16}
                        height={16}
                        alt="search"
                        className={`${isButtonShow?'show footer-image':'hide footer-image'}`}
                        />
                    </Col>
                </Row>
                <ul className={`${isContentShow?'show-quick-links content':'hide-quick-links content'}`}>
                    <li>
                        <Link href="/about-us">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/information">
                            Information
                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy-policy">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="/terms-&-condition">
                            Terms & Conditions
                        </Link>
                    </li>
                </ul>
            </Col>
        </>
    )
}
export default QuickLinks;