'use client';
import React,{
    useState,
    useEffect
} from 'react';
import {
    Row, 
    Col 
} from 'react-bootstrap';
import useDeviceSize from '@/hooks/useDeviceSize';
import Link from 'next/link';
import Image from 'next/image';
import Content from './Content';

const ContactMain=()=>{
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
                        <strong className="footer-header"><b>Contacts</b></strong>
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
                <Content isContentShow={isContentShow}/>
            </Col>
        </>
    )
}
export default ContactMain;