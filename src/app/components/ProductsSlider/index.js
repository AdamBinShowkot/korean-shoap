import React from 'react';
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
    const response=axios.get('/public/top/products?page=1&per_page=20').then((res)=>{
        if(res.status===200){
            return res.data?.items;
        }
    });

    return response;
}
const ProductsSlider=async()=>{
    const dataLists=await getProductLists();
    //console.log("Data: ",dataLists)
    return(
        <>
            <SliderProducts lists={dataLists}/>
        </>
    )
}
export default ProductsSlider;