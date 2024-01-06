import React from 'react';
import {
    Card,
    Row,
    Col,
    Button,
    InputGroupText,
} from 'react-bootstrap';
import Image from 'next/image';

const BlogVideo=({data,isNew,isChecked,image})=>{
    return(
        <>
            <Card
            style={{ 
                width: '100%',
                height:'170px',
                backgroundImage:`url('/${image?image:'sVideo3.png'}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                padding:'10px',
                margin:'0px',
                borderRadius:'5px',
                border:'none',
                position:'relative'
            }}
            //className="home-post-container"
            >
                <Row
                style={{
                    position:'absolute',
                    bottom:'10px',
                    width:'100%'
                }}
                >
                    <Col 
                    xs={12}
                    
                    >
                        <InputGroupText
                        style={{
                            //position:'absolute',
                            right:'0'
                        }}
                        className='blog-video-button'
                        >
                            <div
                            style={{
                                width:'100%',
                                display:'flex',
                                textAlign:'left',
                                // justifyContent:'flex-start',
                                alignItems:'center'
                            }}
                            >
                                {/* <div
                                style={{
                                    width:'60%',
                                    //textAlign:"left",
                                    display:'flex',
                                    justifyContent:'flex-start'
                                }}
                                > */}
                                    <Image
                                    src="/VideoBtn.png"
                                    width={40}
                                    height={40}
                                    alt="search"
                                    />
                                    {" "}
                                    <span
                                    style={{
                                        fontSize:'10px',
                                        fontWeight:'400',
                                        marginLeft:'6px',
                                        color:'#fff'
                                    }}
                                    >
                                        <strong>Video Title.</strong><br/>
                                        12 Dec,2023
                                    </span>
                                {/*                                     
                                </div>
                                <div
                                style={{
                                    width:'20%',
                                    textAlign:'right'
                                }}
                                > */}
                                    <Button
                                    className='video-btn-time'
                                    >
                                        <b>02 : 12 : 29</b>
                                    </Button>
                                {/* </div> */}
                            </div>
                        </InputGroupText>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
export default BlogVideo;