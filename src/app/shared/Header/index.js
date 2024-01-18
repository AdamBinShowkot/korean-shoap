import React from 'react';
import {Row,Col} from 'react-bootstrap';
import DiscountMain from './Discount';
import TopBarMain from './TopBar';
import NavBarMain from './NavBar';
// import NavBarTwo from './NavBar/NavbarTwo';
import './index.scss';
import MobileHeader from './Mobile/MobileHeader';

const HeaderMain=()=>{
    return(
        <>
            <Row
            className='header-container'
            >
                <Col>
                    <Row
                    className='discount-container'
                    >
                        <DiscountMain/>
                    </Row>
                    <Row
                    className='header-topbar'
                    >
                        <TopBarMain/>
                    </Row>
                    <Row
                    className='header-navbar'
                    >
                        <NavBarMain/>
                        {/* <NavBarTwo/> */}
                    </Row>
                    <Row
                    className='mobile-header'
                    >
                        <MobileHeader/>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default HeaderMain;