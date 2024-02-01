'use client';
import React,{
    useState,
    useEffect,
    useContext
} from 'react';
import {
    Row,
    Col,
    Button
} from 'react-bootstrap';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';



const AddToBug=({data})=>{
    const {cartLists,setCartLists}=useContext(AddToCartContext);

    useEffect(()=>{

    },[])


    return(
        <>
            <Row>
                <Col 
                xs={12}
                style={{
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center'
                }}
                >
                    <Button
                    className='add-to-bag-button'
                    >
                        Add To Bag
                    </Button>
                    <Button
                    className='buy-now-button'
                    >
                        Buy Now
                    </Button>
                </Col>
                    </Row>
        </>
    )
}
export default AddToBug;