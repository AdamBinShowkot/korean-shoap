import React from 'react';
import {
    Card,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import Image from 'next/image';

const BlogPost=({data,isNew,isChecked})=>{
    return(
        <>
            <Card
            style={{ 
                width: '100%',
                height:'170px',
                margin:'0px',
                borderRadius:'5px',
                padding:'10px',
                border:'none',
                position:'relative'
            }}
            className="home-post-container"
            >
                {
                    isNew || isChecked?(
                        <Row
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <Col xs={6}>
                                <Button
                                className='blog-new-button'
                                >
                                    New
                                </Button>
                            </Col>
                            <Col 
                            xs={6}
                            style={{
                                textAlign:'right !important',
                                display:'flex',
                                justifyContent:'flex-end'
                            }}
                            >
                                <Image
                                src="/check.png"
                                width={18}
                                height={18}
                                alt="search"
                                />
                            </Col>
                        </Row>
                    ):""
                }
                <Row
                style={{
                    position:'absolute',
                    bottom:'10px'
                }}
                >
                    <Col xs={12}>
                        <span 
                        style={{
                            fontSize:'12px',
                            fontWeight:500,
                            color:'#fff'
                        }}
                        >
                            <strong style={{fontSize:'13px'}}>5 moisture - boosting steps to</strong><br/>
                            12 Dec , 2023<br/>
                            <strong style={{fontSize:'13px'}}> Winterize</strong>
                        </span>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
export default BlogPost;