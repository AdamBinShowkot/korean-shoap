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
import LoginMain from './LoginMain';
import RegistrationMain from './RegistrationMain';
import LoginWithOthers from './LoginWithOthers';
import AccountsMain from './AccountsMain';

const LoginRegistrationMain=()=>{
    const [userToken,setUserToken]=useState("");

    useEffect(()=>{
        const Token=localStorage.getItem("token");

        if(Token){
            setUserToken(Token)
        }else{
            setUserToken("");
        }
    },[])
    return(
        <>
            {
                userToken?(<AccountsMain Token={userToken}/>):(<>
                    <LoginWithOthers/>
                    <Row>
                        <Col
                        xl={6}
                        xs={12}
                        className="login-register-inner"
                        >
                            <LoginMain/>
                        </Col>
                        <Col
                        xl={6}
                        xs={12}
                        className="login-register-inner"            
                        >
                            <RegistrationMain/>
                        </Col>
                    </Row>
                </>)
            }
        </>
    )
}
export default LoginRegistrationMain