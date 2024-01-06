'use client'
import React from 'react';
import {
    Row,
    Col,
    Tab,
    Tabs,
    Pagination 
} from 'react-bootstrap';
import ListMain from './List';
import './index.scss';

const CommentMain=()=>{
    return(
        <>
            <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
            >
                <Tab eventKey="home" title={`Reviews (12)`}>
                    <ListMain/>
                    <hr className='comment-footer-hr'/>
                    <ListMain/>
                    <hr className='comment-footer-hr'/>
                    <ListMain/>
                    <Row>
                        <Col 
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            padding:'40px 0px 20px'
                        }}
                        >
                            <Pagination>
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Next />
                            </Pagination>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="profile" title={`Questions (0)`}>
                 Tab content for Profile
                </Tab>
            </Tabs>
        </>
    )
}
export default CommentMain;