'use client'
import React,{
    useContext,
    useEffect,
    useState
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
import './index.scss'
import Image from 'next/image';
import HeaderSearchInput from '../shared/HeaderSearchInput';
import Link from 'next/link';
import { 
    UserInfoContextApi 
} from '@/contextApi/userInfoApi';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import ConfigureAxios from '@/utils/axiosConfig';
import { 
    ToastContainer 
} from 'react-toastify';
import axios from 'axios';
import { 
    baseImageServer 
} from '@/utils/config';

const TopBarMain=()=>{
    const {userInfo,setUserInfo}=useContext(UserInfoContextApi);
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const [cartTotal,setCartTotal]=useState(0);
    const [showModal,setShowModal]=useState(false);
    

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

    useEffect(()=>{
        if(cartLists?.length){
            const total=cartLists.reduce((accum,current)=>{return accum+(parseFloat(current.price)*current.quantity)},0)
            const totals=parseFloat(total).toFixed(2);
            setCartTotal(totals);
        }
    },[cartLists])

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
                        product_variant_id:dta.product_variant_id,
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
    const handleRemoveCart=(data)=>{
        if(data?.id){
            const Token=localStorage.getItem("token");
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
        }
    }
    const handleUpdateCart=(data)=>{
        //console.log("Data : ",data)
        if(data?.id){
            const Token=localStorage.getItem("token");
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
        }
    }
    //console.log("User : ",userInfo);
    return(
        <>
            <Col
            className='top-bar-container'
            >
                <Row
                style={{
                    justifyContent:'center',
                    display:'flex',
                    alignItems:'center'
                }}
                >
                    <Col 
                    xs={3} 
                    className='logo-div'
                    >
                        <Image
                        src="/shop-logo.png"
                        width={250}
                        height={100}
                        alt="Picture of the author"
                        />
                    </Col>
                    <Col 
                    xs={5}
                    >
                        <HeaderSearchInput/>
                    </Col>
                    <Col 
                    xs={2}
                    style={{
                        textAlign:'right'
                    }}
                    >
                        <Link
                        href="/login-registration"
                        >
                            <Button
                            className='user-button'
                            >
                                <Image
                                src="/user.png"
                                width={16}
                                height={16}
                                alt="search"
                                />
                            </Button>
                        </Link>

                        <Button
                        className='user-button'
                        style={{
                            marginLeft:'10px'
                        }}
                        >
                            <Image
                            src="/cart.png"
                            width={20}
                            height={20}
                            alt="search"
                            onClick={()=>{
                                setShowModal(true)
                            }}
                            />
                        </Button>
                    </Col>
                    <Col 
                    className='header-social-container'
                    xs={2}>
                        {/* <Button
                        className='normal-social-button'
                        >
                            <Image
                            src="/facebook.png"
                            width={16}
                            height={16}
                            alt="search"
                            />
                        </Button> */}
                    
                        {/* <Button
                        className='normal-social-button'
                        > */}
                        {/* <InputGroup>
                            <InputGroupText
                            className='normal-input global-search'
                            > */}
                                <Image
                                className="header-social-image"
                                src="/facebook.png"
                                width={11}
                                height={11}
                                alt="search"
                                />
                            {/* </InputGroupText>
                            <InputGroupText
                            className='normal-input global-search'
                            > */}
                                <Image
                                className="header-social-image"
                                src="/instagram.png"
                                width={20}
                                height={20}
                                alt="search"
                                />
                            {/* </InputGroupText>
                        </InputGroup> */}
                        {/* </Button> */}
                        {/* <Button
                        className='normal-social-button'
                        > */}
                            <Image
                            className="header-social-image"
                            src="/youtube.png"
                            width={22}
                            height={22}
                            alt="search"
                            />
                        {/* </Button> */}
                    </Col>
                </Row>
            </Col>
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
                                <b>৳{cartTotal?cartTotal:""}</b>
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
export default TopBarMain;