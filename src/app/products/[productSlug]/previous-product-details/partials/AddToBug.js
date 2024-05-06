'use client';
import React,{
    useState,
    useEffect,
    useContext
} from 'react';
import {
    Row,
    Col,
    Button,
    Modal
} from 'react-bootstrap';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import Image from 'next/image';
import Link from 'next/link';
import { 
    useRouter 
} from 'next/navigation';
import SuccessToaster from '@/app/ui/SuccessToaster';
import ErrorToaster from '@/app/ui/ErrorToaster';
import ConfigureAxios from '@/utils/axiosConfig';
import CartModal from '@/app/shared/CartModal';
import axios from 'axios';


const AddToBug=({data})=>{
    const router=useRouter();
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const variants=data?.variant?.length?data?.variant[0]:{}
    const [addToCartSuccess,setAddToCartSuccess]=useState(false);
    const [addToCartError,setAddToCartError]=useState(false);
    const [show, setShow] = useState(false);
    const [showModal,setShowModal]=useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleAddToCart=(infos,name)=>{
        //console.log(infos)
        const token=localStorage.getItem("token");
        if(token && infos?.id){
            
            ConfigureAxios(token);
        
            if(infos?.id){
               
                let lists =[...cartLists];
                const currentId=infos.id;
                if(lists?.length){
                    const index = lists.map(e => parseInt(e.product_id)).indexOf(currentId);
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
                        //setCartLists([...lists])
                    }
                    else{
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
                    //console.log("Caleddd")
                    const newObj={
                        id:currentId,
                        product_id:currentId,
                        image:infos.image,
                        name:infos.name,
                        price:parseFloat(variants.price).toFixed(0),
                        discount_price:parseFloat(variants.discount_price).toFixed(0),
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
                    }else{
                        const newObj={
                            id:currentId,
                            name:infos?.name,
                            image:infos.image,
                            price:parseFloat(variants.price).toFixed(0),
                            discount_price:parseFloat(variants.discount_price).toFixed(0),
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
                            getCartLists(token);
                            setTimeout(()=>{
                                setAddToCartSuccess(false)
                            },2000)
                        }
                    }
                }else{
                    //console.log('Calleddd')
                    let newlists=[];
                    const newObj={
                        id:currentId,
                        name:infos?.name,
                        image:infos?.image,
                        price:parseFloat(variants.price).toFixed(0),
                        discount_price:parseFloat(variants.discount_price).toFixed(0),
                        quantity:1,
                        product_id:currentId,
                        product_sku_id:variants.id?variants.id:0
                    }
                    //newlists=[...newlists,newObj]
                    setCartLists([newObj])
                    localStorage.setItem("ProductCarts",JSON.stringify([newObj]));
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


    //console.log("Data: ",data);
    return(
        <>
            <Row>
                <Col 
                xs={12}
                style={{
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center'
                }}
                >
                    <Button
                    className='add-to-bag-button details-action-button'
                    onClick={()=>{
                        handleAddToCart(data,"add-to-cart")
                    }}
                    >
                        Add To Bag
                    </Button>
                    <Button
                    className='buy-now-button details-action-button'
                    onClick={()=>{
                        handleAddToCart(data,"buy-now")
                    }}
                    >
                        Buy Now
                    </Button>
                </Col>
            </Row>
            <Modal 
            show={false} 
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
                                        setShow(false);
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
            IsTopLeft={false}
            IsTopRight={false}
            IsBottomLeft={false}
            IsBottomRight={true}
            />
            <ErrorToaster 
            IsShow={addToCartError} 
            ToastMsg="Add to on cart failed"
            Width={'20vw'}
            Postion={"bottom-end"}/>
            <CartModal IsModalShow={show} setIsModalShow={handleClose}/>
        </>
    )
}
export default AddToBug;