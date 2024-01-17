'use client';
import React,{useEffect, useState} from 'react';
import {
    Tab,
    Tabs,
    Col,
    Row
} from 'react-bootstrap';
import StarComponent from './partials/Starrating';


const ProductHover=({lists})=>{
    //console.log("L",lists)
    const [key,setKey]=useState('home')
    
    useEffect(()=>{
        if(lists.length){
            setKey(lists[0])
        }
    },[lists]);

    return(
        <>
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
            >
                {lists.length?lists.map((dta)=>{
                    return <Tab 
                        eventKey={`${dta}`} 
                        title={`${dta}`}
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
                    }):(
                  
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
            
                 
                )}
            </Tabs>
        </>
    )
}
export default ProductHover;