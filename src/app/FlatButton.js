'use client';
import React,{
    useContext, useEffect, useState
} from 'react';
import {
    Col,
    Container,
    Row,
    FormControl,
    InputGroup,
    InputGroupText,
    Form,
    Button,
    Modal,
    Card
} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import { 
    UserInfoContextApi 
} from '@/contextApi/userInfoApi';
import ConfigureAxios from '@/utils/axiosConfig';
import axios from 'axios';
import { 
    baseImageServer 
} from '@/utils/config';

const FlatButton=()=>{
    const {userInfo,setUserInfo}=useContext(UserInfoContextApi);
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const [cartTotal,setCartTotal]=useState(0);
    const [showModal,setShowModal]=useState(false);
    const [quantity,setQuantity]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);

    // get cart lists on initial load
    useEffect(()=>{
        const token=localStorage.getItem("token");

        if(token){
            getCartLists(token)
        }else{
            let lists=localStorage.getItem("ProductCarts");
            lists=JSON.parse(lists);
            if(lists?.length){
                setCartLists(lists)
            }
        }
    },[])

    // calculate cart lists total prices
    useEffect(()=>{
        if(cartLists.length){
            const totalQuantity=cartLists.reduce(
                (accumulator, currentValue) => accumulator + currentValue.quantity,
                0,
            );
            const totalPrice=cartLists.reduce(
                (accumulator, currentValue) => accumulator + (currentValue.quantity*currentValue.price),
                0,
            )
            setTotalPrice(totalPrice);
            setQuantity(totalQuantity);
        }else{
            setQuantity(0);
            setTotalPrice(0);
        }
    },[cartLists])

    // if user just logged in then autometic sync products from localstorage data
    useEffect(()=>{
        const token=localStorage.getItem("token");

        if(token){
            ConfigureAxios(token);
            getCartLists(token)
            let lists=localStorage.getItem("ProductCarts");
            lists=JSON.parse(lists);
            if(lists?.length){
                let configData=[];
                lists.map((dta)=>{
                    const newObj={
                        product_id:dta.product_id,
                        product_variant_id:dta.product_sku_id,
                        quantity:dta.quantity
                    }
                    configData=[...configData,newObj]
                })
                axios.post(`/cart-sync`,JSON.stringify(configData)).then((response)=>{
                    //console.log(response)
                    if(response.status===201){
                        localStorage.removeItem("ProductCarts");
                        getCartLists(token)
                    }
                }).catch((error)=>{

                })
            }
        }
    },[userInfo])


    // get cart lists onload
    const getCartLists=async(token="")=>{
        if(token){
            ConfigureAxios(token);
            axios.get(`/cart`)
            .then((response)=>{
                console.log("Cart Lists : ",response.data)
                if(response.status===200){
                    setCartLists(response.data)
                }
            }).catch((error)=>{

            })
        }

    }

    // handle remove cart on click
    const handleRemoveCart=(data)=>{
        if(data?.id){
            const Token=localStorage.getItem("token");
            if(Token){
                ConfigureAxios(Token);

                axios.delete(`/cart/${data.id}`)
                .then((response)=>{
                    if(response.status===200){
                        getCartLists(Token);
                    }
                    //console.log("delete response: ",response);
                }).catch((error)=>{
                    console.log("delete error:",error)
                })
            }else{
                let lists=localStorage.getItem("ProductCarts");
                lists=JSON.parse(lists);

                if(lists?.length){
                    const newLists=lists.filter((dta)=>{return dta.id!==data.id});

                    if(newLists?.length){
                        localStorage.setItem("ProductCarts",JSON.stringify(newLists));
                        setCartLists(newLists);
                    }else{
                        localStorage.setItem("ProductCarts",JSON.stringify([]));
                        setCartLists([]);
                    }
                }
            }
        }
    }
    const handleUpdateCart=(data)=>{
        //console.log("Data : ",data)
        if(data?.id){
            const Token=localStorage.getItem("token");
            if(Token){
                ConfigureAxios(Token);

                const obj={
                    quantity:data.quantity+1,
                    _method:'PUT'
                }
                axios.post(`/cart/${data.id}`,JSON.stringify(obj))
                .then((response)=>{
                    //console.log("response ",response)
                    if(response.status==201){
                        //console.log(response)
                        getCartLists(Token);
                    }
                }).catch((error)=>{
                    console.log("Err",error)
                })
            }else{
                let lists=localStorage.getItem("ProductCarts");
                lists=JSON.parse(lists);

                if(lists?.length){
                    let newLists=[];


                    lists.map((dta)=>{
                        if(dta.id==data.id){
                            const obj={
                                ...data,
                                quantity:data.quantity+1
                            };

                            newLists=[...newLists,obj]
                        }else{
                            newLists=[...newLists,dta];
                        }
                    })

                    //console.log(newLists)
                    if(newLists?.length){
                        //localStorage.removeItem("ProductCarts");
                        localStorage.setItem("ProductCarts",JSON.stringify(newLists));
                        setCartLists(newLists);
                    }else{
                        localStorage.setItem("ProductCarts",JSON.stringify([]));
                        setCartLists([]);
                    }
                }
            }
        }
    }

    
    return(
        <>
           {/* <Link href="/products/checkout"> */}
            <Row 
            className='fixed-button'
            onClick={()=>{
                if(cartLists?.length){
                    setShowModal(true)
                }
            }}
            >
                <Col 
                xs={12}
                style={{
                    padding:"0px"
                }}
                >
                    <Row
                    className='flat-button-top-area'
                    >
                        <Col 
                        xs={12}
                        style={{
                            textAlign:'center'
                        }}
                        >
                            <Row
                            >
                                <Col 
                                xs={12}
                                style={{
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}
                                >
                                    <Image
                                    src={'/shop-bag.png'}
                                    height={20}
                                    width={20}
                                    alt="Image"
                                    />
                                </Col>
                            </Row>
                            <span>{quantity?quantity:0} Items</span>
                        </Col>
                    </Row>
                    <Row
                    className='flat-button-footer-area'
                    >
                        <Col 
                        xs={12}
                        >
                            <span>৳ {totalPrice?parseFloat(totalPrice).toFixed(0):0}</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
           {/* </Link> */}
           <Modal 
            show={showModal} fullscreen={false} onHide={() => setShowModal(false)}
            className="products-cart-modal right"
            >
                <Modal.Header>
                    <Row>
                        <Col
                        style={{
                            //position:'relative',
                            textAlign:'center',
                           // display:'flex',
                            //flexDirection:'column',
                            padding:'4px 10px'
                        }}
                        >
                            <Row>
                                <Col
                                //xs={2}
                                >
                                    <Image
                                    src={'/modal_close_icon.png'}
                                    alt="Modal Close"
                                    height={18}
                                    width={16}
                                    style={{
                                        // position:'absolute',
                                        // left:10,
                                        // top:-6
                                    }}
                                    onClick={()=>{
                                        setShowModal(false)
                                    }}
                                    className="modal-close-icon"
                                    ></Image>
                                </Col>
                                <Col
                                style={{
                                    textAlign:'center'
                                }}
                                //xs={10}
                                >
                                    <h4
                                    style={{
                                        textAlign:'center'
                                    }}
                                    >CART</h4>
                                </Col>
                            </Row>
                           
                        </Col>
                    </Row>
                </Modal.Header>
                <Modal.Body
                style={{
                    backgroundColor:"#f7f5fb"
                }}
                className="cart-modal-body"
                >
                    {
                        cartLists?.length?cartLists.map((dta)=>{
                            return <Card
                            style={{
                                margin:'5px 0px'
                            }}
                            key={dta.id}
                            >
                                <Card.Body>
                                    <Row>
                                        <Col xs={3}>
                                            <Image
                                            //src=''
                                            src={`${dta?.image?`${baseImageServer}/${dta.image}`:'/cart_image.png'}`}
                                            alt="Cart Image"
                                            height={50}
                                            width={50}
                                            />
                                        </Col>
                                        <Col xs={7}>
                                            <span className='cart-name-title-text'>
                                                {dta?.name?dta.name:""}<br/>
                                                ৳<b>{dta?.price?dta.price:""}</b>
                                            </span>
                                        </Col>
                                        <Col 
                                        xs={2}
                                        style={{
                                            position:'relative',
                                            display:'flex',
                                            flexDirection:'column',
                                            justifyContent:'space-around',
                                            alignItems:'flex-end'
                                        }}
                                        >
                                            <Image
                                            src="/cart_remove_icon.png"
                                            height={20}
                                            width={20}
                                            alt="Cart Remove."
                                            onClick={()=>{
                                                handleRemoveCart(dta);
                                            }}
                                            className="cart-item-remover"
                                            >
        
                                            </Image>
        
                                            <Button
                                            size='small'
                                            style={{
                                                width:'100% !important'
                                            }}
                                            id="cartButton"
                                            >
                                                {dta?.quantity?dta.quantity:""}
                                                <Image
                                                src="/increase_cart.png"
                                                // style={{
                                                //     position:'absolute',
                                                //     right:0
                                                // }}
                                                height={7}
                                                width={12}
                                                alt="Arrow"
                                                onClick={()=>{
                                                    handleUpdateCart(dta)
                                                }}
                                                />
                                            </Button>    
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                   <span className='cart-items-footer-text'>৳ {dta?.price && dta?.quantity?parseFloat(parseFloat(dta.price)*dta.quantity).toFixed(2):""}</span>
                                </Card.Footer>
                            </Card>
                        }):""
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col
                        style={{
                            display:'flex',
                            justifyContent:'space-around',
                            alignItems:'center'

                        }}
                        >
                            <span 
                            className='cart-modal-footer-text'
                            style={{
                                width:'50%'
                            }}
                            >
                                Cart Total <br/>
                                <b>৳{totalPrice?parseFloat(totalPrice).toFixed(2):0}</b>
                            </span>        
                        {/* </Col>
                        <Col
                        style={{
                            textAlign:'right'
                        }}
                        > */}
                            <Link
                            href="/products/checkout"
                            >
                                <Button
                                className="processed-button"
                                style={{
                                    width:'50% !important'
                                }}
                                onClick={()=>{
                                    setShowModal(false);
                                }}
                                >
                                    Proceed
                                    <Image
                                    src="/next_process_icon.png"
                                    height={7}
                                    width={10}
                                    alt="Arrow"
                                    style={{
                                        marginLeft:'5px'
                                    }}
                                    onClick={()=>{
                                        //setHoverShow(!hoverShow)
                                    }}
                                    />
                                </Button> 
                            </Link>     
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default FlatButton;