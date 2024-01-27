'use client';
import React,{
    useEffect,
    useState
} from 'react';
import {
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
import axios from 'axios';
import queryString from 'query-string';
import ConfigureAxios from '@/utils/axiosConfig';

const LoginMain=()=>{
    const [userInfo,setUserInfo]=useState({
        phone:"",
        password:""
    });

    const handleOnLoginChange=(e)=>{
        //console.log("DD",e.target);
        const {name,value}=e.target;

        let info={...userInfo};

        info[name]=value;

        setUserInfo(info);

    }

    const handleOnSubmit=(e)=>{
        //console.log("Called",userInfo)
        e.preventDefault();

       ConfigureAxios();

        if(userInfo.phone && userInfo.password){
            const data={
                email_or_mobile:userInfo.phone,
                password:userInfo.password
            }
            axios.post(`/public/login`,{
                email_or_mobile:userInfo.phone,
                password:userInfo.password
            })
            .then((response)=>{
                console.log(response)
            }).catch((error)=>{
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
                            value={userInfo.phone}
                            onChange={handleOnLoginChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                            <Form.Label><sup>*</sup>{" "}Password:</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="password"
                            name="password"
                            value={userInfo.password}
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