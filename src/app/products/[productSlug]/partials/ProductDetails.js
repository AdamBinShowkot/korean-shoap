'use client';
import React from 'react';
import {
    Row,
    Col,
    Accordion
} from 'react-bootstrap';
import Image from 'next/image';
import './index.scss';
import parse from 'html-react-parser';

const ProductDetails=({data})=>{
    //console.log(data)
    return(
        <>
            <Accordion defaultActiveKey={['0','1','2']} alwaysOpen className="product-details-accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{margin:'0',padding:"0",fontSize:'20px'}}>
                        <Image
                        src='/details1.png'
                        height={20}
                        width={20}
                        alt=''
                        />
                        &nbsp;&nbsp;
                        Description
                    </Accordion.Header>
                    <Accordion.Body>
                        <span>
                            {data?.long_description?parse(data.long_description):""}
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <Image
                        src='/details2.png'
                        height={20}
                        width={20}
                        alt=""
                        />
                        &nbsp;&nbsp;
                        Highlighted Ingredients
                    </Accordion.Header>
                    <Accordion.Body>
                        <span>
                            {data?.long_description?parse(data.long_description):""}
                        </span>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <Image
                        src='/details3.png'
                        height={20}
                        width={20}
                        alt=""
                        />
                        &nbsp;&nbsp;
                        How To Use
                    </Accordion.Header>
                    <Accordion.Body>
                        <span>
                            {data?.how_to_use?parse(data.how_to_use):""}
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}
export default ProductDetails;