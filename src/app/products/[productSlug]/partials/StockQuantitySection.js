'use client';
import React,{
    useState,
    useContext,
    useEffect
} from 'react';
import {
    Row,
    Col,
    Button,
    InputGroup,
    InputGroupText
} from 'react-bootstrap';
import axios from 'axios';
import ConfigureAxios from '@/utils/axiosConfig';
import Image from 'next/image';
import SuccessToaster from '@/app/ui/SuccessToaster';
import ErrorToaster from '@/app/ui/ErrorToaster';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';

const StockQuantitySection=({data})=>{
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const [cartsproducts,setCartProducts]=useState({});
    const [addToCartSuccess,setAddToCartSuccess]=useState(false);
    const [addToCartError,setAddToCartError]=useState(false);
    const variants=data?.variant?.length?data?.variant[0]:{};

    useEffect(()=>{
        if(cartLists?.length){
            const filterProducts=cartLists.filter((dta)=> {return parseInt(dta.product_id)===data.id});
            if(filterProducts?.length){
                setCartProducts(filterProducts[0])
            }
        }
    },[cartLists]);
    const handleUpdateCartMinus=(data)=>{
        //console.log("Data : ",data)
        if(data?.id){
            if(cartsproducts?.product_id){
                if(cartsproducts?.quantity>1){
                    const Token=localStorage.getItem("token");
                    if(Token){
                        ConfigureAxios(Token);
        
                        const obj={
                            quantity:parseInt(cartsproducts.quantity)-1,
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
        
                        //console.log("Condition Working...")
                        if(lists?.length){
                            let newLists=[];
        
        
                            lists.map((dta)=>{
                                if(dta.product_id==data.id){
                                    const obj={
                                        ...dta,
                                        quantity:parseInt(dta.quantity)-1
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
            }else{
                if(data?.id){
                    const Token=localStorage.getItem("token");
                    if(Token){
                        ConfigureAxios(Token);
        
                        const obj={
                            quantity:parseInt(variants.quantity)-1,
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
        
                        console.log("Condition Working...")
                        if(lists?.length){
                            let newLists=[];
        
        
                            lists.map((dta)=>{
                                if(dta.product_id==data.id){
                                    const obj={
                                        ...dta,
                                        quantity:parseInt(cartsproducts.quantity)-1
                                    };
        
                                    newLists=[...newLists,obj]
                                }else{
                                    newLists=[...newLists,dta];
                                }
                            })
        
                            console.log(newLists)
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
        }
    }

    const handleUpdateCart=(data)=>{
        console.log("Hello...")
        //console.log("Data : ",data)
        if(data?.id){
            if(cartsproducts?.product_id){
                const Token=localStorage.getItem("token");
                if(Token){
                    ConfigureAxios(Token);

                    const obj={
                        quantity:parseInt(cartsproducts.quantity)+1,
                        _method:'PUT'
                    }
                    axios.post(`/cart/${cartsproducts.id}`,JSON.stringify(obj))
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

                    console.log("Condition Working...for update")
                    if(lists?.length){
                        let newLists=[];


                        console.log("Lists",lists);
                        lists.map((dta)=>{
                            if(dta.product_id==data.id){
                                const obj={
                                    ...dta,
                                    quantity:parseInt(dta.quantity)+1
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
            }else{
                const Token=localStorage.getItem("token");
                if(Token){
                    ConfigureAxios(Token);

                    const newObj={
                        id:data.id,
                        product_id:data.id,
                        image:data.image,
                        name:data.name,
                        price:parseFloat(variants.price).toFixed(0),
                        discount_price:parseFloat(variants.discount_price).toFixed(0),
                        quantity:1
                    }
                    const newObj2={
                        quantity:1,
                        product_id:data?.id,
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
                        getCartLists(Token);
                    }).catch((error)=>{
                        console.log("CCART",error)
                    })
                }else{
                    let lists=localStorage.getItem("ProductCarts");
                    lists=JSON.parse(lists);

                    console.log("Condition Working Add To Bag...")
                    if(lists?.length){
                        let newLists=[];


                        lists.map((dta)=>{
                            if(dta.id==data.id){
                                const obj={
                                    ...data,
                                    quantity:parseInt(data.quantity)+1
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
                    }else{

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
                    <Image
                    src='/greenCheck.png'
                    height={20}
                    width={20}
                    alt=""
                    />
                    <span>
                        <b style={{color:'green'}}>&nbsp;&nbsp; In Stock</b>
                    </span>
                </Col>
            </Row><br/>
            <Row>
                <Col 
                xs={12}
                style={{
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center'
                }}
                >
                    <span style={{fontSize:'15px',fontWeight:"700"}}><b>৳{variants?.discount_price?parseFloat(variants.discount_price).toFixed(2):0}</b>&nbsp;
                    <b>{
                        parseFloat(variants?.price)>parseFloat(variants.discount_price)?<del>৳{variants?.price?parseFloat(variants.price).toFixed(2):0}</del>:""
                    }</b>
                    </span>
                    {/* &nbsp;&nbsp; | &nbsp;&nbsp;</span>
                    <Image
                    src='/qurier.png'
                    width={20}
                    height={20}
                    alt=""
                    />
                    &nbsp;&nbsp;
                    <span>Free delivery from ৳45</span> */}
                </Col>
            </Row><br/>
            <Row>
                <Col 
                xs={12}
                >
                    <InputGroup>
                        <InputGroupText
                        className='normal-input global-search'
                        disabled={cartsproducts?.quantity==0?true:false}
                        onClick={()=>{
                            if(cartsproducts?.quantity==0 || !cartsproducts?.quantity){

                            }else{
                                handleUpdateCartMinus(data)
                            }
                        }}
                        >
                            <b>-</b>
                        </InputGroupText>
                        <InputGroupText
                        className='normal-input global-search'
                        >
                            <b>{cartsproducts?.quantity?cartsproducts.quantity:0}</b>
                        </InputGroupText>
                        <InputGroupText
                        className='normal-input global-search'
                        disabled={cartsproducts?.quantity?false:true}
                        onClick={()=>{
                            if(cartsproducts?.quantity){
                                handleUpdateCart(data)
                            }else{

                            }
                        }}
                        >
                            <b>+</b>
                        </InputGroupText>
                    </InputGroup>
                </Col>
            </Row>
        </>
    )
}
export default StockQuantitySection;