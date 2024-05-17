'use client';
import React,{
    useState,
    useEffect
} from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import PlaceHolder from '@/app/ui/PlaceHolder';
import NotFoundComponent from '@/app/ui/NotFound';
import ConfigureAxios from '@/utils/axiosConfig';
import BrandCard from '@/app/ui/BrandCard';
import axios from 'axios';
import './index.scss';

const BrandIndex=()=>{
    const [brandLists,setBrandLists]=useState([]);
    const [dummyProducts,setDummyproducts]=useState([
        {
            id:1
        },
        {
            id:2
        },
        {
            id:3
        },
        {
            id:4
        },
        {
            id:5
        }
    ]);

    useEffect(()=>{
        ConfigureAxios();
        getBrandLists();
    },[])

    const getBrandLists=async()=>{
        const lists=await axios.get(`/public/brand/list?page=1&per_page=20`).then((response)=>{
            if(response.status==200){
               // console.log(response)
                if(response.data.items.length){
                    const datas=response.data.items;
                    setBrandLists(datas)
                    setDummyproducts([])
                    //return datas;
                }else{
                    setBrandLists([])
                    setDummyproducts([])
                }
                //return []
            }
        }).catch((error)=>{
            console.log("get brand lists error.");
            setBrandLists([])
            setDummyproducts([])
            //return []
        })
        return lists;
    }
   


    return(
        <>
            <Row>
                <Col 
                xs={12}
                className="products-bottom-container-col"
                >
                    {
                        brandLists?.length?(
                            brandLists.map((dta)=>{  
                            return <Col 
                                key={dta.id} 
                                xs={6}
                                lg={2}
                                >
                                    <BrandCard
                                    IsBrand={true}
                                    IsSkinConcern={false}  
                                    data={dta}/>
                                </Col>
                            })
                        ):dummyProducts?.length?dummyProducts.map((dta)=>{
                            return <div key={dta.id}>
                                <PlaceHolder/>
                            </div>
                        }):""
                    }
                </Col>
            </Row>
        </>
    )
}
export default BrandIndex;