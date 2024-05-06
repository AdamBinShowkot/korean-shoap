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
import './index.scss';
import AddToBug from './partials/AddToBug';
import AddToWish from './partials/AddToWish';
import StockQuantitySection from './partials/StockQuantitySection';
import ShareComponent from './partials/ShareComponent';

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
export default async function Page2({params}){
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
                lg={4}
                >
                   <DetailsLeftSection
                   details={details}
                   /> 
                </Col>
                <Col 
                xs={12}
                lg={8}
                className='product-details-left'
                >
                    <Row>
                        <Col xs={12}>
                            <h2 
                            className='products-title'
                            >
                                {details?.name?details.name:`Neogen Dermalogy Black Energy Cream 80ml`}
                            </h2>
                        </Col>
                    </Row>
                    <Row
                    style={{
                        marginBottom:'5px'
                    }}
                    >
                        <Col 
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'flex-start',
                            alignItems:'center'
                        }}
                        className=''
                        >
                            
                            <span
                            className="details-top-info"
                            >
                                <span className="left">
                                    <StarComponent rate={details?.avg_rating && details?.total_review?details.avg_rating:0}/> 
                                    &nbsp;&nbsp;&nbsp;<b>{details?.total_review?details.total_review:"0"}</b> &nbsp;&nbsp; Customer review &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp; 
                                    {/* &nbsp; Sold: <b>32</b> */}
                                    &nbsp;&nbsp;
                                </span>
                                <span className="right">
                                    Size: <b>&nbsp;{details?.variant[0]?.size?details?.variant[0]?.size:""}</b>&nbsp;&nbsp;&nbsp;
                                    SKU: <b>&nbsp;{details?.sku?details.sku:'111'}</b>
                                </span>
                            </span>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col 
                        xs={12}
                        className="products-details-short-description"
                        >
                            {details?.short_description?parse(details.short_description):""}
                         
                        </Col>
                    </Row><br/>
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
                    <Row>
                        <Col xs={12}>
                            <ProductDetails data={details}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr className='product-details-hr'/>
            {/* <Row
            className="details-comments-area"
            >
                <Col 
                xs={12}
                xl={6}
                >
                    <Row
                    // style={{
                    //     display:'flex',
                    //     justifyContent:'flex-start',
                    //     alignItems:'center'
                    // }}
                    >
                        <Col 
                        xs={12}
                        xl={12}
                        style={{
                            display:'flex',
                            justifyContent:'flex-start',
                            alignItems:'center'
                        }}
                        >
                            <StarComponent
                            size={15}
                            rate={0}
                            />
                            &nbsp; &nbsp;
                            <span style={{fontSize:'11px'}}>0 review</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col 
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'flex-start',
                            alignItems:'center',
                            paddingTop:'8px'
                        }}
                        >
                            <span style={{fontSize:'13px',color:'#8566bf'}}>0 Question\0 Answers</span>                            
                        </Col>
                    </Row>
                </Col>
                <Col 
                xs={12}
                xl={6}
                className='comments-button-section'
                >
                    <InputGroup
                    className="button-container"
                    >
                        <InputGroupText
                        className='product-details-comment-button'
                        >
                            <div
                            style={{
                                width:'20%',
                                textAlign:'right'
                            }}
                            >
                                <Image
                                src="/details6.png"
                                width={18}
                                height={18}
                                alt="search"
                                />
                            </div>
                            <div
                            style={{
                                width:'100%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                                <div
                                style={{
                                    width:'80%',
                                    
                                }}
                                >
                                    <span
                                    style={{
                                        marginRight:'10px'
                                    }}
                                    >
                                        Write A Review
                                    </span>
                                </div>
                                
                            </div>
                        </InputGroupText>
                    </InputGroup>
                    <InputGroup
                    className="button-container"
                    >
                        <InputGroupText
                        className='product-details-comment-button'
                        >
                            <div
                            style={{
                                width:'20%',
                                textAlign:'right'
                            }}
                            >
                                <Image
                                src="/details5.png"
                                width={18}
                                height={18}
                                alt="search"
                                />
                            </div>
                            <div
                            style={{
                                width:'100%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                                <div
                                style={{
                                    width:'80%',
                                    
                                }}
                                >
                                    <span
                                    style={{
                                        marginRight:'10px'
                                    }}
                                    >
                                        Ask A Question
                                    </span>
                                </div>
                            </div>
                        </InputGroupText>
                    </InputGroup>
                </Col>
            </Row> */}
            {/* <Row
            className="products-comments-area"
            >
                <Col 
                xs={12}
                >
                    <CommentMain/>
                </Col>
            </Row> */}
          {
            details?.related_products?.length?(
                <div
                className="products-footer-slider-area"
                >
                    <Col xs={12}>
                        <FooterProductSlider
                        product_lists={details?.related_products?.length?details.related_products:[]}
                        len={details?.related_products?.length?details?.related_products.length:0}
                        />
                    </Col>
                </div>
            ):""
          }
        </>
    )
}
