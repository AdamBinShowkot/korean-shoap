import Link from 'next/link';
import React from 'react';
import {
    Col,
    Button,
    Row
} from 'react-bootstrap';
import AboutMain from './About';
import QuickLinks from './QuickLinks';
import ServiceMain from './Service';
import ContactMain from './Contact';
import Image from 'next/image';
import Module from './index.module.css';
import './index.scss';

const ContactAreaMain=()=>{
    return(
        <>
            <Col
            >
                <Row
                className='footer-container'
                >
                    <AboutMain/>
                    <QuickLinks/>
                    <ServiceMain/>
                    <ContactMain/>
                </Row>
                <hr 
                //className={Module.hrStyle}
                className="footer-hr-section"
                />
                <Row
                className='footer-bottom-container'
                >
                    <Col 
                    xl={3}
                    xs={12}
                    style={{
                        textAlign:'left'
                    }}
                    >
                        <Button
                        className='normal-social-button no-left-margin'
                        >
                            <Image
                            src="/facebook.png"
                            width={16}
                            height={16}
                            alt="search"
                            />
                        </Button>
                    
                        <Button
                        className='normal-social-button'
                        >
                            <Image
                            src="/instagram.png"
                            width={20}
                            height={20}
                            alt="search"
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
                            />
                        </Button>
                    </Col>
                    <Col 
                    xl={6}
                    xs={12}
                    className='footer-copyright-column'
                    >
                       <span>© 2023 Korean Shop BD | All Rights Reserved.</span> 
                    </Col>
                    <Col 
                    xl={3}
                    xs={12}
                    style={{
                        textAlign:'right'
                    }}
                    >
                        <span>Work In Progress...</span>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
export default ContactAreaMain;