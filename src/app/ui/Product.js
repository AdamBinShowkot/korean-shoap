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
    //console.log(data)
    const [hoverShow,setHoverShow]=useState(false);
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const variants=data?.variant?.length?data?.variant[0]:{}
    const [sizes,setSizes]=useState([]);
    const [sizeLists,setSizeLists]=useState([]);

    useEffect(()=>{
        if(data?.variant?.length){
            //console.log("V",data.variant)
            let sizess=[];
            data.variant.map((dta)=>{
                if(dta.size){
                    sizess.push(dta.size);
                }
            })
            setSizes(sizess)
            setSizeLists(variants[0]);
        }
    },[data]);
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
            // onMouseEnter={()=>{
            //     setHoverShow(true)
            //     //console.log("Heloooooooooooooo")
            // }}
            // onMouseLeave={()=>{
            //     setHoverShow(false)
            //     //console.log("Helooooooo1111111111")
            // }}
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
                                height={250}
                                width={200}
                                alt={`${data?.img_alt?data?.img_alt:'Alter Text'}`}
                                className='image'
                                />
                            </Col>
                        </Row>
                   </Link>
                   <Row
                   className={`${hoverShow?'details-active':'details-active'}`}
                   style={{
                        bottom:"20px",
                        minWidth:'14.8vw',
                        width:'100%',
                    }}
                   >
                        <Col 
                        xs={12}
                        style={{
                            padding:"0",
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            flexDirection:'column'
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
                            style={{
                                position:'absolute',
                                bottom:'25px',
                                left:'-1.4vw',
                                right:'0',
                                minWidth:'14.8vw'
                            }}
                            onClick={()=>{
                                handleAddToCart(data?data:{})
                            }}
                            >
                                Add To Bag &nbsp;<del> ৳{variants?.price?parseFloat(variants.price).toFixed(0):0}</del> ৳ {variants?.price && variants?.discount_price?parseFloat(variants.price-variants.discount_price).toFixed(0):0}
                                <Image
                                src="/upArrow.png"
                                height={14}
                                width={15}
                                alt="Arrow"
                                style={{
                                    marginLeft:'5px'
                                }}
                                onClick={()=>{
                                    setHoverShow(!hoverShow)
                                }}
                                />
                            </Button>
                        </Col>
                    </Row>
                    <Row
                    onMouseLeave={()=>{
                        setHoverShow(false)
                    }}
                    //className={`${hoverShow?'hover-card-active':'hover-card-deactive'}`}
                    className={`${hoverShow?'hover-card-active':'hover-card-deactive'}`}
                    >
                        <Col 
                        xs={12}
                        style={{
                            padding:"0"
                        }}
                        >
                            <ProductHover lists={sizes}/>
                            <Button 
                            className='product-card-button-hover'
                            onClick={()=>{
                                handleAddToCart(data?data:{})
                            }}
                            >
                               Add To Bag &nbsp;<del>৳{variants?.price?parseFloat(variants.price).toFixed(0):0}</del> ৳ {variants?.price && variants?.discount_price?parseFloat(variants.price-variants.discount_price).toFixed(0):0}
                               <Image
                                src="/downArrow.png"
                                height={14}
                                width={15}
                                alt="Arrow"
                                style={{
                                    marginLeft:'3px'
                                }}
                                onClick={()=>{
                                    setHoverShow(!hoverShow)
                                }}
                                />
                            </Button>
                        </Col>
                   </Row>
                </Card.Body>
            </Card>
        </>
    )
}
export default Product;