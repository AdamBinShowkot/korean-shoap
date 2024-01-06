import React from 'react';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';
import Image from 'next/image';
import './index.scss';

const BlogCard=()=>{
    return(
        <>
            <Card
            className='blog-card'
            style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
            >
                <Row
                style={{
                    width: '100%',
                    minHeight:'170px',
                    backgroundImage:`url('/blogImage.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%'
                }}
                >
                    <Col 
                    xs={12}
                    >

                    </Col>
                </Row>
                <Row>
                    <Col 
                    xs={12}
                    style={{
                        padding:'10px',
                        textAlign:'center'
                    }}
                    >
                        <span style={{fontSize:'11px'}}>By: Admin&nbsp;&nbsp; | &nbsp;&nbsp;October 25, 2022</span><br/>
                        <span>
                            <b>Tips & Procedure To Apply Luxury Beauty Cosmetic Cream</b>
                        </span>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
export default BlogCard;