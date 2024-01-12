'use client'
import React,{
    useEffect,
    useContext,
    useState
} from 'react';
import {
    Card,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import Image from 'next/image';
import { 
    baseImageServer 
} from '@/utils/config';
import { list } from 'postcss';

const FilterProduct=({details})=>{
    const [hoverShow,setHoverShow]=useState(false);
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const variants=details?.variant?.length?details?.variant[0]:{}

    const handleAddToCart=(data)=>{
        //console.log(data);
        let lists =[...cartLists];
        // const highestId=cartLists?.length?(cartLists.length+1):1
        // const newObj={
        //     id:highestId,
        //     name:"Demo Name"
        // }
        // setCartLists([...lists,newObj])
        const currentId=data.id;
        if(lists?.length){
            const index = lists.map(e => e.id).indexOf(currentId);
            if(index>=0){
                lists[index].quantity=lists[index].quantity+1;
                setCartLists([...lists])
            }else{
                const newObj={
                    id:currentId,
                    name:data?.name,
                    price:parseFloat(variants.price-variants.discount_price).toFixed(0),
                    quantity:1
                }
                setCartLists([...lists,newObj])
            }
        }else{
            const newObj={
                id:currentId,
                name:data?.name,
                price:parseFloat(variants.price-variants.discount_price).toFixed(0),
                quantity:1
            }
            setCartLists([...lists,newObj])
        }
       // console.log(currentId)
    }

    return(
        <>
            <Card 
            style={{ 
                width: '85%',
                minHeight:'26rem',
                border:'none',
                padding:'0'
            }}
            // className='filter-product-card'
            >
                {/* <Card.Img variant="top" src="/logo.png" /> */}
                <Card.Body
                style={{
                    textAlign:'center',
                    position:'relative',
                    padding:'0'
                }}
                className=''
                >
                    <Row
                    style={{
                        border:'1px solid rgba(232, 99, 154, 1)',
                        borderRadius:'5px',
                        marginBottom:'10px'
                    }}
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
                            src={`${baseImageServer}/${details.image}`}
                            height={300}
                            width={259}
                            className='isotope-filter-image'
                            alt="Image"
                            />
                        </Col>
                    </Row>
                    <Card.Text
                    style={{
                        
                    }}
                    >
                        <span>
                           {details?.name?details.name:` Neogen Dermalogy Black 
                            Energy Cream 80ml`}
                        </span>
                    </Card.Text>
                    <Button 
                    className='card-button product-card-button'
                    style={{
                        position:'absolute',
                        bottom:'5px',
                        left:0,
                        right:0
                    }}
                    onClick={()=>{
                        handleAddToCart(details);
                    }}
                    >
                        Add To Bag ৳ {variants?.price?parseFloat(variants.price).toFixed(0):0} ৳ {variants?.price && variants?.discount_price?parseFloat(variants.price-variants.discount_price).toFixed(0):0}
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default FilterProduct;