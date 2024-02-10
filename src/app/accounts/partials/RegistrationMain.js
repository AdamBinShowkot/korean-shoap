'use client'
import ConfigureAxios from '@/utils/axiosConfig';
import axios from 'axios';
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
import SuccessToaster from '@/app/ui/SuccessToaster';
import WarningToaster from '@/app/ui/WarningToaster';

const RegistrationMain=()=>{
    const [loginSuccess,setLoginSuccess]=useState(false);
    const [loginWarning,setLoginWarning]=useState(false);
    const [registrationInfo,setRegistrationInfo]=useState({
        name:"",
        mobile:"",
        password:""
    });

    const handleOnInputChange=(e)=>{
        const {name,value}=e.target;

        const data={...registrationInfo};
        data[name]=value;

        setRegistrationInfo(data);
    }
    const validateEmailAddress = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const handleRegistration=(e)=>{
        e.preventDefault();
        const {
            name,
            mobile,
            password
        }=registrationInfo;

        if(name && mobile && password){
            const isEmail=validateEmailAddress(mobile);
            let myObj={};
            if(isEmail){
                myObj={
                    name:name,
                    email:mobile,
                    password:password
                }
            }else{
                myObj={
                    name:name,
                    mobile:mobile,
                    password:password
                }
            }
            

            ConfigureAxios();
            //console.log(myObj);
            axios.post(`/public/registration`,JSON.stringify(myObj))
            .then((response)=>{
                //console.log("Registration response: ",response);
                if(response.status===201){
                    //alert(response.data)
                    //window.location.href="/accounts";
                    setLoginSuccess(true);
                    setTimeout(()=>{
                        setLoginSuccess(false);
                        window.location.href="/accounts"
                    },2000)
                   // console.log(response.data)
                }
            }).catch((error)=>{
                setLoginWarning(true);
                setTimeout(()=>{
                    setLoginWarning(false);
                },2000)
                console.log(error)
            })
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
                            <Form.Label><sup>*</sup>{" "}Name:</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder=""
                            name="name"
                            onChange={handleOnInputChange}
                            value={registrationInfo.name} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                            <Form.Label><sup>*</sup>{" "}Email/Phone:</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder=""
                            name="mobile"
                            onChange={handleOnInputChange}
                            value={registrationInfo.mobile} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                            <Form.Label><sup>*</sup>{" "}Password:</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder=""
                            name="password"
                            onChange={handleOnInputChange}
                            value={registrationInfo.password} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <span>
                                Your personal data will be used to support your experience throughout this website, to 
                                manage access to your account, and for other purposes described in our privacy policy.
                            </span>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
                            <Button
                            //className='checkout-submit-button'
                            className="login-register-button"
                            onClick={handleRegistration}
                            >
                                REGISTRATION
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <SuccessToaster 
            IsShow={loginSuccess} 
            ToastMsg="Registration Success" 
            Postion={"top-end"}/>
            <WarningToaster 
            IsShow={loginWarning} 
            ToastMsg="Registration Failed"
            Width={'22vw'}
            Postion={"top-end"}/>
        </>
    )
}
export default RegistrationMain;