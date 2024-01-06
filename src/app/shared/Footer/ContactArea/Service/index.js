'use client';
import React,{
    useState,
    useEffect
} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useDeviceSize from '@/hooks/useDeviceSize';
import { 
    Col,
    Row
} from 'react-bootstrap';
import './index.scss';

const ServiceMain=()=>{
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
                    xl={3}
                    className='inner-column'
                    >
                        <strong className="footer-header">Service</strong>
                        <Image
                        onClick={()=>{
                            setIsContentShow(!isContentShow)
                        }}
                        src="/footer_plus.png"
                        width={16}
                        height={16}
                        alt="search"
                        className={`${isButtonShow?'show image':'hide image'}`}
                        />
                    </Col>
                </Row>
                <ul className={`${isContentShow?'show-service-content content':'hide-service-content content'}`}>
                    <li>
                        <Link href="/blogs">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            BRANDS
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Skip Concern
                        </Link>
                    </li>
                </ul>
            </Col>
        </>
    )
}
export default ServiceMain;