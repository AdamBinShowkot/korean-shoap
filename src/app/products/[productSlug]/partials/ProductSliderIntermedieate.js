'use client';
import React,{
    useState,
    useEffect
} from "react";
import axios from 'axios';
import ConfigureAxios from "@/utils/axiosConfig";
import FooterProductSlider from "./ProductsSlider";

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
            <FooterProductSlider
            product_lists={brands.length?brands:[]}
            len={brands?.length?brands.length:0}
            />
        </>
    )
}
export default ProductSliderIntermediate;