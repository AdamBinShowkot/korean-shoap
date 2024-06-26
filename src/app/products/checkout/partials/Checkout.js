'use client';
import React,{
    useEffect,
    useState,
    useContext
} from 'react';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import {
    Row,
    Col,
    Form,
    Button,
    Card,
    InputGroup,
    InputGroupText
} from 'react-bootstrap';
import ConfigureAxios from '@/utils/axiosConfig';
import axios from 'axios';
import Image from 'next/image';
import { 
    useRouter 
} from 'next/navigation';
import { 
    baseImageServer 
} from '@/utils/config';
import NotFoundItem from '@/app/shared/CartModal/NotFoundItem';
import SuccessToaster from '@/app/ui/SuccessToaster';
import WarningToaster from '@/app/ui/WarningToaster';
import Link from 'next/link';

const CheckoutMain=()=>{
    const router=useRouter();
    const {cartLists,setCartLists}=useContext(AddToCartContext);
    const [Token,setToken]=useState("");
    const [userInfo,setUserInfo]=useState({});
    const [checkoutSuccess,setCheckoutSuccess]=useState(false);
    const [checkoutError,setCheckoutError]=useState(false);
    const [errorMsg,setErrorMsg]=useState("")
    const [successMsg,setSuccessMsg]=useState("");
    const [totalQty,setTotalQty]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);
    const [customerInfo,setCustomerInfo]=useState({
        name:"",
        phone:"",
        address:"",
        note:"",
        location:"",
        paymentMethod:""
        //paymentMethod:"COD"
    })

    useEffect(()=>{
        const myToken=localStorage.getItem("token");
        setToken(myToken)
        getUserInfo(myToken);
    },[])

    useEffect(()=>{
        if(cartLists.length){
            const totalPrice=cartLists.reduce(
                (accumulator, currentValue) => accumulator + (currentValue.quantity*parseFloat(currentValue.discount_price)),
                0,
            )
            setTotalPrice(totalPrice);
            const qty=cartLists.reduce((accumulator, currentValue) => {return accumulator + currentValue.quantity},0);
            setTotalQty(qty)
        }else{
            setTotalPrice(0)
        }
    },[cartLists])

    const getUserInfo=(token)=>{
        if(token){
            ConfigureAxios(token);
            axios.get(`/my-info`)
            .then((response)=>{
                //console.log(response)
                if(response.status===200){
                    const {data}=response;
                  // console.log("Users",data)
                    //setUserInfo(data);
                    if(data?.id){
                        setCustomerInfo((state)=>({
                            ...state,
                            name:data?.name?data.name:"",
                            phone:data?.mobile?data.mobile:"",
                            address:data?.address?data.address:""
                        }))
                    }
                }
            }).catch((error)=>{

            })
        }else{
            setUserInfo({})
        }
    }
    const onValueChange=(e)=>{
        ///console.log(e)
        const data={...customerInfo};
        const {name,value}=e.target;

        data[name]=value;

        setCustomerInfo(data);
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
                        setCheckoutSuccess(true);
                        setSuccessMsg("Delete Successfull.")
                        setTimeout(()=>{
                            setCheckoutSuccess(false)
                        },2000)
                    }
                    //console.log("delete response: ",response);
                }).catch((error)=>{
                    setCheckoutError(true);
                    setErrorMsg("Delete failed.")
                    setTimeout(()=>{
                        setCheckoutError(false)
                    },2000)
                    console.log("delete error:",error)
                })
            }else{
                let lists=localStorage.getItem("ProductCarts");
                lists=JSON.parse(lists);

                if(lists?.length){
                    const newLists=lists.filter((dta)=>{return dta.id!==data.id});

                    if(newLists?.length){
                        localStorage.setItem("ProductCarts",JSON.stringify(newLists));
                        setCheckoutSuccess(true);
                        setSuccessMsg("Delete Successfull.")
                        setTimeout(()=>{
                            setCheckoutSuccess(false)
                        },2000)
                        setCartLists(newLists);
                    }else{
                        localStorage.setItem("ProductCarts",JSON.stringify([]));
                        setCartLists([]);
                        setCheckoutSuccess(true);
                        setSuccessMsg("Delete Successfull.")
                        setTimeout(()=>{
                            setCheckoutSuccess(false)
                        },2000)
                    }
                }
            }
        }
    }

    const checkoutSubmit=(e)=>{
        e.preventDefault();

        const lists=[...cartLists];


        const {
            paymentMethod,
            name,
            address,
            phone,
            note,
            location,
            insideDhaka
        }=customerInfo;

        if(paymentMethod && name  && address && phone && paymentMethod==="COD" && lists?.length && location){
            const obj={
                // coupon_code:"",
                // postal_code: "",
                // city: "",
                payment_method:paymentMethod?paymentMethod:"",
                delivery_charge:parseInt(location),
                name:name?name:"",
                mobile:phone?phone:"",
                full_address:address?address:"",
                customer_note:note?note:"",
                grand_total:parseFloat(totalPrice+parseInt(location)).toFixed(2),
                products:[]
            }

            let myLists=[];
            lists.map((dta)=>{
                const newOBJ={
                    product_id:dta?.product_id,
                    product_variant_id:dta?.product_variant_id,
                    quantity:dta?.quantity
                }
                myLists=[...myLists,newOBJ];
            })

            obj.products=myLists;

            // if(Token){
            //console.log("Post Object : ",obj)
            ConfigureAxios(Token);
            axios.post(`/public/orders`,JSON.stringify(obj))
            .then((response)=>{
               // console.log("order response: ",response);
                if(response.status===200){
                    getCartLists(Token)
                    setCheckoutSuccess(true);
                    setTimeout(()=>{
                        setCheckoutSuccess(false);
                        //window.location.href="/accounts"
                    },2000)
                    //alert("Order Completed Suffessfully.")
                    try{
                        localStorage.removeItem("ProductCarts");
                        setCartLists([]);
                    }catch{

                    }
                    router.push("/checkout-success")
                }
            }).catch((error)=>{
                //alert("Something Went Wrong.")
                setCheckoutError(true);
                setErrorMsg("Checkout Error.")
                setTimeout(()=>{
                    setCheckoutError(false);
                    //window.location.href="/accounts"
                },2000)
                //console.log("order error: ",error)
            })
    
        }else{
            setCheckoutError(true);
            setErrorMsg("Please fill the required field.");
            setTimeout(()=>{
                setCheckoutError(false);
                //window.location.href="/accounts"
            },2000)
            //alert("Please filled mandatory filed.")
        }
    }

    //console.log("Cart Lists : ",cartLists)
    return(
        <>
            {/* <Row>
                <Col
                className='checkout-container'
                >
                    <Row>
                        <Col>
                            <Form
                            className='contact-form'
                            >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label><sup>*</sup>{" "}Phone:</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="" 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Button
                                    className='checkout-submit-button'
                                    >
                                        LOGIN WITH OTP
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                        style={{
                            display:'flex',
                            //flexDirection:'row'
                        }}
                        className='break-section'
                        >
                            <hr
                            className='hr'
                            />
                            <h4 className='heading'>OR</h4>
                            <hr
                            className='hr'
                            />
                        </Col>
                    </Row>
                </Col>
            </Row> */}
            <Row
            style={{
                paddingTop:"50px",
                paddingBottom:"50px"
            }}
            >
                <Col
                className="billing-shipping-container"
                >
                    <Row>
                        <Col 
                        lg={6} 
                        xs={12}
                        className='checkout-middle-container left-container card'
                        >
                            <h3 className="billing-title">BILLING & SHIPPING</h3>
                            <Row
                            className='form-container'
                            >
                                <Col>
                                    <Row>
                                        <Col 
                                        xl={12}
                                        xs={12}
                                        >
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                                                <Form.Label className={`checkout-require-input ${customerInfo?.name?'':'is-empty'}`}>NAME {" "}<sup>*</sup></Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                placeholder=""
                                                name="name"
                                                className="form-input-text"
                                                value={customerInfo.name}
                                                onChange={onValueChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col 
                                        xl={12}
                                        xs={12}
                                        >
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                                <Form.Label className={`checkout-require-input ${customerInfo?.phone?'':'is-empty'}`}>PHONE {" "}<sup>*</sup></Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                placeholder=""
                                                name="phone"
                                                className="form-input-text"
                                                value={customerInfo.phone}
                                                onChange={onValueChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col 
                                        xl={12}
                                        xs={12}
                                        >
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                                <Form.Label className={`checkout-require-input ${customerInfo?.address?'':'is-empty'}`}>ADDRESS {" "}<sup>*</sup></Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                placeholder=""
                                                name="address"
                                                className="form-input-text"
                                                value={customerInfo.address}
                                                onChange={onValueChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col 
                                        xl={12}
                                        xs={12}
                                        >
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                                <Form.Label className={`checkout-require-input`}>ORDER NOTE (OPTIONAL)</Form.Label>
                                                <Form.Control 
                                                as="textarea" 
                                                rows={2} 
                                                name="note"
                                                className="form-input-text"
                                                value={customerInfo.note}
                                                onChange={onValueChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col 
                                        xl={12}
                                        xs={12}
                                        >
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                                <Form.Label className={`checkout-require-input ${customerInfo?.location?'':'is-empty'}`}>BILLING METHOD {" "}<sup>*</sup></Form.Label>
                                                <Form.Select 
                                                aria-label="Default select example"
                                                onChange={onValueChange}
                                                name="location"
                                                className="form-input-text"
                                                value={customerInfo.location}
                                                >
                                                    <option>Choose Shipping Method</option>
                                                    <option value="150">Delivery Outside Dhaka.</option>
                                                    <option value="80">Delivery Inside Dhaka.</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col 
                                        xl={12}
                                        xs={12}
                                        >
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                                <Form.Label className={`checkout-require-input ${customerInfo?.paymentMethod?'':'is-empty'}`}>SHIPPING METHOD {" "}<sup>*</sup></Form.Label>
                                                <Form.Select 
                                                aria-label="Default select example"
                                                value={customerInfo.paymentMethod}
                                                name="paymentMethod"
                                                className="form-input-text"
                                                onChange={onValueChange}
                                                >
                                                    <option>Choose Billing Method</option>
                                                    <option value="COD">Cash On Delivery</option>
                                                    <option value="BKASH">bKash</option>
                                                    <option value="CARD">Pay with Card /Mobile Wallet</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col
                                        >
                                            <Button
                                            style={{
                                                width:'100%'
                                            }}
                                            onClick={checkoutSubmit}
                                            disabled={cartLists?.length?false:true}
                                            className='buy-more-button'
                                            >
                                                Confirm Order
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col 
                        lg={6} 
                        xs={12}
                        className="checkout-middle-container right-container card"
                       
                        >
                            <Row>
                                <Col
                                style={{
                                    position:'sticky',
                                    display:'flex',
                                    zIndex:'10'
                                }}
                                >
                                    <h3 className="billing-title">Your Order</h3>
                                    <h3
                                    style={{
                                        position:'absolute',
                                        right:'6px',
                                        padding:'2px 8px',
                                        backgroundColor:'purple',
                                        borderRadius:'50px',
                                        color:'#fff'
                                    }} 
                                    >
                                        <b>{totalQty?totalQty:0}</b>
                                    </h3>
                                </Col>
                            </Row>
                            <Row
                            className='form-container'
                            style={{
                                maxHeight:"70vh",
                                overflowY:'auto',
                                overflowX:'hidden'
                            }}
                            >
                                <Col>
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
                                                    <Col 
                                                    xs={9}
                                                    style={{
                                                        position:'relative',
                                                        float:'left'
                                                    }}
                                                    >
                                                        <Row>
                                                            <Col 
                                                            xs={10}
                                                            >
                                                                <span className='cart-name-title-text'>
                                                                    {dta?.name?dta.name:""}
                                                                </span>
                                                            </Col>
                                                            <Col
                                                            xs={2}
                                                            >
                                                                <Image
                                                                src="/cart_remove_icon.png"
                                                                height={20}
                                                                width={20}
                                                                alt="Cart Remove."
                                                                onClick={()=>{
                                                                   // setIsShow(true);
                                                                    //setRemoveData(dta);
                                                                    handleRemoveCart(dta);
                                                                }}
                                                                className="cart-item-remover"
                                                                >
                                                                </Image>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col 
                                                            xs={5}
                                                            >
                                                                <span className='cart-name-title-text'>
                                                                    ৳<b>{dta?.price?parseFloat(dta.discount_price).toFixed(2):""}</b>
                                                                </span>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                            <Card.Footer className="text-muted">
                                            <span className='cart-items-footer-text'>৳ 
                                                {dta?.price && dta?.quantity?parseFloat(parseFloat(dta.discount_price)*dta.quantity).toFixed(2):""}
                                            </span>
                                            </Card.Footer>
                                        </Card>
                                    }):<NotFoundItem
                                    />
                                }
                                <Card>
                                    <Card.Body>
                                    <Row>
                                        <Col 
                                        xs={6}
                                        >
                                            <span>Delivery Charge</span>
                                        </Col>
                                        <Col 
                                        xs={6}
                                        style={{
                                            textAlign:'right'
                                        }}
                                        >
                                            <span className='cart-items-footer-text'>
                                                {customerInfo?.location?customerInfo.location:0}
                                            </span>
                                        </Col>
                                    </Row>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">
                                            <Row>
                                                <Col
                                                xs={6}
                                                lg={6}
                                                >
                                                    <span className='cart-items-footer-text'>
                                                        <b>Total</b>
                                                    </span>
                                                </Col>
                                                <Col
                                                xs={6}
                                                lg={6}
                                                style={{
                                                    textAlign:'right'
                                                }}
                                                >
                                                    <span className='cart-items-footer-text'>
                                                        ৳ {totalPrice?customerInfo?.location?
                                                        parseFloat(totalPrice+parseInt(customerInfo.location)).toFixed(2)
                                                        :parseFloat(totalPrice).toFixed(2):0}
                                                    </span>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                style={{
                                    position:'sticky',
                                    display:'flex',
                                    zIndex:'10'
                                }}
                                >
                                    <Link
                                    href={"/products?page=1&per_page=10"}
                                    style={{
                                        width:'100%'
                                    }}
                                    >
                                        <Button
                                        style={{
                                            width:'100%'
                                        }}
                                        className='buy-more-button'
                                        >
                                            Buy More
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/*<Row
            style={{
                paddingBottom:'30px'
            }}
            >
                <Col
                className="billing-shipping-container"
                >
                    <Row
                    className='form-container'
                    >
                        <Row>
                            <Col
                            className='option-container'
                            >
                                <h4 className='title'>YOUR ORDER</h4>
                                <span className='cupon'>Have Coupon?</span>
                                <Row>
                                    <Col 
                                    xl={6}
                                    xs={12}
                                    className="right-side side"
                                    >
                                        <h3 className='inner-title'>Choose Shipping Method</h3>
                                        <Row>
                                            <Col 
                                            xl={6}
                                            xs={8}
                                            >
                                                <Form.Check
                                                inline
                                                label="Delivery Outside Dhaka:"
                                                name="group1"
                                                type={"radio"}
                                                onChange={(e)=>{
                                                    let lists={...customerInfo};

                                                    lists.insideDhaka=false;
                                                    setCustomerInfo(lists)
                                                }}
                                                checked={customerInfo.insideDhaka?false:true}
                                                id={`inline-radio-1`}
                                                />
                                            </Col>
                                            <Col 
                                            xl={6}
                                            xs={4}
                                            style={{
                                                textAlign:'right'
                                            }}
                                            >
                                                <span>৳ 49.00</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col 
                                            xl={6}
                                            xs={8}
                                            >
                                                <Form.Check
                                                inline
                                                label="Delivery Inside Dhaka:"
                                                name="group1"
                                                type={"radio"}
                                                onChange={(e)=>{
                                                    let lists={...customerInfo};

                                                    lists.insideDhaka=true;
                                                    setCustomerInfo(lists)
                                                }}
                                                checked={customerInfo.insideDhaka?true:false}
                                                id={`inline-radio-2`}
                                                />
                                            </Col>
                                            <Col 
                                            xl={6}
                                            xs={4}
                                            style={{
                                                textAlign:'right'
                                            }}
                                            >
                                                <span>৳ 49.00</span>
                                            </Col>
                                        </Row>
                                        <Row
                                        style={{
                                            marginTop:"25px"
                                        }}
                                        >
                                            <Col 
                                            xl={6}
                                            xs={6}
                                            >
                                                <h4>Cart Total:</h4>
                                            </Col>
                                            <Col 
                                            xl={6}
                                            xs={6}
                                            style={{
                                                textAlign:'right'
                                            }}
                                            >
                                                <span>৳ {totalPrice?parseFloat(totalPrice).toFixed(2):0.00}</span>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row
                                        >
                                            <Col 
                                            xl={6}
                                            xs={6}
                                            >
                                                <h4>Grand Total</h4>
                                            </Col>
                                            <Col 
                                            xl={6}
                                            xs={6}
                                            style={{
                                                textAlign:'right'
                                            }}
                                            >
                                                <span>৳ {totalPrice?parseFloat(totalPrice+49).toFixed(2):0.00}</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col 
                                    xl={6}
                                    xs={12}
                                    className="left-side side"
                                    >
                                        <h3 className='inner-title'>Choose Billing Method</h3>
                                        <Form.Check
                                        inline
                                        label="Cash On Delivery"
                                        name="group2"
                                        type={"radio"}
                                        onChange={(e)=>{
                                            let lists={...customerInfo};

                                            lists.paymentMethod="COD";
                                            setCustomerInfo(lists)
                                        }}
                                        checked={customerInfo.paymentMethod==="COD"?true:false}
                                        id={`inline-radio-3`}
                                        />
                                        <Form.Check
                                        inline
                                        label="bKash"
                                        name="group2"
                                        type={"radio"}
                                        onChange={(e)=>{
                                            let lists={...customerInfo};

                                            lists.paymentMethod="BKASH";
                                            setCustomerInfo(lists)
                                        }}
                                        checked={customerInfo.paymentMethod==="BKASH"?true:false}
                                        id={`inline-radio-4`}
                                        />
                                        <Form.Check
                                        inline
                                        label="Pay with Card /Mobile Wallet"
                                        name="group2"
                                        type={"radio"}
                                        onChange={(e)=>{
                                            let lists={...customerInfo};

                                            lists.paymentMethod="PCARD";
                                            setCustomerInfo(lists)
                                        }}
                                        checked={customerInfo.paymentMethod==="PCARD"?true:false}
                                        id={`inline-radio-5`}
                                        />

                                        <span
                                        style={{
                                            margin:"5px 0px"
                                        }}
                                        >Before confirming Your Order Please Check Our terms & conditions for Return Policy *</span>
                                        <Button
                                        className='checkout-submit-button'
                                        onClick={checkoutSubmit}
                                        disabled={cartLists?.length?false:true}
                                        >
                                            PLACE ORDER
                                        </Button>
                                    </Col>
                                </Row>
                            
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>*/}
            <SuccessToaster 
            IsShow={checkoutSuccess} 
            ToastMsg={`${successMsg?successMsg:"Checkout Success."}`}
            Postion={"top-end"}/>
            <WarningToaster 
            IsShow={checkoutError} 
            ToastMsg={`${errorMsg?errorMsg:"Checkout Error."}`}
            Width={'20vw'}
            Postion={"top-end"}/>
        </>
    )
}
export default CheckoutMain;

