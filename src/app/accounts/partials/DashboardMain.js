'use client';
import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';


const DashboardMain=({UserInfo})=>{
    return(
        <>
            <Row
            style={{
                padding:'0px 0px 5px 0px',
                borderBottom:'1px solid #e5e5e5',
                paddingLeft:'0px !important',
                borderStyle:'dashed'
            }}
            >
                <Col>
                    <strong>Dashboard</strong>
                </Col>
            </Row>
            <Row
            style={{
                padding:'0px 0px 5px 0px',
            }}
            >
                <Col>
                    <span>Hello , <b>{UserInfo?.name}</b></span><br/>
                    <span>
                        From your account dashboard. You can easily check & view your recent orders , 
                        manage your shipping and billing address and edit your password and account details .
                    </span>
                </Col>
            </Row>
        </>
    )
}
export default DashboardMain;