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
    Button
} from 'react-bootstrap';
import axios from 'axios';
import queryString from 'query-string';
import { 
    UserInfoContextApi 
} from '@/contextApi/userInfoApi';
import ConfigureAxios from '@/utils/axiosConfig';
import { 
    ToastContainer,
    toast
} from 'react-toastify';
import { 
    useRouter 
} from 'next/navigation';

const LoginMain=()=>{
    const {userInfo,setUserInfo}=useContext(UserInfoContextApi)
    const [userInfos,setUserInfos]=useState({
        phone:"",
        password:""
    });

    const handleOnLoginChange=(e)=>{
        //console.log("DD",e.target);
        const {name,value}=e.target;

        let info={...userInfos};

        info[name]=value;

        setUserInfos(info);

    }

    const handleOnSubmit=(e)=>{
        //console.log("Called",userInfos)
        e.preventDefault();

       ConfigureAxios();

        if(userInfos.phone){
            const data={
                email_or_mobile:userInfos.phone,
                password:userInfos.password?userInfo.password:''
            }
            axios.post(`/public/login`,JSON.stringify(data))
            .then((response)=>{
                console.log(response)
                if(response.status===200 && response.data){
                    //console.log(response.data)
                    const {token}=response.data;
                    localStorage.setItem("token",token);
                    setUserInfo(response.data);
                    alert("Login Success")
                    window.location.href="/accounts"
                    // toast('🦄 Wow so easy!', {
                    // position: "top-right",
                    // autoClose: 5000,
                    // hideProgressBar: false,
                    // closeOnClick: true,
                    // pauseOnHover: true,
                    // draggable: true,
                    // progress: undefined,
                    // theme: "light"
                    // });
                }else{
                    alert("User Name or Password are wrong.")
                }
            }).catch((error)=>{
                alert("User Name or Password are wrong.")
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
                            <Form.Label><sup>*</sup>{" "}Phone:</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="phone"
                            name="phone"
                            value={userInfos.phone}
                            onChange={handleOnLoginChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                            <Form.Label><sup>*</sup>{" "}Password:</Form.Label>
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
           
        </>
    )
}
export default LoginMain;