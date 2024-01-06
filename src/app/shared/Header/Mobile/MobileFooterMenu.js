import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import Image from 'next/image';
import './index.scss';

const MobileFooterMenu=()=>{
    return(
        <>
            <Row
            className='mobile-footer-menu'
            >
                <Col
                className='mobile-menu-column'
                >
                    <Image
                    src="/m_icon1.png"
                    width={60}
                    height={60}
                    className="mobile-menu-image"
                    alt="Icon One"
                    />
                    <Image
                    src="/m_icon2.png"
                    width={60}
                    height={60}
                    className="mobile-menu-image"
                    alt="Icon One"
                    />
                    <Image
                    src="/m_icon3.png"
                    width={60}
                    height={60}
                    className="mobile-menu-image"
                    alt="Icon One"
                    />
                    <Image
                    src="/m_icon4.png"
                    width={60}
                    height={60}
                    className="mobile-menu-image"
                    alt="Icon One"
                    />

                </Col>
            </Row>
        </>
    )
}
export default MobileFooterMenu;