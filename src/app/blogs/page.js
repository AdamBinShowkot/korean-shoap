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
import BlogPosts from './partials/BlogPosts';
import SidebarMain from './partials/Sidebar';
import RecentSinglePost from './partials/RecentSinglePost';
import FeaturedImage from './partials/FeatruedImage';
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
                    <Row
                    className='blog-page-container'
                    >
                        <div className="blog-first">
                            <BlogPosts/>
                        </div>
                        <div 
                        className="blog-second "
                        >
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
                        </div>
                        <div 
                        className="blog-third "
                        >
                            <h3>Recent Post</h3><br/>
                            <RecentSinglePost/>
                            <RecentSinglePost/>
                            <RecentSinglePost/>
                            <RecentSinglePost/>
                        </div>
                        <div
                        className="blog-fourth"
                        >
                            <FeaturedImage/>
                        </div>
                        {/* <Col 
                        className="blog-third grid-items"
                        style={{
                            padding:'15px 10px'
                        }}
                        >
                            <SidebarMain/>
                        </Col> */}
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default BlogsPage;