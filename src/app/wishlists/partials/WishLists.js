'use client';
import React,{
    useState,
    useEffect,
    useContext
} from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import ProductCard from './ProductCard';
import { 
    WishListsContextApi 
} from '@/contextApi/widhListsContext';
import './index.scss';



const WishLists=()=>{
    const {wishLists,setWishLists}=useContext(WishListsContextApi);

    return(
        <>
            <Row>
                <Col
                className="wishlist-container"
                >
                    <Row>
                        <Col>
                            <h3
                            className="wishlist-header-title"
                            >
                                Wishlist
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                        style={{
                            display:"flex",
                            flexWrap:'wrap'
                        }}
                        >
                           
                            {
                                wishLists?.length?(
                                    wishLists.map((dta,index)=>{
                                        return <ProductCard 
                                        key={dta.id} 
                                        data={dta}
                                        IsOdd={(index+1)%2==0?false:true}
                                        />
                                    })
                                ):""
                            }
                        </Col> 
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default WishLists;