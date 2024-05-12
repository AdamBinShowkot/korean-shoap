import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import Link from 'next/link';
import BlogCard from './BlogCard';
import FakeCardd from './FakeCard';
import PaginationMain from './Pagination';
import Notfound from './NotFound';

const BlogPosts=({lists})=>{
    return(
        <>
            <Row>
                {
                    lists?.length?lists.map((d)=>{
                        return <Col key={d.id} xs={6}>
                        <Link href="/blogs/1">
                            <BlogCard data={d}/>
                        </Link>
                    </Col>
                    }):<Col 
                    xs={6}
                    style={{
                        minWidth:"48%"
                    }}
                    >
                       <Notfound/>
                    </Col>
                }
                <Col 
                xs={6}
                style={{
                    // minWidth:"48%"
                }}
                >
                   <FakeCardd/>
                </Col>
                {/*<Col xs={6}>
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
                </Col> */}
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