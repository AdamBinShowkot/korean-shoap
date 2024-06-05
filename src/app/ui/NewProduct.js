'use client';
import React,{
    useState,
    useEffect,
    useContext
} from 'react';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import { 
    WishListsContextApi 
} from '@/contextApi/widhListsContext';
import {
    Card,
    Row,
    Col,
    Button,
    Toast,
    Modal
} from 'react-bootstrap';
import './newProduct.scss';
import Link from 'next/link';
import Image from 'next/image';
import { 
    baseImageServer 
} from '@/utils/config';
import { 
    useRouter 
} from 'next/navigation';
import SuccessToaster from './SuccessToaster';
import ErrorToaster from './ErrorToaster';
import ProductHover from './partials/ProuctHover';
import './indexTwo.scss';
import ConfigureAxios from '@/utils/axiosConfig';
import CartModal from '../shared/CartModal';
import ProductsTitle from './ProductsTitle';
import axios from 'axios';

const NewProduct=({data,IsFromProductsPage,IsFromHomePage,IsFromHomeSlide})=>{
    const router=useRouter();
    const [hoverShow,setHoverShow]=useState(false);
    const [showModal,setShowModal]=useState(false);
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const {wishLists,setWishLists}=useContext(WishListsContextApi);
    const [isWishLists,setIsWishLists]=useState(false);
    const [wishListsData,setWishListsData]=useState({});
    const variants=data?.variant?.length?data?.variant[0]:{}
    const [sizes,setSizes]=useState([]);
    const [sizeLists,setSizeLists]=useState([]);
    const [addToCartSuccess,setAddToCartSuccess]=useState(false);
    const [addToCartError,setAddToCartError]=useState(false);
    const [wishListsSuccess,setWishListsSuccess]=useState(false);
    const [wishListSuccessmsg,setWishListSuccessMsg]=useState("");
    const [wishListError,setWishListError]=useState(false);
    const [wishListErrorMsg,setWishListErrorMsg]=useState("");
    const [show, setShow] = useState(false);
    const [showModal2,setShowModal2]=useState(false);

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

    useEffect(()=>{
        const {id}=data;
        if(wishLists.length){
           
            const filterProducts=wishLists.filter((d)=>{return d?.product_id==id});
            if(filterProducts.length){
                setIsWishLists(true);
                setWishListsData(filterProducts[0]);
            }else{
                setIsWishLists(false);
                setWishListsData({});
            }
            //console.log("Filter Products : ",filterProducts);
        }else{
            setIsWishLists(false);
            setWishListsData({});
        }
    },[wishLists]);

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

    const handleWishLists=(data)=>{
        //console.log("Data",data)
        const token=localStorage.getItem("token");

        if(token && data?.id){
           // console.log('Heloooo')
            ConfigureAxios(token);
            if(isWishLists && wishListsData?.id){
                axios.delete(`/wishlist/${wishListsData.id}`)
                .then((response)=>{
                    //console.log("Delete response",response)
                    //setIsWishLists(true);
                    if(response.status==200){
                        getWishLists(token);
                        setWishListsSuccess(true);
                        setWishListSuccessMsg("Successfully remove wishlists.")
                        setTimeout(()=>{
                            setWishListsSuccess(false)
                        },2000)
                    }
                }).catch((error)=>{
                    setWishListError(true);
                    setWishListErrorMsg("Wish lists removed failed.")
                    setTimeout(()=>{
                        setWishListError(false)
                    },2000)
                    console.log("Eroor",error)
                })
            }else{
                const obj={
                    product_id:data?.id,
                    product_variant_id:variants?.id
                }
                axios.post(`/wishlist`,JSON.stringify(obj))
                .then((response)=>{
                    //console.log("Success response :",response)
                    if(response.status==201){
                        getWishLists(token);
                        setWishListsSuccess(true);
                        setWishListSuccessMsg("Add to wish lists success.")
                        setTimeout(()=>{
                            setWishListsSuccess(false)
                        },2000)
                    }
                    //setIsWishLists(true);
                    //getWishLists(token);
                    //alert("Success.")
                }).catch((error)=>{
                    setWishListError(true);
                    setWishListErrorMsg("Add to wish list failed.")
                    setTimeout(()=>{
                        setWishListError(false)
                    },2000)
                    console.log("Eroor",error)
                })
            }
        }else{
            setShowModal2(true);
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

    const getWishLists=async(token)=>{
      if(token){
        ConfigureAxios(token);
        axios.get(`/wishlist`)
        .then((response)=>{
          if(response.status==200){
            const {data}=response;

            if(data.length){
              //console.log("Responsee Data: ",data)
              setWishLists(data)
            }else{
              setWishLists([])
            }
          }else{
            setWishLists([])
          }
        }).catch((error)=>{
          setWishLists([])
          console.log("Get WishLists Error.");
        })
      }
    }
    

   // console.log("Wish Lists : ",wishLists);

    return(
        <>
            <div className={`korean-shop-cart ${IsFromProductsPage?'cart-from-products-page':''} ${IsFromHomePage?'cart-from-home-page':''} ${IsFromHomeSlide?'from-home-slide':''}`}>
                <div className='cart-body'>
                    <Link
                    href={`${data?.slug?`/products/${data?.slug}`:'/products/page=1&per_page=10'}`}
                    >
                        <div className='discount-section'>
                            <span>10%</span>
                            <span>OFF</span>
                        </div>
                        <div className='image-section'>
                            <Image
                            src={`${data?.image?`${baseImageServer}/${data.image}`:'/products2.jpg'}`}
                            height={220}
                            width={190}
                            alt={`${data?.img_alt?data?.img_alt:'Alter Text'}`}
                            className='image'
                            >
                            </Image>
                        </div>
                    </Link>
                </div>
                <div className='cart-content'>
                    <div className='title'>
                        <ProductsTitle data={data}/>
                    </div>
                    <div className='price-wishlist'>
                        <div className='price'>
                            <h3 className="cart-price-text" style={{marginRight:'5px'}}>
                                ৳{variants?.price && variants?.discount_price?parseFloat(variants.discount_price).toFixed(0):0}
                            </h3>
                            <h3 className="cart-discount-text">&nbsp;{
                                parseFloat(variants.price)>parseFloat(variants.discount_price)?<del> ৳{variants?.price?parseFloat(variants.price).toFixed(0):0}</del>:""
                            }</h3>
                        </div>
                        <div className='wishlist'>
                            <Image
                            src={`${isWishLists?'/love_red.png':'/love.png'}`}
                            height={25}
                            width={25}
                            alt="Wishlist"
                            onClick={()=>{
                                handleWishLists(data)
                            }}
                            >

                            </Image>
                        </div>
                    </div>
                    <div className='cart-action'>
                        <div className='add-to-cart'>
                            <Button 
                            className='product-action-button'
                            onClick={()=>{
                                handleAddToCart(data?data:{},"add-to-cart")
                            }}
                            >
                                Add To Cart 
                            </Button>
                        </div>
                        <div className='buy-now'>
                            <Button 
                            className='product-action-button'
                            onClick={()=>{
                                handleAddToCart(data?data:{},"buy-now")
                            }}
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal 
            show={showModal2} 
            onHide={()=>{
                setShowModal2(false);
            }}
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
                            src="/warning_image.png"
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
                                    <h3 style={{fontSize:'24px',fontWeight:'600'}}>Sorry you are not logged in!</h3>
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
                                        setShowModal2(false);
                                        router.push("/accounts")
                                    }}
                                    >
                                        Yes, Log in!
                                    </Button>
                                    <Button
                                    style={{
                                        margin:"0px 15px",
                                        backgroundColor:'#fa541c',
                                        border:'none'
                                    }}
                                    onClick={()=>{
                                        setShowModal2(false)
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
            <SuccessToaster
            IsShow={wishListsSuccess}
            Width={'20vw'} 
            ToastMsg={`${wishListSuccessmsg?wishListSuccessmsg:'Add to wish list successfull.'}`} 
            Postion={"bottom-end"}
            />
            <ErrorToaster 
            IsShow={wishListError} 
            ToastMsg={`${wishListErrorMsg?wishListErrorMsg:'Add to wish list failed'}`}
            Width={'20vw'}
            Postion={"bottom-end"}/>
            <CartModal IsModalShow={show} setIsModalShow={handleClose}/>
        </>
    )
}
export default NewProduct;