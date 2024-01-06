import React from 'react';
import {
    Row,
    Col,
    Button
} from 'react-bootstrap';
import BlogCard from '../partials/BlogCard';
import './index.scss'
import Image from 'next/image';
import CommentsArea from './partials/CommentsArea';
import CommentFormArea from './partials/CommentForm';

const BlogDetails=({params})=>{
    //console.log(params)
    return(
        <>
            <Row
            style={{
                padding:"40px 100px",
            }}
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
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <Button className='tag-button'>
                                Uncategorized
                            </Button>
                        </Col>
                    </Row>
                    <br/>
                    <h1>Ingredient spotlight: what you need <br/>to know about collage</h1>
                    <span>By: Admin&nbsp;&nbsp;|&nbsp;&nbsp;October 25, 2022&nbsp;&nbsp;|&nbsp;&nbsp;4 Comments</span>
                    <Row
                    style={{
                        marginTop:'15px'
                    }}
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
                            src='/blogDetailsMain.png'
                            height={600}
                            width={1200}
                            alt=""
                            />
                        </Col>
                    </Row>
                    <Row
                    style={{
                        // display:'flex',
                        // justifyContent:'flex-start',
                        // alignItems:'center',
                        padding:'20px 100px'
                    }}
                    className='blog-details-inner-cntainer'
                    >
                        <Col 
                        xs={12}
                        style={{
                            padding:'10px 30px',
                            border:'2px solid rgba(92, 51, 169, 1)',
                            borderRadius:'10px',
                            textAlign:'left'
                        }}
                        >
                            <span style={{fontSize:'13px'}}> 
                                <strong style={{fontSize:'30px',color:'rgba(92, 51, 169, 1)'}}>❝&nbsp;&nbsp;</strong>
                                <b style={{fontStyle:'italic'}}>
                                If you’re #skincaregoals include a younger-looking, glowing complexion, 
                                it all starts with collagen. Collagen is one of your body’s major building blocks:
                                it’s a protein and critical to keeping your skin structure strong, elastic, 
                                plump, and smooth. Unfortunately, aging, the sun, 
                                and even diet all decrease the quantity and quality of the collagen your body naturally produces.
                                </b>
                            </span>      
                        </Col>
                    </Row>
                    <Row
                    style={{
                        padding:'20px 100px'
                    }}
                    className='blog-details-inner-cntainer'
                    >
                        <Col 
                        xs={12}
                        style={{
                            textAlign:'left'
                        }}
                        >
                            <h3>Ingredient Intolerance</h3><br/>
                            <span>So, when it comes to anti-aging moisturizers creams, and sheet masks, collagen is a pretty popular ingredient because it promises to restore softer, bouncier, and less-wrinkled skin. 
                                Ingredients like Collagen can help strengthen your skin barrier, which is the key to healthy, glowing skin. The catch? Some formulations boasting collagen on the label include a collagen that can’t penetrate into your skin due to its large molecular size. While it might feel nice on your skin’s surface, 
                                it’s a zero in the anti-aging department.<br/>

                            To get the most out of your collagen-enriched skincare arsenal, look for formulations that specifically include hydrolyzed collagen or collagen peptides – that’s collagen which has been broken down into smaller molecules and have the ability to penetrate deeply into your skin.</span>
                            <br/><br/>
                            <h3>The Ultimate Brightening Solution For Sensitive Skin</h3><br/>
                            <span>
                            With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter more revitalized skin after just 10 days of using the Anti-Aging and Brightening Collection. 
                            The super-charged treatment achieves these impressive results thanks to Aloisia’s proprietary blend of antioxidants and other effective ingredients like:
                            </span><br/><br/>
                            <ul className='blog-details-ul'>
                                <li>
                                    <span><b>Sodium hyaluronate</b>&nbsp;&nbsp;delivers intense hydration deep into the skin, providing an often-needed infusion of moisture to the cells.</span>
                                </li>
                                <li>
                                    <span><b>Niacinamide</b>&nbsp;&nbsp;has brightening, anti-inflammatory, anti-microbial, oil-balancing, moisture-retaining properties.</span>
                                </li>
                                <li>
                                    <span><b>Green tea</b>&nbsp;&nbsp;calms inflammation and reduces the production of sebum, while protecting the skin’s natural barrier.</span>
                                </li>
                            </ul>
                            <Row>
                                <Col 
                                xs={12}
                                style={{
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    padding:'20px 120px',
                                    width: '100%', 
                                    height: '100%', 
                                    position: 'relative'
                                }}
                                >
                                    <Image 
                                    src='/bDetails1.png'
                                    width={0}
                                    height={0}
                                    alt=""
                                    sizes="32vw"
                                    style={{ width: '100%', height: 'auto' }} 
                                    className='blog-details-image'
                                    />
                                    <Image 
                                    src='/bDetails2.png'
                                    width={0}
                                    height={0}
                                    alt=""
                                    sizes="32vw"
                                    style={{ width: '100%', height: 'auto' }} 
                                    className='blog-details-image'
                                    />
                                </Col>
                            </Row>
                            <span style={{fontSize:'13px'}}>
                            Together, the antioxidants infused into this lightweight treatment give you the benefits you would achieve with Vitamin C—and give your skin the same bright, 
                            glowing, even-toned results but without the reactivity. So while there are other alternatives out there that can provide some of these desired benefits, RENEW Concentrated Serum is the ultimate holy grail for those who are sensitive to Vitamin C. 
                            <br/><br/>
                            Now that you know there’s no need to give up on your glow if you’re prone to irritation, make sure you’re doing the most to promote a brightened complexion with our complete Aloisia Beauty Anti-Aging & Brightening System. 
                            The revolutionary skincare set includes our renew Concentrated Serum plus four other proprietary formulas packed with carefully sourced ingredients rooted in K-Beauty research: balance Moisturizing Toner, light hydration Emulsion, revitalize Eye Cream and ultra-rich Moisture Cream.
                            The five products work in tandem to reduce discoloration, even tone and brighten, 
                            all with luxurious-feeling formulas that transform your daily skincare routine from practical to pleasurable.
                            </span>
                        </Col>
                    </Row>
                    <Row
                    className='blog-details-inner-cntainer'
                    >
                        <Col
                        xs={8}
                        style={{
                            display:'flex',
                            justifyContent:'flex-start',
                            alignItems:'center'
                        }}
                        >
                            <Button className='tag-button'>
                                Beauty
                            </Button>
                            <Button className='tag-button'>
                                Make Up
                            </Button>
                            <Button className='tag-button'>
                                Oils & Serum
                            </Button>
                            <Button className='tag-button'>
                                Tools
                            </Button>
                            <Button className='tag-button'>
                                Women
                            </Button>
                            <Button className='tag-button'>
                                Cleanserers & Tonner
                            </Button>
                        </Col>
                        <Col
                        xs={4}
                        style={{
                            display:'flex',
                            justifyContent:'flex-end',
                            alignItems:'center'
                        }}
                        >
                            <span style={{fontSize:'13px'}}>Share : </span>
                            &nbsp;&nbsp;
                            <a href='https://www.facebook.com' target='_blank'>
                                <Image
                                src='/bIcon.svg'
                                height={22}
                                width={22}
                                alt=""
                                />
                            </a>
                            &nbsp;
                            <a href='https://twitter.com/' target='_blank'>
                                <Image
                                src='/bIcon1.svg'
                                height={22}
                                width={22}
                                alt=""
                                />
                            </a>
                            &nbsp;
                            <a href='https://www.facebook.com' target='_blank'>
                                <Image
                                src='/bIcon2.svg'
                                height={22}
                                width={22}
                                alt=""
                                />
                            </a>
                            &nbsp;
                            <a href='https://www.facebook.com' target='_blank'>
                                <Image
                                src='/bIcon3.svg'
                                height={22}
                                width={22}
                                alt=""
                                />
                            </a>
                        </Col>
                    </Row>
                    <Row
                    className='blog-details-inner-cntainer'
                    >
                        <h2 style={{margin:"10px"}}>Related Posts</h2>
                        <Col xs={4}>
                            <BlogCard/>
                        </Col>
                        <Col xs={4}>
                            <BlogCard/>
                        </Col>
                        <Col xs={4}>
                            <BlogCard/>
                        </Col>
                    </Row>
                    <Row
                    className='blog-details-inner-cntainer'
                    >
                        <CommentsArea/>
                    </Row>
                    <Row
                    className='blog-details-inner-cntainer'
                    >
                        <CommentFormArea/>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default BlogDetails;