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
import './indexTwo.scss';
import Image from 'next/image';
import Link from 'next/link';
import { 
    baseImageServer 
} from '@/utils/config';
import ConfigureAxios from '@/utils/axiosConfig';
import axios from 'axios';

const FilterProductTwo=({details})=>{
    const [hoverShow,setHoverShow]=useState(false);
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const variants=details?.variant?.length?details?.variant[0]:{}

    // useEffect(()=>{
    //     if(details?.variant?.length){
    //         //console.log("V",data.variant)
    //         let sizess=[];
    //         data.variant.map((dta)=>{
    //             if(dta.size){
    //                 sizess.push(dta.size);
    //             }
    //         })
    //         setSizes(sizess)
    //         setSizeLists(variants[0]);
    //     }
    // },[details]);
    const handleAddToCart=(infos)=>{
        console.log(infos)
        const token=localStorage.getItem("token");
        if(token && infos?.id){
            
            ConfigureAxios(token);
        
            if(infos?.id){
               
                let lists =[...cartLists];
                const currentId=infos.id;
                if(lists?.length){
                    
                    const index = lists.map(e => parseInt(e.product_id)).indexOf(currentId);
                    //console.log("Index : ",index,"FF",currentId)
                    //console.log(lists)
                    if(index>=0){
                        //console.log('One')
                        //console.log("Im Calleddd")
                        const currentProducts=lists[index];
                        //console.log(currentProducts)
                        currentProducts.quantity=parseInt(currentProducts.quantity)+1;
                        const product_id=currentProducts.id;
                        const obj={
                            quantity:currentProducts.quantity,
                            _method:'PUT'
                        }
                        axios.post(`/cart/${product_id}`,JSON.stringify(obj))
                        .then((response)=>{
                            if(response.status==201){
                                //console.log(response)
                                getCartLists(token);
                            }
                        }).catch((error)=>{
                            console.log("Err",error)
                        })
                        //setCartLists([...lists])
                    }else{
                       // console.log('Two')
                        const newObj2={
                            quantity:1,
                            product_id:infos?.id,
                            //image:infos.image,
                           // name:infos.name,
                            product_variant_id:variants.id?variants.id:0
                        }
                        //console.log(newObj2)
                        axios.post(`/cart`,JSON.stringify(newObj2))
                        .then((response)=>{
                            //console.log("Cart response when logged in: ",response);
                            //setCartLists([...lists,newObj])
                            getCartLists(token);
                        }).catch((error)=>{
                            console.log("CCART",error)
                        })
                    }
                }else{
                    //console.log("Caleddd")
                    const newObj={
                        id:currentId,
                        product_id:currentId,
                        image:infos.image,
                        name:infos.name,
                        price:parseFloat(variants.price-variants.discount_price).toFixed(0),
                        quantity:1
                    }
                    const newObj2={
                        quantity:1,
                        product_id:infos?.id,
                        //image:infos.image,
                        //name:infos.name,
                        product_variant_id:variants.id?variants.id:0
                    }
                    //console.log("NN",newObj)
                    setCartLists([...lists,newObj])
                    axios.post(`/cart`,JSON.stringify(newObj2))
                    .then((response)=>{
                        console.log("Cart response when logged in: ",response);
                        //setCartLists([...lists,newObj])
                        getCartLists(token);
                    }).catch((error)=>{
                        console.log("CCART",error)
                    })
                }
            }
        }else{
            if(infos?.id){
                //console.log("In",infos)
                let lists2 =[...cartLists];
                let lists=localStorage.getItem("ProductCarts");
                lists=JSON.parse(lists);
                //console.log("Lists: ",lists)
                const currentId=infos.id;
                if(lists?.length){
                    const index = lists.map(e => e.id).indexOf(currentId);
                    if(index>=0){
                        lists[index].quantity+=1;
                        localStorage.setItem("ProductCarts",JSON.stringify(lists));
                        setCartLists([...lists])
                    }else{
                        const newObj={
                            id:currentId,
                            name:infos?.name,
                            image:infos.image,
                            price:variants.price,
                            discount_price:variants.discount_price,
                            quantity:1,
                            product_id:currentId,
                            product_sku_id:variants.id?variants.id:0
                        }
                        lists=[...lists,newObj]
                        localStorage.setItem("ProductCarts",JSON.stringify(lists));
                        setCartLists([...lists2,newObj])
                    }
                }else{
                    //console.log('Calleddd')
                    let newlists=[];
                    const newObj={
                        id:currentId,
                        name:infos?.name,
                        image:infos?.image,
                        price:variants.price,
                        discount_price:variants.discount_price,
                        quantity:1,
                        product_id:currentId,
                        product_sku_id:variants.id?variants.id:0
                    }
                    //newlists=[...newlists,newObj]
                    setCartLists([newObj])
                    localStorage.setItem("ProductCarts",JSON.stringify([newObj]));

                }
            }
        }
    }

    const getCartLists=async(token="")=>{
        if(token){
            ConfigureAxios(token);
            axios.get(`/cart`)
            .then((response)=>{
                //console.log("Cart Lists : ",response.data)
                if(response.status===200){
                    setCartLists(response.data)
                }
            }).catch((error)=>{

            })
        }

    }
    return(
        <>    
            <Card 
            className='new-filter-products-container'
            style={{
                border:'1px solid #e7e7e7'
            }}
            >
                <Card.Body
                className='product-card-body'
                style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    
                }}>
                    <Link href={`/products/${details?.slug?details.slug:1}`}>
                        <Row
                        className='card-container'
                        >
                            <Col 
                            xs={12}
                            style={{
                                padding:'0px',
                            }}
                            >
                                <Card.Title
                                style={{
                                    textAlign:'right',
                                    padding:'0',
                                    display:'flex',
                                    justifyContent:'flex-end',
                                    alignItems:'flex-start'
                                }}
                                >
                                    <Button 
                                    className='top-card-button'
                                    >
                                        <span>10%</span>
                                        <span>OFF</span>
                                    </Button>
                                </Card.Title>
                                <Image
                                src={`${details?.image?`${baseImageServer}/${details.image}`:'/products2.jpg'}`}
                                height={220}
                                width={190}
                                alt={`${details?.img_alt?details?.img_alt:'Alter Text'}`}
                                className='image'
                                />
                            </Col>
                        </Row>
                </Link>

                <Row
                className={`${hoverShow?'details-active':'details-active'}`}
                style={{
                        minWidth:'15vw',
                        width:'100%',
                        minHeight:'12vh'
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
                                fontSize:'10px',
                                textAlign:'left',
                                fontWeight:'700',
                                padding:'6px'
                            }}
                            >
                                <Link
                                href={`/products/${details?.slug?details.slug:1}`}
                                className="products-link-href"
                                >
                                    <span>
                                        <b>
                                            {details?.name?details.name:`Neogen Dermalogy Black 
                                            Energy Cream 80ml`}
                                        </b>
                                    </span>
                                </Link>
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row
                    style={{
                        padding:"10px 0px"
                    }}
                    >
                        <Col
                        style={{
                            display:"flex",
                            justifyContent:'space-around',
                            alignItems:'center',
                            flexDirection:'row'
                        }}
                        xs={9}
                        >
                            <h3 className="cart-price-text">৳{variants?.price && variants?.discount_price?parseFloat(variants.discount_price).toFixed(0):0}</h3>
                            <h3 className="cart-discount-text">&nbsp;<del> ৳{variants?.price?parseFloat(variants.price).toFixed(0):0}</del></h3>
                        </Col>
                        <Col
                        xs={3}
                        >
                            <Image
                            src="/love.png"
                            height={25}
                            width={25}
                            alt="Wishlist"
                            style={{
                                marginLeft:'10px'
                            }}
                            >

                            </Image>
                        </Col>
                    </Row>
                    <div
                    className="products-action-container"
                    >
                        <div
                        className='action-inner-div '
                        >
                            <Button
                            className="products-buttton left-side"
                            onClick={()=>{
                                handleAddToCart(details?details:{})
                            }}
                            >
                                Add To Cart
                            </Button>
                        </div>
                
                
                        <div
                        className='action-inner-div '
                        >
                            <Button
                            className="products-buttton right-side"
                            onClick={()=>{
                            // handleAddToCart(data?data:{})
                            }}
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
           
        </>
    )
}
export default FilterProductTwo;