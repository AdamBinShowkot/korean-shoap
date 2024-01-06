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
    const response=axios.get('/public/feature-product/brand/1?page=1&per_page=2').then((res)=>{
        if(res.status===200){
            return res.data?.data?.feature_products;
        }
    });

    return response;
}
const ProductsSlider=async()=>{
    const dataLists=await getProductLists();
    //console.log("Data: ",dataLists)
    return(
        <>
            <SliderProducts />
        </>
    )
}
export default ProductsSlider;