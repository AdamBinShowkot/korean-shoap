'use client';
import React,{useState,useEffect} from 'react';
import {
    Row,
    Col,
    Tabs,
    Tab
} from 'react-bootstrap';
import parse from 'html-react-parser';
import './index.scss';


const ProductDetailsTabs=({data})=>{
    const {ingredients}=data;
    const ingredients_len=ingredients?.length;
    //console.log("Data::: ",data);
    return(
        <>

            <Tabs
            defaultActiveKey="Description"
            id="uncontrolled-tab-example"
            className="mb-3 product-details-tab"
            >
                <Tab 
                eventKey="Description" 
                title={`Description`}

                >
                    <span
                    className="product-details"
                    >
                        {data?.long_description?parse(data.long_description):""}
                    </span>
                </Tab>
                <Tab eventKey="higlightedIngredients" title={`Highlighted Ingredients`}>
                    <span
                    className="product-details"
                    >
                        <p>
                            {data?.ingredients?.length?data.ingredients.map((d,index)=>{
                                if(ingredients_len-1==index){
                                    return d?.name+' .';
                                }else{
                                    return d?.name+' , ';
                                }
                            }):""}
                        </p>
                    </span>
                </Tab>
                <Tab eventKey="howToUse" title={`How To Use`}>
                    <span
                    className='product-details'
                    >
                        {data?.how_to_use?parse(data.how_to_use):""}
                    </span>
                </Tab>
            </Tabs>
        </>
    )
}
export default ProductDetailsTabs;