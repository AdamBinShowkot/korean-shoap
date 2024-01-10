'use client'
import React,{
    useRef,
    useEffect,
    useState
} from "react";
import {
    Col,
    Row
} from 'react-bootstrap'
import FilterProduct from "@/app/ui/FilterProduct";
import './index.scss'

const SingleItem=({className,details})=>{
    return(
        <>
            <div 
            className={`grid-item isotope-items ${className}`}
            >
                <FilterProduct details={details}/>
            </div>
        </>
    )
}
export default SingleItem;

