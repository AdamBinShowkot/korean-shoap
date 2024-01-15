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
            <Row
            className="blog-sidebar-search-cotnainer"
            >
                
            </Row>
            <Row
            style={{
                marginTop:'15px'
            }}
            >
               
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