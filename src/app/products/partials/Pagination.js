'use client';
import React from 'react';
import {
    Row,
    Col,
    Pagination
} from 'react-bootstrap';
import './index.scss';

const PaginationMain=()=>{
    return(
        <>
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </>
    )
}
export default PaginationMain;