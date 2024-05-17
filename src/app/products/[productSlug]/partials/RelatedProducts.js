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


const RelatedProducts=({brand})=>{
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
            console.log("Response : ",res);
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
            <Row>
                <Col
                className='related-product-column'
                >
                    
                    {
                        brands?.length?brands.map((dta)=>{
                            return <DetailsSingleSliderProduct key={dta.id} data={dta} />
                        }):""
                    }
            
                </Col>
            </Row>
        </>
    )
}
export default RelatedProducts;