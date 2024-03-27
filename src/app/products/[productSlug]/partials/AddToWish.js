'use client';
import React,{
    useState,
    useEffect,
    useContext
} from 'react';
import {
    Card,
    Row,
    Col,
    Button,
    Toast,
    Modal
} from 'react-bootstrap';
import { 
    useRouter 
} from 'next/navigation';
import { 
    WishListsContextApi 
} from '@/contextApi/widhListsContext';
import SuccessToaster from '@/app/ui/SuccessToaster';
import ErrorToaster from '@/app/ui/ErrorToaster';
import Image from 'next/image';
import axios from 'axios';
import ConfigureAxios from '@/utils/axiosConfig';
import './index.scss';

const AddToWish=({data})=>{
    const router=useRouter();
    const {wishLists,setWishLists}=useContext(WishListsContextApi);
    const [isWishLists,setIsWishLists]=useState(false);
    const [wishListsData,setWishListsData]=useState({});
    const [wishListsSuccess,setWishListsSuccess]=useState(false);
    const [wishListSuccessmsg,setWishListSuccessMsg]=useState("");
    const [wishListError,setWishListError]=useState(false);
    const [wishListErrorMsg,setWishListErrorMsg]=useState("");
    const [showModal2,setShowModal2]=useState(false);
    

    useEffect(()=>{
        const {id}=data;
        if(wishLists.length){
           
            const filterProducts=wishLists.filter((d)=>{return d?.product_id==id});
            //console.log("Filter Products : ",filterProducts);
            if(filterProducts.length){
                setIsWishLists(true);
                setWishListsData(filterProducts[0]);
            }else{
                setIsWishLists(false);
                setWishListsData({});
            }
        }else{
            setIsWishLists(false);
            setWishListsData({});
        }
    },[wishLists]);


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
                    product_variant_id:data?.variant[0]?.id
                }
                axios.post(`/wishlist`,JSON.stringify(obj))
                .then((response)=>{
                    if(response.status==201){
                        getWishLists(token);
                        setWishListsSuccess(true);
                        setWishListSuccessMsg("Add to wish lists success.")
                        setTimeout(()=>{
                            setWishListsSuccess(false)
                        },2000)
                    }
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
            <a
            style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
            onClick={()=>{
                handleWishLists(data)
            }}
            className="wishlists-image"
            >
                <Image
                src={`${isWishLists?'/love_red.png':'/love.png'}`}
                height={22}
                width={22}
                alt="Love"
                
                />
                &nbsp;&nbsp;
                <span><b>Add to Wishlist</b></span>
            </a>
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
        </>
    )
}
export default AddToWish;