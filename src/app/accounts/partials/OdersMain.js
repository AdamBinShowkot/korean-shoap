'use client';
import React from 'react';
import {
    Row,
    Col,
    Table 
} from 'react-bootstrap';


const OrdersMain=({items})=>{
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
                    <strong>My Orders</strong>
                </Col>
            </Row>
            <Row
            style={{
                padding:'0px 0px 5px 0px',
                marginTop:'10px'
            }}
            >
                <Col>
                    <Table striped bordered hover variant="white">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Invoice No</th>
                            <th>Total Item</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items?.length?items.map((dta,index)=>{
                                    return <tr
                                    key={dta.id}
                                    >
                                            <td>{index+1}</td>
                                            <td>{dta?.order_number}</td>
                                            <td>{dta?.total_item}</td>
                                            <td>{dta?.total_amount}</td>
                                            <td>{dta?.status}</td>
                                        </tr>
                                }):"No Data Found."
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    )
}
export default OrdersMain;