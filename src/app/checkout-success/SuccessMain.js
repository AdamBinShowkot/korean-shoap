'use client';
import React from 'react';
import {
    Row,
    Col,
    Button
} from 'react-bootstrap';
import './index.scss';
import Image from 'next/image';
import Link from 'next/link';

const SuccessMain=()=>{
    return(
        <>
            <Row
            className='success-main'
            >
                <Col
                className='success-inner-container'
                >
                    <Button
                    className="success-btn-one"
                    >
                        <Image
                        src="/success_checkout.png"
                        alt="Success Image"
                        height={22}
                        width={26}
                        />
                    </Button>
                    <h3>Success</h3>
                    <span>thank you for Order on website</span>
                    <Link href="/accounts">
                        <Button
                        className="back-to-order-button"
                        >
                            Back To Order
                        </Button>
                    </Link>
                </Col>
            </Row>
        </>
    )
}
export default SuccessMain;