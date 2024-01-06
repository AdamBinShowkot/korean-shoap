import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import Image from 'next/image';

const RecentSinglePost=()=>{
    return(
        <>
            <Row
            style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                padding:'10px 0px'
            }}
            >
                <Col 
                xs={4}
                >
                    <Image
                    src='/blogFeatured.png'
                    height={100}
                    width={75}
                    alt=""
                    />
                </Col>
                <Col xs={8}>
                    <span style={{fontSize:'11px'}}>October 25, 2022</span><br/>
                    <span><b>5 moisture - boosting steps to winterize your make up routine</b></span>
                </Col>
            </Row>
        </>
    )
}
export default RecentSinglePost;