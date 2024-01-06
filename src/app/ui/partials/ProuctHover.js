'use client';
import React,{useState} from 'react';
import {
    Tab,
    Tabs,
    Col,
    Row
} from 'react-bootstrap';
import StarComponent from './partials/Starrating';


const ProductHover=()=>{
    const [key,setKey]=useState('home')
    return(
        <>
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
                <Tab 
                eventKey="home" 
                title="150ml"
                >
                    <Row>
                        <Col 
                        xs={12}
                        className='display-flex-justify-content-align-item-center'
                        >
                            <StarComponent rate={3} size={14}/>
                        </Col>
                    </Row>
                </Tab>
                <Tab 
                eventKey="profile" 
                title="400ml"
                >
                    <Row>
                        <Col 
                        xs={12}
                        className='display-flex-justify-content-align-item-center'
                        >
                            <StarComponent rate={4} size={14}/>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </>
    )
}
export default ProductHover;