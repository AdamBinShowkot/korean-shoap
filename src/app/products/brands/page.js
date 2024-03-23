import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import TopBanner from '../TopBanner';
import ProductsMain from './partials/ProductsMain';

export const metadata = {
    title: 'The Korean Shop BD - Brand',
    // description: 'Generated by create next app',
}

const ProductsBrandsPage=()=>{
    return(
        <>
            <Row>
                <Col 
                xs={12}
                
                >
                    <TopBanner/>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <ProductsMain/>
                </Col>
            </Row>
        </>
    )
}
export default ProductsBrandsPage;