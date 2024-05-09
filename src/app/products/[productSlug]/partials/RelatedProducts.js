'use client'
import React,{
    useState,
    useEffect
} from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import DetailsSingleSliderProduct from '@/app/ui/DetailsSingleSliderProduct';


const RelatedProducts=()=>{
    return(
        <>
            <Row>
                <Col
                style={{
                    display:'flex',
                    justifyContent:'center',
                    alignContent:'center',
                    flexDirection:'column',
                    height:'75vh',
                    overflow:'auto'
                }}
                >
                    <DetailsSingleSliderProduct data={{}} />
                    <DetailsSingleSliderProduct data={{}} />
                    <DetailsSingleSliderProduct data={{}} />
                    <DetailsSingleSliderProduct data={{}} />
                    <DetailsSingleSliderProduct data={{}} />
                    <DetailsSingleSliderProduct data={{}} />
                    <DetailsSingleSliderProduct data={{}} />
                    <DetailsSingleSliderProduct data={{}} />
                    <DetailsSingleSliderProduct data={{}} />
                </Col>
            </Row>
        </>
    )
}
export default RelatedProducts;
