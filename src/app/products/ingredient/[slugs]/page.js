import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import TopBanner from '../../TopBanner';
import ProductsMain from './partials/ProductsMain';

export const metadata = {
    title: 'The Korean Shoap BD - Ingredients',
    // description: 'Generated by create next app',
}

const ProductsBrandsSlugPage=({params})=>{
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
                    <ProductsMain
                    params={params}
                    />
                </Col>
            </Row>
        </>
    )
}
export default ProductsBrandsSlugPage;