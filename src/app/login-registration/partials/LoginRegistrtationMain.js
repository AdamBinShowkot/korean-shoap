import React from 'react';
import { 
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
import LoginMain from './LoginMain';
import RegistrationMain from './RegistrationMain';
import LoginWithOthers from './LoginWithOthers';

const LoginRegistrationMain=()=>{
    return(
        <>
            <LoginWithOthers/>
            <Row>
                <Col
                className="login-register-inner"
                >
                    <LoginMain/>
                </Col>
                <Col
                className="login-register-inner"            
                >
                    <RegistrationMain/>
                </Col>
            </Row>
        </>
    )
}
export default LoginRegistrationMain