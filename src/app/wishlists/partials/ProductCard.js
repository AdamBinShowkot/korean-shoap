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
import SuccessToaster from '@/app/ui/SuccessToaster';
import ErrorToaster from '@/app/ui/ErrorToaster';
import Image from 'next/image';
import ConfigureAxios from '@/utils/axiosConfig';
import WarningModal from '@/app/ui/WarningModal';
import axios from 'axios';
import './index.scss';


const ProductCard=({data,IsOdd})=>{
    const {wishLists,setWishLists}=useContext(WishListsContextApi);
    const [isSuccess,setIsSuccess]=useState(false);
    const [successMsg,setSuccessMsg]=useState("");
    const [isError,setIsError]=useState(false);
    const [yesDelete,setYesDelete]=useState(false);
    const [IsShow,setIsShow]=useState(false);
    const [removeData,setRemoveData]=useState({});
    const [errorMsg,setErrorMsg]=useState("");

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
                        src={`${data?.product?.image?`${baseImageServer}/${data?.product?.image}`:'/products2.jpg'}`}
                        height={200}
                        width={200}
                        className='product-image'
                        alt={`${data?.product?.img_alt?data.product.img_alt:'Alter Image'}`}
                        />
                    </Col>
                    <Col
                    xs={12}
                    lg={8}
                    className="description-section"
                    >
                        <h4>
                            {data?.product?.name?data.product.name:''}
                        </h4>
                        <span>
                            <b>Price : ৳ 1600</b> <del> ৳ 1800</del>
                        </span>
                        <div
                        style={{

                        }}
                        >
                            <Button
                            className='product-action-button'
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
        </>
    )
}
export default ProductCard;