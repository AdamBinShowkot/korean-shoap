'use client'
import React,{
    useState,
    useEffect
} from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import ConfigureAxios from '@/utils/axiosConfig';
import DetailsSingleSliderProduct from '@/app/ui/DetailsSingleSliderProduct';
import axios from 'axios';
import './index.scss';


const RelatedProducts=({related_products})=>{
    //console.log("Brand:: ",brand);
    // const [brands,setBrands]=useState([]);

    // useEffect(()=>{
    //     ConfigureAxios();
    //     const slugs=brand.slug;
    //     getInitiData(slugs);
    // },[]);

    // const getInitiData=async(slugs)=>{
    //     axios.get(`/public/brand/products/${slugs}`)
    //     .then((res)=>{
    //         //console.log("Response : ",res);
    //         if(res.status==200){
    //             const {
    //                 items
    //             }=res.data;

    //             if(items?.length){
    //                 setBrands(items);
    //             }else{
    //                 setBrands([]);
    //             }
    //         }
    //     }).catch((error)=>{
    //         console.log("Get Brand Lists Error.");
    //     })
    // }
    return(
        <>
            <Row>
                <Col
                className='related-product-column'
                >
                    
                    {
                        related_products?.length?related_products.map((dta)=>{
                            return <DetailsSingleSliderProduct key={dta.id} data={dta} />
                        }):<h3>Products Not Found.</h3>
                    }
            
                </Col>
            </Row>
        </>
    )
}
export default RelatedProducts;
