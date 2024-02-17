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
import NormalProduct from './partials/NormalProduct';
import VideoProduct from './partials/VideoProduct';
import ProductSlider from './partials/ProductSlider';
import StarComponent from './partials/StarComponent';
import ProductDetails from './partials/ProductDetails';
import CommentMain from './partials/CommentMain';
import FooterProductSlider from './partials/ProductsSlider';
import './index.scss';
import AddToBug from './partials/AddToBug';
import StockQuantitySection from './partials/StockQuantitySection';

async function getProductsDetails({productSlug}){
    ConfigureAxios();
    let response={};
    if(productSlug!=1){
        console.log("Heloooo")
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
            style={{
                padding:"40px 100px"
            }}
            >
                <Col 
                xs={4}
                >
                    <Row>
                        <Col xs={12}>
                            <Card
                            style={{
                                borderRadius:'10px'
                            }}
                            >
                                <Row>
                                    <Col 
                                    xs={12}
                                    style={{
                                        padding:'10px 30px'
                                    }}
                                    >
                                        <Button
                                        className='save-off-button'
                                        >
                                            Save 20%
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col 
                                    xs={12}
                                    style={{
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}
                                    >
                                        <Image
                                        src={`${details?.image?`${baseImageServer}/${details.image}`:'/detailsImage.png'}`}
                                        height={320}
                                        width={320}
                                        alt="Image"
                                        />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row
                    style={{
                        padding:'40px 0px'
                    }}
                    >
                        <Col xs={12}>
                            {/* <NormalProduct/> */}
                            {/* <ProductSlider/> */}
                        </Col>
                    </Row>
                </Col>
                <Col 
                xs={8}
                style={{
                    padding:"0px 0px 20px 20px",
                }}
                >
                    <Row>
                        <Col xs={12}>
                            <h2 style={{marginBottom:'5px'}}>
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
                        >
                            <StarComponent rate={details?.avg_rating?details.avg_rating:0}/> 
                            <span>&nbsp;&nbsp;<b>3</b> Customer review &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Sold: <b>32</b>
                            &nbsp;&nbsp;Size: <b>&nbsp;80ml</b>&nbsp;&nbsp;&nbsp;
                            SKU: <b>&nbsp;{details?.sku?details.sku:'111'}</b>
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <p style={{color:'#000'}}>
                            {details?.short_description?details.short_description:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`}
                            </p>
                        </Col>
                    </Row><br/>
                    {/* <Row>
                        <Col 
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'flex-start',
                            alignItems:'center'
                        }}
                        >
                            <span> </span>
                        </Col>
                    </Row><br/> */}
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
                            <Image
                            src="/love.png"
                            height={20}
                            width={20}
                            alt="Love"
                      
                            />
                            &nbsp;&nbsp;
                            <span><b>Add to Wishlist</b></span>
                            &nbsp;&nbsp;
                            <Image
                            src="/share.png"
                            height={20}
                            width={20}
                            alt="Love"
                            />
                            &nbsp;&nbsp;
                            <span><b>Share</b></span>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col xs={12}>
                            <ProductDetails/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr className='product-details-hr'/>
            <Row
            style={{
                padding:'0px 100px 20px'
            }}
            >
                <Col 
                xs={6}
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
                xs={6}
                >
                    <InputGroup
                    style={{
                        display:'flex',
                        justifyContent:'flex-end'
                    }}
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
                    style={{
                        marginTop:'10px',
                        display:'flex',
                        justifyContent:'flex-end'
                    }}
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
            </Row>
            <Row
            style={{
                padding:'20px 100px'
            }}
            >
                <Col 
                xs={12}
                >
                    <CommentMain/>
                </Col>
            </Row>
            <Row
            style={{
                padding:'20px 100px 30px'
            }}
            >
                <Col xs={12}>
                    <FooterProductSlider
                    product_lists={details?.related_products?.length?details.related_products:[]}
                    />
                </Col>
            </Row>
        </>
    )
}
