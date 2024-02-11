import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import TopBanner from './TopBanner';
import ProductsMain from './partials/ProductsMain';

export const metadata = {
    title: 'The Korean Shoap BD - Products',
    // description: 'Generated by create next app',
}

const ProductsPage=()=>{
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
export default ProductsPage;