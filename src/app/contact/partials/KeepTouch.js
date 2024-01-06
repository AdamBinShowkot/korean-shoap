import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import Image from 'next/image';
import './index.scss';

const KeepTouch=()=>{
    return(
        <>
            <Row
            >
                <Col 
                xs={12}
                style={{
                    textAlign:'center'
                }}
                >
                    <h2>Keep in touch with us</h2>
                </Col>
            </Row>
            <Row>
                <Col 
                xs={12}
                style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <hr
                    className='keep-touch-hr'
                    />
                </Col>
            </Row>
            <Row
            style={{
                padding:'0px 300px'
            }}
            >
                <Col 
                xs={12}
                style={{
                    textAlign:'center'
                }}
                >
                    <p style={{color:'#000'}}>We’re talking about clean beauty gift sets, of course – and we’ve got a bouquet of beauties for yourself or someone you love.</p>
                </Col>
            </Row>
            <Row
            style={{
                padding:'50px 160px'
            }}
            >
                <Col 
                xs={4}
                >
                    <Row>
                        <Col xs={2}>
                            <Image
                            src='/location.png'
                            height={40}
                            width={40}
                            alt='Location Image'
                            />
                        </Col>
                        <Col xs={10}>
                            <h3 style={{marginTop:'5px'}}>Store Location</h3>
                            <span className='keep-touch-span'>
                            store 1: <b>Dhamondi zigatola Dhaka</b>
                            </span><br/>
                            <span className='keep-touch-span'>
                            store 1: <b>Dhamondi zigatola Dhaka</b>
                            </span><br/>
                            <span className='keep-touch-span'>
                            store 1: <b>Dhamondi zigatola Dhaka</b>
                            </span>
                        </Col>
                    </Row>
                </Col>
                <Col 
                xs={4}
                >
                    <Row>
                        <Col xs={2}>
                            <Image
                            src='/calling.png'
                            height={40}
                            width={40}
                            alt='Location Image'
                            />
                        </Col>
                        <Col xs={10}>
                            <h3 style={{marginTop:'5px'}}>Contact</h3>
                            <span className='keep-touch-span'>
                            Mobile: <b>010000000000</b>
                            </span><br/>
                            <span className='keep-touch-span'>
                            Hotline: <b>00000000000</b>
                            </span><br/>
                            <span className='keep-touch-span'>
                            Email:<b> Houston@mali.com</b>
                            </span>
                        </Col>
                    </Row>
                </Col>
                <Col 
                xs={4}
                >
                    <Row>
                        <Col xs={2}>
                            <Image
                            src='/timer.png'
                            height={40}
                            width={40}
                            alt='Location Image'
                            />
                        </Col>
                        <Col xs={10}>
                            <h3 style={{marginTop:'5px'}}>Open Hours</h3>
                            <span className='keep-touch-span'>
                            Monday – Saturday:<b> 8:00 am – 4:00pm</b>
                            </span><br/>
                            <span className='keep-touch-span'>
                            Sunday:<b> Close</b>
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default KeepTouch;