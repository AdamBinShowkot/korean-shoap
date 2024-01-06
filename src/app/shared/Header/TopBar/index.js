import React from 'react';
import {
    Col,
    Container,
    Row,
    FormControl,
    InputGroup,
    InputGroupText,
    Form,
    Button
} from 'react-bootstrap';
import './index.scss'
import Image from 'next/image';
import HeaderSearchInput from '../shared/HeaderSearchInput';

const TopBarMain=()=>{
    return(
        <>
            <Col
            className='top-bar-container'
            >
                <Row
                style={{
                    justifyContent:'center',
                    display:'flex',
                    alignItems:'center'
                }}
                >
                    <Col 
                    xs={3} 
                    className='logo-div'
                    >
                        <Image
                        src="/shop-logo.png"
                        width={250}
                        height={100}
                        alt="Picture of the author"
                        />
                    </Col>
                    <Col 
                    xs={5}
                    >
                        <HeaderSearchInput/>
                    </Col>
                    <Col 
                    xs={2}
                    style={{
                        textAlign:'right'
                    }}
                    >
                        <Button
                        className='user-button'
                        >
                            <Image
                            src="/user.png"
                            width={16}
                            height={16}
                            alt="search"
                            />
                        </Button>

                        <Button
                        className='user-button'
                        style={{
                            marginLeft:'10px'
                        }}
                        >
                            <Image
                            src="/cart.png"
                            width={20}
                            height={20}
                            alt="search"
                            />
                        </Button>
                    </Col>
                    <Col 
                    className='header-social-container'
                    xs={2}>
                        {/* <Button
                        className='normal-social-button'
                        >
                            <Image
                            src="/facebook.png"
                            width={16}
                            height={16}
                            alt="search"
                            />
                        </Button> */}
                    
                        {/* <Button
                        className='normal-social-button'
                        > */}
                        {/* <InputGroup>
                            <InputGroupText
                            className='normal-input global-search'
                            > */}
                                <Image
                                className="header-social-image"
                                src="/facebook.png"
                                width={16}
                                height={16}
                                alt="search"
                                />
                            {/* </InputGroupText>
                            <InputGroupText
                            className='normal-input global-search'
                            > */}
                                <Image
                                className="header-social-image"
                                src="/instagram.png"
                                width={20}
                                height={20}
                                alt="search"
                                />
                            {/* </InputGroupText>
                        </InputGroup> */}
                        {/* </Button> */}
                        {/* <Button
                        className='normal-social-button'
                        > */}
                            <Image
                            className="header-social-image"
                            src="/youtube.png"
                            width={22}
                            height={22}
                            alt="search"
                            />
                        {/* </Button> */}
                    </Col>
                </Row>
            </Col>
        </>
    )
}
export default TopBarMain;