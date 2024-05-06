import React from 'react';
import {
    Card, 
    Col, 
    Row
} from 'react-bootstrap';
import './index.scss';
import Image from 'next/image';

const VideoProduct=({image})=>{
    return(
        <>
           <Row
           style={{
            //border:'1px solid grey',
            //width:"8rem"
            padding:"0px"
           }}
           >
                <Col 
                xs={12}
                style={{
                    padding:"0"
                }}
                >
                    <Row>
                        <Col
                        xs={12}
                        >
                            <Card
                            style={{
                                width: '100px',
                                height:'100px',
                                backgroundImage:`url('/detailsSlider.png')`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% 100%',
                                position:'relative'
                            }}
                            >
                                <Row
                                style={{
                                    padding:'0px'
                                }}
                                >
                                    <Col 
                                    xs={12}
                                    style={{
                                        display:'flex',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        position:'absolute',
                                        padding:'0px',
                                        bottom:"15px",
                                        paddingLeft:'20px'
                                    }}
                                    >
                                        <Image
                                        src='/play.png'
                                        height={55}
                                        width={55}
                                        alt="Image"
                                        />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col 
                        xs={12}
                        style={{
                            textAlign:'left',
                            padding:'5px 15px'
                        }}
                        >
                            <span style={{fontSize:'11px'}}>
                                Neogen Dermalogy.
                            </span>
                        </Col>
                    </Row>
                </Col>
           </Row>
        </>
    )
}
export default VideoProduct;