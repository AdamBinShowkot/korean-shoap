import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import './index.scss';
import Image from 'next/image';

const ValuesCard=({image,title,description})=>{
    return(
        <>
            <Row
            >
                <Col 
                xs={12}
                style={{
                    textAlign:'center'
                }}
                >
                    <Row>
                        <Col 
                        xs={12}
                        style={{
                            justifyContent:'center',
                            display:'flex',
                            justifyItems:'center'
                        }}
                        >
                            <Image
                            src={`/${image?image:'values1.png'}`}
                            height={50}
                            width={50}
                            alt=""
                            style={{
                                textAlign:'center'
                            }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <span><b>{title?title:'Packaging Sustainability'}</b></span><br/>
                            <span>{description?description:'We care for our forests | FSC Certified'}</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default ValuesCard;