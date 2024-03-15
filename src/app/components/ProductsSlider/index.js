'use client'
import React,{useEffect,useState} from 'react';
import {
    Card,
    Button
} from 'react-bootstrap';
import ConfigureAxios from '@/utils/axiosConfig';
import axios from 'axios';
import SliderProducts from './SliderProducts';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.scss';

async function getProductLists(){
    ConfigureAxios();
    const response=axios.get('/public/product-list?per_page=15&page=1').then((res)=>{
        if(res.status===200){
            return res.data?.items;
        }
    });

    return response;
}
const ProductsSlider=({})=>{
    const [lists,setLists]=useState([]);

    useEffect(()=>{
        ConfigureAxios();
        initLoading();
    },[])

    const initLoading=async()=>{
        const response=await axios.get('/public/product-list?per_page=15&page=1').then((res)=>{
            if(res.status===200){
                //console.log("Itemsss : ",res.data.items)
                return res.data?.items;
            }
        });

        if(response.length){
            setLists(response)
        }else{
            setLists([])
        }
    }
    //const dataLists=await getProductLists();
    //console.log("Data: ",dataLists)
    return(
        <>
            <SliderProducts lists={lists}/>
        </>
    )
}
export default ProductsSlider;