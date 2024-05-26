'use client';
import React,{
    useState,
    useEffect
} from "react";
import {
    Col
} from 'react-bootstrap';
import axios from 'axios';
import ConfigureAxios from "@/utils/axiosConfig";
import FooterProductSlider from "./ProductsSlider";
import './index.scss';

const ProductSliderIntermediate=({brand})=>{
    //console.log("Brand:: ",brand);
    const [brands,setBrands]=useState([]);


    useEffect(()=>{
        ConfigureAxios();
        const slugs=brand.slug;
        getInitiData(slugs);
    },[]);

    const getInitiData=async(slugs)=>{
        axios.get(`/public/brand/products/${slugs}`)
        .then((res)=>{
            //console.log("Response : ",res);
            if(res.status==200){
                const {
                    items
                }=res.data;

                if(items?.length){
                    setBrands(items);
                }else{
                    setBrands([]);
                }
            }
        }).catch((error)=>{
            console.log("Get Brand Lists Error.");
        })
    }


    
    return(
        <>
          {
            brands?.length?<>
                <hr className='product-details-hr'/>
                <h2
                className="product-details-heading"
                >From Same Brand</h2>
                <div
                className="product-details-hr-div"
                />
        
                <div
                className="products-footer-slider-area"
                >
                    <Col xs={12}>
                    {
                        brands?.length?<FooterProductSlider
                        product_lists={brands.length?brands:[]}
                        len={brands?.length?brands.length:0}
                        />:<h3>Not Brand Item Found.</h3>
                    }
                        
                    </Col>
                </div> 
            </>:""
          }
        </>
    )
}
export default ProductSliderIntermediate;