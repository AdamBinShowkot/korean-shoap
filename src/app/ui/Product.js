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
import { 
    baseImageServer 
} from '@/utils/config';
import Link from 'next/link';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductHover from './partials/ProuctHover';
import './index.scss';


const Product=({data})=>{
    const [hoverShow,setHoverShow]=useState(false);
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const variants=data?.variant?.length?data?.variant[0]:{}

    const handleAddToCart=(infos)=>{
        if(infos?.id){
            let lists =[...cartLists];
            const currentId=infos.id;
            if(lists?.length){
                const index = lists.map(e => e.id).indexOf(currentId);
                if(index>=0){
                    lists[index].quantity=lists[index].quantity+1;
                    setCartLists([...lists])
                }else{
                    const newObj={
                        id:currentId,
                        name:infos?.name,
                        price:parseFloat(variants.price-variants.discount_price).toFixed(0),
                        quantity:1
                    }
                    setCartLists([...lists,newObj])
                }
            }else{
                const newObj={
                    id:currentId,
                    name:infos?.name,
                    price:parseFloat(variants.price-variants.discount_price).toFixed(0),
                    quantity:1
                }
                setCartLists([...lists,newObj])
            }
        }
    }

    
    return(
        <>
            <Card 
            className='home-product-container'
            onMouseEnter={()=>{
                setHoverShow(true)
                //console.log("Heloooooooooooooo")
            }}
            onMouseLeave={()=>{
                setHoverShow(false)
                //console.log("Helooooooo1111111111")
            }}
            >
                {/* <Card.Img variant="top" src="/logo.png" /> */}
                <Card.Body
                className='product-card-body'
                style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'
                }}
                >
                    <Link href={`/products/${data?.slug?data.slug:1}`}>
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
                                src={`${data?.image?`${baseImageServer}/${data.image}`:'/products2.jpg'}`}
                                height={300}
                                width={300}
                                alt=""
                                className='image'
                                />
                            </Col>
                        </Row>
                   </Link>
                   <Row
                   className={`${hoverShow?'details-active':'details-active'}`}
                   style={{
                        position:'absolute',
                        bottom:"20px",
                        width:'100%',
                    }}
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
                                    {data?.name?data.name:`Neogen Dermalogy Black 
                                    Energy Cream 80ml`}
                                </span>
                            </Card.Text>
                            <Button 
                            className='card-button product-card-button'
                            onClick={()=>{
                            // handleAddToCart()
                            }}
                            >
                                Add To Bag ৳ {variants?.price?parseFloat(variants.price).toFixed(0):0} ৳ {variants?.price && variants?.discount_price?parseFloat(variants.price-variants.discount_price).toFixed(0):0}
                            </Button>
                        </Col>
                    </Row>
                    <Row
                    //className={`${hoverShow?'hover-card-active':'hover-card-deactive'}`}
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
                                handleAddToCart(data?data:{})
                            }}
                            // style={{
                            //     position:'absolute',
                            //     bottom:'5px',
                            //     left:0,
                            //     right:0
                            // }}
                            >
                               Add To Bag ৳ {variants?.price?parseFloat(variants.price).toFixed(0):0} ৳ {variants?.price && variants?.discount_price?parseFloat(variants.price-variants.discount_price).toFixed(0):0}
                            </Button>
                        </Col>
                   </Row>
                </Card.Body>
            </Card>
        </>
    )
}
export default Product;