import Image from 'next/image';
import React from 'react';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';

const NotFoundComponent=()=>{
    return(
        <>
            <Card
            style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                padding:'20px'
            }}
            >
                <Row>
                    <Col
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        flexDirection:'column'
                    }}
                    >
                        <Image
                        src="/no-results.png"
                        height={130}
                        width={130}
                        alt="Not Found Image"
                        style={{
                            marginBottom:'15px'
                        }}
                        />
                        <h3>OPPS ! Data Not Found.</h3>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
export default NotFoundComponent;