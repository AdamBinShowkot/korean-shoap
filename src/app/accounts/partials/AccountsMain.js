'use client';
import React, { 
    useEffect,
    useState
} from 'react';
import {
    Row,
    Col,
    Nav,
    Tab,
    Button
} from 'react-bootstrap';
import { 
    useRouter 
} from 'next/navigation'
import DashboardMain from './DashboardMain';
import ConfigureAxios from '@/utils/axiosConfig';
import axios from 'axios';
import './index.scss'


const AccountsMain=({Token})=>{
    const router=useRouter();

    const [userInfo,setUserInfo]=useState({});

    useEffect(()=>{
        if(Token){
            ConfigureAxios(Token);
            axios.get(`/my-info`)
            .then((response)=>{
                if(response.status===200){
                    console.log(response.data)
                    const {data}=response;

                    if(data?.id){
                        setUserInfo(data);
                    }else{
                        setUserInfo({})
                    }
                }
            }).catch((error)=>{

            })
        }
    },[])
    return(
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">DASHBOARD</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Orders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Account Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">Logout</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col 
                    sm={9}
                    className="accounts-content-container"
                    >
                        <Tab.Content>
                            <Tab.Pane 
                            eventKey="first"
                            >
                                <DashboardMain
                                UserInfo={userInfo}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                Orders tab content
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                Account Details tab content
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <Button
                                className="user-logout-button"
                                onClick={()=>{
                                    localStorage.clear();
                                    //router.push("/accounts")
                                    window.location.href="/accounts"
                                }}
                                >
                                    Logout
                                </Button>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
        </>
    )
}
export default AccountsMain;