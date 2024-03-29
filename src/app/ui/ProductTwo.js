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
    Button,
    Toast,
    Modal,
    ToastContainer
} from 'react-bootstrap';
import Image from 'next/image';
import Slider from 'react-slick';
import { 
    baseImageServer 
} from '@/utils/config';
import { 
    useRouter 
} from 'next/navigation';
import SuccessToaster from './SuccessToaster';
import ErrorToaster from './ErrorToaster';
import Link from 'next/link';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductHover from './partials/ProuctHover';
import './indexTwo.scss';
import ConfigureAxios from '@/utils/axiosConfig';
import CartModal from '../shared/CartModal';
import axios from 'axios';


const ProductTwo=({data})=>{
    const router=useRouter();
    const [hoverShow,setHoverShow]=useState(false);
    const [showModal,setShowModal]=useState(false);
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const variants=data?.variant?.length?data?.variant[0]:{}
    const [sizes,setSizes]=useState([]);
    const [sizeLists,setSizeLists]=useState([]);
    const [addToCartSuccess,setAddToCartSuccess]=useState(false);
    const [addToCartError,setAddToCartError]=useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        if(data?.variant?.length){
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
    const handleAddToCart=(infos,name)=>{
        const token=localStorage.getItem("token");
        if(token && infos?.id){
            ConfigureAxios(token);
            if(infos?.id){
                let lists =[...cartLists];
                const currentId=infos.id;
                if(lists?.length){
                    const index = lists.map(e => parseInt(e.product_id)).indexOf(currentId);
                    if(index>=0){
                        const currentProducts=lists[index];
                        currentProducts.quantity=parseInt(currentProducts.quantity)+1;
                        const product_id=currentProducts.id;
                        const obj={
                            quantity:currentProducts.quantity,
                            _method:'PUT'
                        }
                        axios.post(`/cart/${product_id}`,JSON.stringify(obj))
                        .then((response)=>{
                            if(response.status==201){
                                if(name=="buy-now"){
                                    router.push("/products/checkout")
                                }else{
                                    setShow(true);
                                    setAddToCartSuccess(true);
                                    getCartLists(token);
                                    setTimeout(()=>{
                                        setAddToCartSuccess(false)
                                    },2000)
                                }
                            }
                        }).catch((error)=>{
                            setAddToCartError(true);
                            setTimeout(()=>{
                                setAddToCartError(false)
                            },2000)
                            console.log("Err",error)
                        })
                    }else{
                        const newObj2={
                            quantity:1,
                            product_id:infos?.id,
                            product_variant_id:variants.id?variants.id:0
                        }
                        axios.post(`/cart`,JSON.stringify(newObj2))
                        .then((response)=>{
                            if(name=="buy-now"){
                                router.push("/products/checkout")
                            }else{
                                setShow(true);
                                setAddToCartSuccess(true);
                                getCartLists(token);
                                setTimeout(()=>{
                                    setAddToCartSuccess(false)
                                },2000)
                            }
                        }).catch((error)=>{
                            setAddToCartError(true);
                            setTimeout(()=>{
                                setAddToCartError(false)
                            },2000)
                            console.log("CCART",error)
                        })
                    }
                }else{
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
                        product_variant_id:variants.id?variants.id:0
                    }
                    setCartLists([...lists,newObj])
                    axios.post(`/cart`,JSON.stringify(newObj2))
                    .then((response)=>{
                        if(name=="buy-now"){
                            router.push("/products/checkout")
                        }else{
                            setShow(true);
                            setAddToCartSuccess(true);
                            getCartLists(token);
                            setTimeout(()=>{
                                setAddToCartSuccess(false)
                            },2000)
                        }
                    }).catch((error)=>{
                        setAddToCartError(true);
                        setTimeout(()=>{
                            setAddToCartError(false)
                        },2000)
                        console.log("CCART",error)
                    })
                }
            }
        }else{
            if(infos?.id){
                let lists2 =[...cartLists];
                let lists=localStorage.getItem("ProductCarts");
                lists=JSON.parse(lists);
                const currentId=infos.id;
                if(lists?.length){
                    const index = lists.map(e => e.id).indexOf(currentId);
                    if(index>=0){
                        lists[index].quantity+=1;
                        localStorage.setItem("ProductCarts",JSON.stringify(lists));
                        setCartLists([...lists])
                        if(name=="buy-now"){
                            router.push("/products/checkout")
                        }else{
                            setShow(true);
                            setAddToCartSuccess(true);
                            setTimeout(()=>{
                                setAddToCartSuccess(false)
                            },2000)
                        }
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
                        if(name=="buy-now"){
                            router.push("/products/checkout")
                        }else{
                            setShow(true);
                            setAddToCartSuccess(true);
                            setTimeout(()=>{
                                setAddToCartSuccess(false)
                            },2000)
                        }
                    }
                }else{
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
                    setCartLists([newObj])
                    localStorage.setItem("ProductCarts",JSON.stringify([newObj]));
                    if(name=="buy-now"){
                        router.push("/products/checkout")
                    }else{
                        setShow(true);
                        setAddToCartSuccess(true);
                        setTimeout(()=>{
                            setAddToCartSuccess(false)
                        },2000)
                    }
                }
            }
        }
    }

    const getCartLists=async(token="")=>{
        if(token){
            ConfigureAxios(token);
            axios.get(`/cart`)
            .then((response)=>{
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
            className='products-product-container'
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
                    <Link href={`${data?.slug?`/products/${data?.slug}`:'/products/page=1&per_page=10'}`}>
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
                                src={`${data?.image?`${baseImageServer}/${data.image}`:'/products2.jpg'}`}
                                height={220}
                                width={190}
                                alt={`${data?.img_alt?data?.img_alt:'Alter Text'}`}
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
                        minHeight:'9vh'
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
                                href={`${data?.slug?`/products/${data?.slug}`:'/products/page=1&per_page=10'}`}
                                className="products-link-href"
                                >
                                    <span>
                                        <b>
                                            {data?.name?data.name:`Neogen Dermalogy Black 
                                            Energy Cream 80ml`}
                                        </b>
                                    </span>
                                </Link>
                            </Card.Text>
                        </Col>
                    </Row>
                    <div
                    style={{
                        padding:"6px 5px",
                        width:'100%',
                        display:'flex',
                        flexDirection:'row'
                    }}
                    >
                        <Col
                        style={{
                            display:"flex",
                            justifyContent:'flex-start',
                            alignItems:'center',
                            flexDirection:'row'
                        }}
                        xs={9}
                        >
                            <h3 className="cart-price-text" style={{marginRight:'5px'}}>৳{variants?.price && variants?.discount_price?parseFloat(variants.discount_price).toFixed(0):0}</h3>
                            <h3 className="cart-discount-text">&nbsp;<del> ৳{variants?.price?parseFloat(variants.price).toFixed(0):0}</del></h3>
                        </Col>
                        <Col
                        xs={3}
                        style={{
                            display:"flex",
                            justifyContent:'flex-end',
                            alignItems:'center',
                            flexDirection:'row'
                        }}
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
                    </div>
                    <div
                    className="products-action-container"
                    >
                        <div
                        className='action-inner-div '
                        >
                            <Button
                            className="products-buttton left-side"
                            onClick={()=>{
                                handleAddToCart(data?data:{},"add-to-cart")
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
                                handleAddToCart(data?data:{},"buy-now")
                            }}
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <Modal 
            show={show} 
            onHide={handleClose}
            centered={true}
            >
                <Modal.Body>
                   <Row>
                        <Col 
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            flexDirection:'column',
                            padding:"20px 0px"
                        }}
                        >
                            <Image
                            src="/cart_success.png"
                            height={70}
                            width={70}
                            alt="Cart Success"
                            />
                            <Row>
                                <Col
                                style={{
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    flexDirection:'row',
                                    marginTop:"10px"
                                }}
                                >
                                    <h3 style={{fontSize:'24px',fontWeight:'600'}}>Product Added on cart successfully</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                style={{
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    flexDirection:'row',
                                    marginTop:"20px"
                                }}
                                >
                                 
                                        <Button
                                        style={{
                                            margin:"0px 15px",
                                            backgroundImage:'linear-gradient(to right, rgba(92, 51, 169, 1), rgba(232, 99, 154, 1))',
                                            border:"none"
                                        }}
                                        onClick={()=>{
                                            setShow(false)
                                            router.push("/products/checkout")
                                        }}
                                        >
                                            Buy More
                                        </Button>
                               
                                    <Button
                                    style={{
                                        margin:"0px 15px",
                                        backgroundColor:"#389e0d",
                                        border:'none'
                                    }}
                                    onClick={()=>{
                                        setShowModal(true);
                                        handleClose();
                                    }}
                                    >
                                        Go To Cart
                                    </Button>
                                    <Button
                                    style={{
                                        margin:"0px 15px",
                                        backgroundColor:'#fa541c',
                                        border:'none'
                                    }}
                                    onClick={()=>{
                                        setShow(false)
                                    }}
                                    >
                                        Close
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                   </Row>
                </Modal.Body>
            </Modal>
            <SuccessToaster
            IsShow={addToCartSuccess}
            Width={'20vw'} 
            ToastMsg="Add to on cart successfull." 
            Postion={"bottom-end"}
            />
            <ErrorToaster 
            IsShow={addToCartError} 
            ToastMsg="Add to on cart failed"
            Width={'20vw'}
            Postion={"bottom-end"}/>
            <CartModal IsModalShow={showModal} setIsModalShow={setShowModal}/>
        </>
    )
}
export default ProductTwo;