'use client';
import React,{
    useState,
    useEffect,
    useContext
} from 'react';
import {
    Card,
    Button,
    Row,
    Col
} from 'react-bootstrap';
import { 
    baseImageServer 
} from '@/utils/config';
import { 
    WishListsContextApi 
} from '@/contextApi/widhListsContext';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import SuccessToaster from '@/app/ui/SuccessToaster';
import ErrorToaster from '@/app/ui/ErrorToaster';
import Image from 'next/image';
import WarningModal from '@/app/ui/WarningModal';
import CartModal from '@/app/shared/CartModal';
import ConfigureAxios from '@/utils/axiosConfig';
import axios from 'axios';
import './index.scss';


const ProductCard=({data,IsOdd})=>{
    const {wishLists,setWishLists}=useContext(WishListsContextApi);
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const [isSuccess,setIsSuccess]=useState(false);
    const [successMsg,setSuccessMsg]=useState("");
    const [isError,setIsError]=useState(false);
    const [yesDelete,setYesDelete]=useState(false);
    const [IsShow,setIsShow]=useState(false);
    const [removeData,setRemoveData]=useState({});
    const [errorMsg,setErrorMsg]=useState("");
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);

    const handleAddToCart=(infos)=>{
        //console.log("Data: ",infos);

        const token=localStorage.getItem("token");
        if(token && infos?.product_id){
            ConfigureAxios(token);
            if(infos?.id){
                let lists =[...cartLists];
                const currentId=infos.product_id;
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
                                setShow(true);
                                setIsSuccess(true);
                                setSuccessMsg("Add To Cart Success.");
                                getCartLists(token);
                                setTimeout(()=>{
                                    setIsSuccess(false)
                                },2000)
                            }
                        }).catch((error)=>{
                            setIsError(true);
                            setErrorMsg("Add to cart failed.")
                            setTimeout(()=>{
                                setIsError(false)
                            },2000)
                            console.log("Err",error)
                        })
                    }else{
                        const newObj2={
                            quantity:1,
                            product_id:infos?.product_id,
                            product_variant_id:infos.product_variant_id?infos.product_variant_id:0
                        }
                        axios.post(`/cart`,JSON.stringify(newObj2))
                        .then((response)=>{
                            setShow(true);
                            setIsSuccess(true);
                            setSuccessMsg("Add To Cart Success.");
                            getCartLists(token);
                            setTimeout(()=>{
                                setIsSuccess(false)
                            },2000)
                        }).catch((error)=>{
                            setIsError(true);
                            setErrorMsg("Add to cart failed.")
                            setTimeout(()=>{
                                setIsError(false)
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
                        setShow(true);
                        setAddToCartSuccess(true);
                        getCartLists(token);
                        setTimeout(()=>{
                            setAddToCartSuccess(false)
                        },2000)
                    }).catch((error)=>{
                        setAddToCartError(true);
                        setTimeout(()=>{
                            setAddToCartError(false)
                        },2000)
                        console.log("CCART",error)
                    })
                }
            }
        }
    }

    const handleDeleteWishLists=async(data)=>{
        const token=localStorage.getItem("token");
        if(data?.id){
            axios.delete(`/wishlist/${data.id}`)
            .then((response)=>{
                //console.log("Delete response",response)
                //setIsWishLists(true);
                if(response.status==200){
                    getWishLists(token);
                    setIsSuccess(true);
                    //setWishListSuccessMsg("Successfully remove wishlists.")
                    setTimeout(()=>{
                        setIsSuccess(false)
                    },2000)
                }
            }).catch((error)=>{
                setIsError(true);
                //setWishListErrorMsg("Wish lists removed failed.")
                setTimeout(()=>{
                    setIsError(false)
                },2000)
                console.log("Eroor",error)
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
            className={`product-card-main ${IsOdd?'odd-card':'even-card'}`}
            >
                <Row
                className="product-card-container"
                >
                    <Col
                    xs={12}
                    lg={4}
                    className="image-section"
                    >
                        <Image
                        src={`${data?.image?`${baseImageServer}/${data?.image}`:'/products2.jpg'}`}
                        height={200}
                        width={200}
                        className='product-image'
                        alt={`${data?.img_alt?data.img_alt:'Alter Image'}`}
                        />
                    </Col>
                    <Col
                    xs={12}
                    lg={8}
                    className="description-section"
                    >
                        <h4>
                            {data?.name?data.name:''}
                        </h4>
                        <span>
                            <b>
                                Price : ৳ {data?.discount_price?data.discount_price:0}</b> {data?.price?<del> ৳ {data.price}</del>:""}
                        </span>
                        <div
                        style={{

                        }}
                        >
                            <Button
                            className='product-action-button'
                            onClick={()=>{
                                handleAddToCart(data);
                            }}
                            >
                                Add To Cart
                            </Button> 
                            <Button
                            style={{
                                marginLeft:"10px"
                            }}
                            onClick={()=>{
                                //handleDeleteWishLists(data);
                                setIsShow(true);
                                setRemoveData(data);
                            }}
                            className='product-action-button-delete'
                            >
                                Delete
                            </Button> 
                        </div>
                    </Col>
                </Row>
            </Card>

            <WarningModal 
            IsShow={IsShow} 
            setIsShow={setIsShow} 
            setYesDelete={setYesDelete}
            deletData={removeData}
            handleRemoveCart={handleDeleteWishLists}
            />

            <SuccessToaster
            IsShow={isSuccess}
            Width={'20vw'} 
            ToastMsg={`${successMsg?successMsg:'Product removed from wishlist Successful.'}`} 
            Postion={"bottom-end"}
            />
            <ErrorToaster 
            IsShow={isError} 
            ToastMsg={`${errorMsg?errorMsg:'Product removed from wishlist failed.'}`}
            Width={'20vw'}
            Postion={"bottom-end"}/>
            <CartModal IsModalShow={show} setIsModalShow={handleClose}/>
        </>
    )
}
export default ProductCard;