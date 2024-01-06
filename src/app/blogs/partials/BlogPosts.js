import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import Link from 'next/link';
import BlogCard from './BlogCard';
import PaginationMain from './Pagination';

const BlogPosts=()=>{
    return(
        <>
            <Row>
                <Col xs={6}>
                    <Link href="/blogs/1">
                        <BlogCard/>
                    </Link>
                </Col>
                <Col xs={6}>
                    <Link href="/blogs/2">
                        <BlogCard/>
                    </Link>
                </Col>
                <Col xs={6}>
                    <Link href="/blogs/3">
                        <BlogCard/>
                    </Link>
                </Col>
                <Col xs={6}>
                    <Link href="/blogs/4">
                        <BlogCard/>
                    </Link>
                </Col>
                <Col xs={6}>
                    <Link href="/blogs/5">
                        <BlogCard/>
                    </Link>
                </Col>
                <Col xs={6}>
                    <Link href="/blogs/6">
                        <BlogCard/>
                    </Link>
                </Col>
                <Col xs={6}>
                    <Link href="/blogs/7">
                        <BlogCard/>
                    </Link>
                </Col>
                <Col xs={6}>
                    <Link href="/blogs/8">
                        <BlogCard/>
                    </Link>
                </Col>
                <Col xs={6}>
                    <Link href="/blogs/9">
                        <BlogCard/>
                    </Link>
                </Col>
                <Col xs={6}>
                    <Link href="/blogs/10">
                        <BlogCard/>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col 
                xs={12}
                style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    padding:"30px 0px 0px 10px"
                }}
                >
                    <PaginationMain/>
                </Col>
            </Row>
        </>
    )
}
export default BlogPosts;