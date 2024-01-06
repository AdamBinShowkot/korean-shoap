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
import NormalProduct from './partials/NormalProduct';
import VideoProduct from './partials/VideoProduct';
import ProductSlider from './partials/ProductSlider';
import StarComponent from './partials/StarComponent';
import ProductDetails from './partials/ProductDetails';
import CommentMain from './partials/CommentMain';
import FooterProductSlider from './partials/ProductsSlider';
import './index.scss';

export default async function Page({params}){
    //console.log("PP",params)
    return(
        <>
            <Row
            style={{
                padding:"40px 100px"
            }}
            >
                <Col 
                xs={6}
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
                                <Row
                                // style={{
                                //     width: '500px',
                                //     height:'500px',
                                //     backgroundImage:`url('/detailsImage.png')`,
                                //     backgroundRepeat: 'no-repeat',
                                //     backgroundSize: '100% 100%',
                                // }}
                                >
                                    <Col 
                                    xs={12}
                                    style={{
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}
                                    >
                                        <Image
                                        src='/detailsImage.png'
                                        height={500}
                                        width={500}
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
                            <ProductSlider/>
                        </Col>
                    </Row>
                </Col>
                <Col 
                xs={6}
                style={{
                    padding:"0px 0px 20px 20px",
                }}
                >
                    <Row>
                        <Col xs={12}>
                            <h2 style={{marginBottom:'5px'}}>
                                Neogen Dermalogy Black Energy Cream 80ml
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
                            <StarComponent/> <span>&nbsp;&nbsp;<b>3</b> Customer review &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Sold: <b>32</b></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col 
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'flex-start',
                            alignItems:'center'
                        }}
                        >
                            <span>Size: <b>&nbsp;80ml</b>&nbsp;&nbsp;&nbsp; Origin: <b>&nbsp;American</b>&nbsp;&nbsp;&nbsp; SKU: <b>&nbsp;11107858</b></span>
                        </Col>
                    </Row><br/>
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
                            src='/greenCheck.png'
                            height={20}
                            width={20}
                            alt=""
                            />
                            <span><b style={{color:'green'}}>&nbsp;&nbsp; In Stock</b></span>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col 
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'flex-start',
                            alignItems:'center'
                        }}
                        >
                            <span style={{fontSize:'15px',fontWeight:"700"}}><b>৳119.99</b>&nbsp;
                            <b><del>৳119.99</del></b>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
                            <Image
                            src='/qurier.png'
                            width={20}
                            height={20}
                            alt=""
                            />
                            &nbsp;&nbsp;
                            <span>Free delivery from ৳45</span>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col 
                        xs={12}
                        >
                            <InputGroup>
                                <InputGroupText
                                className='normal-input global-search'
                                >
                                    <b>-</b>
                                </InputGroupText>
                                <InputGroupText
                                className='normal-input global-search'
                                >
                                    <b>5</b>
                                </InputGroupText>
                                <InputGroupText
                                className='normal-input global-search'
                                >
                                    <b>+</b>
                                </InputGroupText>
                            </InputGroup>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col 
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'flex-start',
                            alignItems:'center'
                        }}
                        >
                            <Button
                            className='add-to-bag-button'
                            >
                                Add To Bag
                            </Button>
                            <Button
                            className='buy-now-button'
                            >
                                Buy Now
                            </Button>
                        </Col>
                    </Row><br/>
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
                            <p style={{color:'#000'}}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </p>
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
                            rate={4}
                            />
                            &nbsp; &nbsp;
                            <span style={{fontSize:'11px'}}>12 review</span>
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
                    <FooterProductSlider/>
                </Col>
            </Row>
        </>
    )
}
