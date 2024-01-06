import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import BlogPosts from './partials/BlogPosts';
import SidebarMain from './partials/Sidebar';
import './index.scss';


const BlogsPage=()=>{
    return(
        <>
            <Row
            className='blogs-page-container'
            >
                <Col 
                xs={12}
                >
                    <Row>
                        <Col xs={9}>
                            <BlogPosts/>
                        </Col>
                        <Col 
                        xs={3}
                        style={{
                            padding:'15px 10px'
                        }}
                        >
                            <SidebarMain/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default BlogsPage;