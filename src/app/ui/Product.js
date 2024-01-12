'use client'
import React,{
    useState,
    useEffect,
    useContext
} from 'react';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import {
    Card,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductHover from './partials/ProuctHover';
import './index.scss';


const Product=({windowWidth})=>{
    const [hoverShow,setHoverShow]=useState(false);
    const {cartLists,setCartLists}=useContext(AddToCartContext);

    const handleAddToCart=()=>{
        let lists =[...cartLists];
        const highestId=cartLists?.length?(cartLists.length+1):1
        const newObj={
            id:highestId,
            name:"Demo Name"
        }
        setCartLists([...lists,newObj])
    }

    
    return(
        <>
            <Card 
            className='home-product-container'
            onMouseEnter={()=>{
                setHoverShow(true)
            }}
            onMouseLeave={()=>{
                setHoverShow(false)
            }}
            >
                {/* <Card.Img variant="top" src="/logo.png" /> */}
                <Card.Body
                className='product-card-body'
                >
                    <Row
                    className='card-container'
                    >
                        <Col 
                        xs={12}
                        style={{
                            padding:'5px',
                        }}
                        >
                            <Card.Title
                            style={{
                                textAlign:'left',
                                padding:'0'
                            }}
                            >
                                <Button 
                                className='card-button'
                                >
                                    Shop Now
                                </Button>
                            </Card.Title>
                            <Image
                            src='/products2.jpg'
                            height={300}
                            width={300}
                            alt=""
                            className='image'
                            />
                        </Col>
                    </Row>
                   <Row
                   className={`${hoverShow?'details-deactive':'details-active'}`}
                   >
                        <Col 
                        xs={12}
                        style={{
                            padding:"0"
                        }}
                        >
                            <Card.Text
                        style={{
                            
                        }}
                        >
                            <span>
                                Neogen Dermalogy Black 
                                Energy Cream 80ml
                            </span>
                        </Card.Text>
                        <Button 
                        className='card-button product-card-button'
                        onClick={()=>{
                           // handleAddToCart()
                        }}
                        >
                            Add To Bag ৳ 2100 ৳ 1900
                        </Button>
                    </Col>
                   </Row>
                   <Row
                   className={`${hoverShow?'hover-card-active':'hover-card-deactive'}`}
                   >
                        <Col 
                        xs={12}
                        style={{
                            padding:"0"
                        }}
                        >
                            <ProductHover/>
                            <Button 
                            className='product-card-button-hover'
                            onClick={()=>{
                                handleAddToCart()
                            }}
                            // style={{
                            //     position:'absolute',
                            //     bottom:'5px',
                            //     left:0,
                            //     right:0
                            // }}
                            >
                                Add To Bag ৳ 2100 ৳ 1900
                            </Button>
                        </Col>
                   </Row>
                </Card.Body>
            </Card>
        </>
    )
}
export default Product;