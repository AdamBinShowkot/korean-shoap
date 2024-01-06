import React from 'react';
import {
    Row,
    Col,
    FormControl,
    InputGroup,
    InputGroupText,
    Form,
    Button
} from 'react-bootstrap';
import Image from 'next/image';
import './index.scss';
import RecentSinglePost from './RecentSinglePost';
import FeaturedImage from './FeatruedImage';

const SidebarMain=()=>{
    return(
        <>
            <Row>
                <Col 
                xs={12}>
                    <h3>Search</h3><br/>
                    <InputGroup>
                        <FormControl
                        className='normal-input'
                        placeholder='search here'
                        >

                        </FormControl>
                        <InputGroupText
                        className='normal-input global-search'
                        >
                            <Image
                            src="/search.png"
                            width={20}
                            height={20}
                            alt="search"
                            />
                        </InputGroupText>
                    </InputGroup>
                    <br/>
                    <h3>Categories</h3>
                    <ul className='blog-category-lists'>
                        <li>Cream Blush</li>
                        <li>Uncategorized</li>
                        <li>Hair & Body</li>
                        <li>Make Up</li>
                        <li>How To’s</li>
                        <li>Skincare</li>
                        <li>Sun Care</li>
                        <li>Tip</li>
                    </ul>
                </Col>
            </Row>
            <Row
            style={{
                marginTop:'15px'
            }}
            >
                <Col 
                xs={12}
                >
                    <h3>Recent Post</h3><br/>
                    <RecentSinglePost/>
                    <RecentSinglePost/>
                    <RecentSinglePost/>
                    <RecentSinglePost/>
                </Col>
            </Row>
            <Row
            style={{
                padding:'20px 10px'
            }}
            >
                <Col 
                xs={12}
                >
                    <FeaturedImage/>
                </Col>
            </Row>
        </>
    )
}
export default SidebarMain;