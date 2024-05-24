import Image from 'next/image';
import React from 'react';
import {
    Row,
    Col,
    Card,
    Button,
    InputGroup,
    FormControl,
    InputGroupText
} from 'react-bootstrap';
import axios from 'axios';
import ConfigureAxios from '@/utils/axiosConfig';
import { 
    baseImageServer 
} from '@/utils/config';
import parse from 'html-react-parser';
import NormalProduct from './partials/NormalProduct';
import VideoProduct from './partials/VideoProduct';
import ProductSlider from './partials/ProductSlider';
import DetailsLeftSection from './partials/DetailsLeftSection';
import StarComponent from './partials/StarComponent';
import ProductDetails from './partials/ProductDetails';
import CommentMain from './partials/CommentMain';
import FooterProductSlider from './partials/ProductsSlider';
import ProductSliderIntermediate from './partials/ProductSliderIntermedieate';
import './index.scss';
import AddToBug from './partials/AddToBug';
import AddToWish from './partials/AddToWish';
import StockQuantitySection from './partials/StockQuantitySection';
import ShareComponent from './partials/ShareComponent';
import RelatedProducts from './partials/RelatedProducts';
import ProductDetailsTabs from './partials/ProductDetailsTabs';

async function getProductsDetails({productSlug}){
    ConfigureAxios();
    let response={};
    if(productSlug!=1){
        //console.log("Heloooo")
        response=axios.get(`/public/product-details/${productSlug}`).then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data;
            }
        }).catch((error)=>{
            console.log("Get Product Details Error")
          //console.log(error)
          return [];
        });
    }
  
    return response;
}
export default async function Page({params}){
    // console.log("Params",params)
    const details=await getProductsDetails(params)
    //console.log("Details:",details);
    return(
        <>
            <Row
            className='products-details-container'
            >
                <Col 
                xs={12}
                lg={8}
                >
                    <Card
                    style={{
                        padding:"10px"
                    }}
                    className='new-products-details-card'
                    >
                        <Row>
                            <Col
                            xs={12}
                            lg={6}
                            >
                                <DetailsLeftSection
                                details={details}
                                /> 
                            </Col>
                            <Col
                            xs={12}
                            lg={6}
                            >
                                <Col 
                                xs={12}
                                lg={12}
                                className='product-details-left'
                                >
                                    <Row>
                                        <Col xs={12}>
                                            <h2 
                                            className='products-title'
                                            >
                                                {
                                                    details?.name?details.name:`Neogen Dermalogy Black Energy Cream 80ml`
                                                }
                                            </h2>
                                            
                                            <span
                                            className='products-details-short-description'
                                            >
                                                {details?.short_description?parse(details?.short_description):""}
                                            </span>
                                          
                                            <span
                                            className='product-title-info'
                                            >
                                                <p>
                                                    <span>
                                                        <b>
                                                            Products
                                                        </b>&nbsp;&nbsp;&nbsp;: 
                                                        <strong>
                                                            &nbsp;&nbsp;&nbsp;{details?.variant[0]?.sku?details.variant[0].sku:""}
                                                        </strong>
                                                    </span> 
                                                </p>
                                                <p>
                                                    <span>
                                                        <b>
                                                            Brand
                                                        </b>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        :
                                                        <strong>
                                                            &nbsp;&nbsp;&nbsp;{details?.brand?.name?details.brand.name:""}
                                                        </strong> 
                                                    </span> 
                                                </p>
                                                <p>
                                                    <span>
                                                        <b>
                                                            Size
                                                        </b>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        :
                                                        <strong>
                                                            &nbsp;&nbsp;&nbsp;{details?.variant[0]?.size?details.variant[0].size:""}
                                                        </strong> 
                                                    </span> 
                                                </p>
                                                <p>
                                                    <span>
                                                        <b>
                                                            Category
                                                        </b>
                                                        &nbsp;&nbsp;
                                                        :
                                                        <strong>
                                                            &nbsp;&nbsp;&nbsp;{details?.category?.name?details.category.name:""}
                                                        </strong>  
                                                    </span> 
                                                </p>
                                                <p>
                                                    <span>
                                                        <b>
                                                            Status
                                                        </b>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        :
                                                        <strong>
                                                            &nbsp;&nbsp;&nbsp;{details?.variant[0]?.stock>0?"In Stock":"Out Stock"}
                                                        </strong>
                                                    </span> 
                                                </p>
                                            </span>
                                        </Col>
                                    </Row>
                                    <StockQuantitySection data={details}/>
                                    <br/>
                                    <AddToBug data={details}/>
                                    <br/>
                                    <Row>
                                        <Col 
                                        xs={12}
                                        style={{
                                            display:'flex',
                                            justifyContent:'flex-start',
                                            alignItems:'center'
                                        }}
                                        >
                                            <AddToWish
                                            data={details}
                                            />
                                            &nbsp;&nbsp;
                                            <ShareComponent data={details}/>
                                        </Col>
                                    </Row><br/>
                                    {/* <Row>
                                        <Col 
                                        xs={12}
                                        className="products-details-short-description"
                                        >
                                            
                                        
                                        </Col>
                                    </Row><br/> */}
                                    <Row>
                                        <Col xs={12}>
                                            {/* <ProductDetails data={details}/> */}
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                        </Row>
                   </Card>
                </Col>
                <Col 
                xs={12}
                lg={4}
                className='product-details-left'
                >
                    <Row>
                        <Col>
                            <h2>Related Products</h2>
                        </Col>
                    </Row>
                    <div
                    style={{
                        margin:"5px 0px 10px 0px",
                        backgroundColor:'#6737a8',
                        color:'#6737a8',
                        height:'3px'
                    }}
                    />
                    <Card
                    style={{
                        padding:"10px"
                    }}
                    className='new-products-details-card'
                    >
                        <RelatedProducts
                        //brand={details.brand?.name?details.brand:{}}
                        related_products={details?.related_products?.length?details.related_products:[]}
                        />
                    </Card>
                </Col>
            </Row>
            <Row
            className='products-details-container tabs'
            >
                <Col>
                    <Card
                    style={{
                        padding:"10px"
                    }}
                    className='new-products-details-card'
                    >
                        <ProductDetailsTabs data={details}/>
                    </Card>
                </Col>
            </Row>
            <ProductSliderIntermediate
            brand={details.brand?.name?details.brand:{}}
            />
        </>
    )
}
