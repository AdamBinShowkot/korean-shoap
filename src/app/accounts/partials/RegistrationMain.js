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

const RegistrationMain=()=>{
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
    const handleRegistration=(e)=>{
        e.preventDefault();
        const {
            name,
            mobile,
            password
        }=registrationInfo;

        if(name && mobile && password){
            const myObj={
                name:name,
                email:mobile,
                password:password
            }

            ConfigureAxios();
            //console.log(myObj);
            axios.post(`/public/registration`,JSON.stringify(myObj))
            .then((response)=>{
                //console.log("Registration response: ",response);
                if(response.status===201){
                    alert(response.data)
                    window.location.href="/accounts"
                   // console.log(response.data)
                }
            }).catch((error)=>{
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
                            <Form.Label><sup>*</sup>{" "}Email:</Form.Label>
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
        </>
    )
}
export default RegistrationMain;