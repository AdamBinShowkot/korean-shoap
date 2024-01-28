'use client'
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
        data[name]=[value];

        setRegistrationInfo(data);
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
                            <Form.Label><sup>*</sup>{" "}Mobile:</Form.Label>
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