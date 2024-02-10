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
    Pagination,
    Button
} from 'react-bootstrap';
import './index.scss';
import Link from 'next/link';

const PaginationMain=({props})=>{
   // const {page,setPage}=useContext(ProductsContextApi);
    return(
        <>
            <Pagination
            // onClick={(e)=>{
            //     console.log(e)
            // }}
            >
                <Link
                // herf={`/products?${}`}
                href={`/products?${props.previousPageUrl}`}
                >
                    <Button
                    className={`page-next-prev-button `}
                    >
                        {"<"}
                    </Button>
                </Link>
                {
                    props.pagesArr?.length?props.pagesArr.map((dta)=>{
                        return <Link
                        key={dta.id}
                        href={`/products?page=${dta.page_no}&per_page=${props.per_page}`}
                        >
                            <Button
                            className={`pagination-button ${dta.id==props.currentPage?'pagination-active-lists':""}`}
                            >
                                {dta.id}
                            </Button>
                        </Link>
                    }):""
                }
                {/* <Pagination.Item 
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
                </Pagination.Item> */}
                {/* <Pagination.Next /> */}
                <Link
                // herf={`/products?${}`}
                href={`/products?${props.nextPagesUrl}`}
                >
                    <Button
                    className={`page-next-prev-button `}
                    >
                        {">"}
                    </Button>
                </Link>
            </Pagination>
        </>
    )
}
export default PaginationMain;