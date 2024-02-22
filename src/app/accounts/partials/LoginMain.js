'use client';
import React,{
    useEffect,
    useState,
    useContext
} from 'react';
import {
    Row,
    Col,
    Form,
    Button,
    Toast,
    ToastContainer
} from 'react-bootstrap';
import axios from 'axios';
import queryString from 'query-string';
import SuccessToaster from '@/app/ui/SuccessToaster';
import WarningToaster from '@/app/ui/WarningToaster';
import ErrorToaster from '@/app/ui/ErrorToaster';
import { 
    UserInfoContextApi 
} from '@/contextApi/userInfoApi';
import ConfigureAxios from '@/utils/axiosConfig';
import Image from 'next/image';
import { 
    useRouter 
} from 'next/navigation';

const LoginMain=()=>{
    const {userInfo,setUserInfo}=useContext(UserInfoContextApi);
    const [showA, setShowA] = useState(true);
    const [loginSuccess,setLoginSuccess]=useState(false);
    const [loginWarning,setLoginWarning]=useState(false);
    const [loginError,setLoginError]=useState(false);

    const [userInfos,setUserInfos]=useState({
        phone:"",
        password:""
    });

    const handleOnLoginChange=(e)=>{
        //console.log("DD",e.target);
        const {name,value}=e.target;

        console.log(name,value)
        let info={...userInfos};

        info[name]=value;

        setUserInfos(info);

    }

    const handleOnSubmit=(e)=>{
        //console.log("Called",userInfos)
        e.preventDefault();

       ConfigureAxios();

        if(userInfos.phone && userInfos.password){
            const data={
                email_or_mobile:userInfos.phone,
                password:userInfos.password?userInfos.password:''
            }
            //console.log(data)
            axios.post(`/public/login`,JSON.stringify(data))
            .then((response)=>{
                console.log(response)
                if(response.status===200 && response.data){
                    //console.log(response.data)
                    const {token}=response.data;
                    localStorage.setItem("token",token);
                    setUserInfo(response.data);
                   
                    setLoginSuccess(true);
                    setTimeout(()=>{
                        setLoginSuccess(false);
                        window.location.href="/accounts"
                    },2000)
                }else{
                    //alert("User Name or Password are wrongkkjkj.")
                }
            }).catch((error)=>{
                //alert("User Name or Password are wrong.")
                setLoginWarning(true);
                setTimeout(()=>{
                    setLoginWarning(false);
                },2000)
                console.log("error: ",error)
            })
        }else{

        }

    }
    return(
        <>
            <Row>
                <Col>
                    <Form
                    className="contact-form"
                   
                    >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className={`checkout-require-input ${userInfo?.phone?'':'is-empty'}`}><sup>*</sup>{" "}Phone/Email:</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="phone"
                            name="phone"
                            value={userInfos.phone}
                            onChange={handleOnLoginChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                            <Form.Label className={`checkout-require-input ${userInfo?.password?'':'is-empty'}`}><sup>*</sup>{" "}Password:</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="password"
                            name="password"
                            value={userInfos.password}
                            onChange={handleOnLoginChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                            <Button
                            //className='checkout-submit-button'
                            className="login-register-button"
                            onClick={handleOnSubmit}
                            >
                                LOGIN
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <SuccessToaster 
            IsShow={loginSuccess} 
            ToastMsg="Login Success" 
            Postion={"top-end"}/>
            <WarningToaster 
            IsShow={loginWarning} 
            ToastMsg="Email/Phone or Password Are Wrong."
            Width={'25vw'}
            Postion={"top-end"}/>
            {/* <ErrorToaster 
            IsShow={false} 
            ToastMsg="Email/Phone or Password Are Wrong."
            Width={'25vw'}
            Postion={"top-end"}/> */}
        </>
    )
}
export default LoginMain;