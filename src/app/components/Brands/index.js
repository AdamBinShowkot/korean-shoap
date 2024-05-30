'use client';
import React,{
    useState,
    useEffect
} from 'react';
import {
    Row,
    Col,
    Button
} from 'react-bootstrap';
import PlaceHolder from '@/app/ui/PlaceHolder';
import NotFoundComponent from '@/app/ui/NotFound';
import ConfigureAxios from '@/utils/axiosConfig';
import BrandCard from '@/app/ui/BrandCard';
import BrandCardTwo from '@/app/ui/BrandCardTwo';
import axios from 'axios';
import './index.scss';
import Link from 'next/link';

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
    const [categoryLists,setCategoryLists]=useState([]);
    const [dummyProducts2,setDummyproducts2]=useState([
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
        getCategoryLists();
    },[])

    const getBrandLists=async()=>{
        const lists=await axios.get(`/public/brand/list?page=1&per_page=10`).then((response)=>{
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

    const getCategoryLists=async()=>{
        const lists=await axios.get(`/public/category/list?page=1&per_page=10`).then((response)=>{
            if(response.status==200){
               // console.log(response)
                if(response.data.items.length){
                    const datas=response.data.items;
                    setCategoryLists(datas)
                    setDummyproducts2([])
                    //return datas;
                }else{
                    setCategoryLists([])
                    setDummyproducts2([])
                }
                //return []
            }
        }).catch((error)=>{
            console.log("get category lists error.");
            setCategoryLists([])
            setDummyproducts2([])
            //return []
        })
        return lists;
    }
   


    return(
        <>
            <Row>
                <Col
                xs={12}
                lg={12}
                className="products-bottom-container-column"
                //className="products-bottom-container-col"
                >
                    <Row>
                        <Col 
                        xs={12}
                        lg={6}
                        >
                            <div
                            className='brand-title-container'
                            >
                                <div
                                className='container left'
                                >
                                    <h2 className='brand-title'>Top 10 Brands.</h2>
                                </div>
                                <div
                                className='container right'
                                >
                                    <Link
                                    href={"/products/brands"}
                                    >
                                        <Button
                                        className='title-view-more'
                                        >
                                            View All Brands
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div
                            className='brand-title-hr-container'
                            >
                                <div
                                className='brand-title-hr'
                                >
                                </div>
                            </div>
                            <div
                            style={{
                                width:"100%"
                            }}
                            className="brands-category-inner-column"
                            >
                                {
                                    brandLists?.length?(
                                        brandLists.map((dta)=>{  
                                        return <Col 
                                            key={dta.id} 
                                            xs={6}
                                            lg={6}
                                            >
                                                <BrandCardTwo
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
                            </div>
                        </Col>
                        <Col 
                        xs={12}
                        lg={6}
                        >
                            <div
                            className='brand-title-container'
                            >
                                <div
                                className='container left'
                                >
                                    <h2 className='brand-title'>Top 10 Category.</h2>
                                </div>
                                <div
                                className='container right'
                                >
                                    <Link
                                    href={"/products/categories"}
                                    >
                                        <Button
                                        className='title-view-more'
                                        >
                                            View All Categories
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div
                            className='brand-title-hr-container'
                            >
                                <div
                                className='brand-title-hr'
                                >
                                </div>
                            </div>
                            <div
                            style={{
                                width:"100%"
                            }}
                            className="brands-category-inner-column"
                            >
                                {
                                    categoryLists?.length?(
                                        categoryLists.map((dta)=>{  
                                        return <Col 
                                            key={dta.id} 
                                            xs={6}
                                            lg={6}
                                            >
                                                <BrandCardTwo
                                                IsBrand={true}
                                                IsSkinConcern={false}  
                                                data={dta}/>
                                            </Col>
                                        })
                                    ):dummyProducts2?.length?dummyProducts2.map((dta)=>{
                                        return <div key={dta.id}>
                                            <PlaceHolder/>
                                        </div>
                                    }):""
                                }
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default BrandIndex;