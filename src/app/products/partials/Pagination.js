'use client';
import React,{
    useContext
} from 'react';
import { 
    ProductsContextApi 
} from '@/contextApi/productsApi';
import {
    Row,
    Col,
    Pagination
} from 'react-bootstrap';
import './index.scss';

const PaginationMain=()=>{
    const {page,setPage}=useContext(ProductsContextApi);
    return(
        <>
            <Pagination
            // onClick={(e)=>{
            //     console.log(e)
            // }}
            >
                <Pagination.Prev />
                <Pagination.Item 
                key={1}
                onClick={()=>{
                    setPage(1)
                }}
                active={page==1}
                >
                    {1}
                </Pagination.Item>
                <Pagination.Item 
                key={2}
                onClick={()=>{
                    setPage(2)
                }}
                active={page==2}
                >
                    {2}
                </Pagination.Item>
                <Pagination.Item 
                key={3}
                onClick={()=>{
                    setPage(3)
                }}
                active={page==3}
                >
                    {3}
                </Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </>
    )
}
export default PaginationMain;