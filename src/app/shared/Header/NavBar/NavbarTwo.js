'use client'
import React, { useEffect, useState } from 'react';
import {
    Col,
    Container,
    NavDropdown,
    Dropdown,
    Row,
    Card,
} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import ConfigureAxios from '@/utils/axiosConfig';
import './index2.scss';

const NavBarTwo=()=>{
    const [categoryLists,setCategoryLists]=useState([]);
    const [skinTypeLists,setSkinTypeLists]=useState([]);
    const [skinConcernLists,setSkinConernLists]=useState([]);
    const [ingredientLists,setIngredientLists]=useState([]);
    const [brandLists,setBrandLists]=useState([]);

    useEffect(()=>{
        inittialLoad();
    },[])

    const inittialLoad=async()=>{
        ConfigureAxios();
        getCategoryLists();
        getSkinTypeLists();
        getConcernLists();
        getIngredientsLists();
        getBrandLists();



        // console.log("Cat: ",categories);
        // console.log("Skin: ",skinTypes);
        // console.log("Concerns: ",skinConcerns);
        // console.log("Ingredients: ",ingredients);
        // console.log("Brands: ",brands);

    }
    const getCategoryLists=async()=>{
        axios.get(`/public/category/list`).then((response)=>{
            if(response.status==200){
                //console.log(response)
                if(response.data.items.length){
                    const datas=response.data.items;
                    if(datas.length){
                        setCategoryLists(datas)
                    }else{
                        setCategoryLists([])
                    }
                    //return datas;
                }
                //setCategoryLists([])
            }
        }).catch((error)=>{
            console.log("get category lists error.");
            setCategoryLists([])
        })
    }
    const getSkinTypeLists=async()=>{
        axios.get(`/public/skin-type/list`).then((response)=>{
            if(response.status==200){
               // console.log(response)
                if(response.data.items.length){
                    const datas=response.data.items;
                    if(datas.length){
                        setSkinTypeLists(datas)
                    }else{
                        setSkinTypeLists([])
                    }
                }
                //setSkinTypeLists([])
            }
        }).catch((error)=>{
            console.log("get skin type lists error.");
            setSkinTypeLists([])
        })
    }
    const getConcernLists=async()=>{
        axios.get(`/public/skin-concern/list`).then((response)=>{
            if(response.status==200){
                //console.log(response)
                if(response.data.items.length){
                    const datas=response.data.items;
                    if(datas.length){
                        setSkinConernLists(datas)
                    }else{
                        setSkinConernLists([])
                    }
                }
                //setSkinConernLists([])
            }
        }).catch((error)=>{
            console.log("get skin concern lists error.");
            setSkinConernLists([])
        })
    }
    const getBrandLists=async()=>{
        axios.get(`/public/brand/list`).then((response)=>{
            if(response.status==200){
               // console.log(response)
                if(response.data.items.length){
                    const datas=response.data.items;
                    if(datas.length){
                        setBrandLists(datas)
                    }else{
                        setBrandLists([])
                    }
                }
                //setBrandLists([])
            }
        }).catch((error)=>{
            console.log("get brand lists error.");
            setBrandLists([])
        })
    }
    const getIngredientsLists=async()=>{
        axios.get(`/public/ingredient/list`).then((response)=>{
            if(response.status==200){
               // console.log(response)
                if(response.data.items.length){
                    const datas=response.data.items;
                    if(datas.length){
                        setIngredientLists(datas)
                    }else{
                        setIngredientLists([])
                    }
                }
               // setIngredientLists([])
            }
        }).catch((error)=>{
            console.log("get ingredients lists error.");
            setIngredientLists([])
        })
    }
    return(
        <>
            <Col
            className="navbar-container"
            >
                <ul class="exo-menu navbar-container">
                    {/* <li>
                        <a  href="#" className='category-menu-href'><i className="fa fa-home"></i> CATEGORIES</a>
                    </li> */}
                     <li className="mega-drop-down">
                        <a className="mega-menu-href" href="#">
                            <i className="fa fa-list"></i> CATEGORY
                            &nbsp;
                            <Image
                            src={'/downArrow.png'}
                            height={8}
                            width={14}
                            alt="Image"
                            className="navbar-arrow-image"
                            />
                        </a>
                        <div className="animated fadeIn mega-menu">
                            <div className="mega-menu-wrap">
                                <Row>
                                    <Col
                                    className="mega-menu-left-container"
                                    >
                                        {
                                            categoryLists?.length?categoryLists.map((dta)=>{
                                                return <Link 
                                                key={dta.id}
                                                href={`/products?category=${dta.name}&category_id=${dta.id}&IsFromMenu=1`}
                                                as={`/products?category=${dta.name}&category_id=${dta.id}&menu=1`}
                                                className="link-href"
                                                >
                                                    {dta.name}
                                                </Link>
                                            }):""
                                        }
                                    </Col>
                                </Row>
                            </div>	
                        </div>
                    </li>
                    <li className="mega-drop-down">
                        <a className="mega-menu-href" href="#">
                            <i className="fa fa-cogs"></i> SKIN CONCERN
                            &nbsp;
                            <Image
                            src={'/downArrow.png'}
                            height={8}
                            width={14}
                            alt="Image"
                            className="navbar-arrow-image"
                            />
                        </a>
                        <div className="animated fadeIn mega-menu">
                            <div className="mega-menu-wrap">
                                <Row>
                                    <Col
                                    className="mega-menu-left-container"
                                    >
                                        {
                                            skinConcernLists?.length?skinConcernLists.map((dta)=>{
                                                return <Link 
                                                key={dta.id}
                                                href={`/products?skin_concern=${dta.name}&skin_concern_id=${dta.id}&menu=1`}
                                                className="link-href"
                                                >
                                                    {dta.name}
                                                </Link>
                                            }):""
                                        }
                                        {/* <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Pores Care
                                        </Link>
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Acne & Spots Solution
                                        </Link>
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Moisturizing & Hydration Care
                                        </Link>
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Damaged Skin Repair
                                        </Link>
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                           Anti Agening & Wrinkle Care
                                        </Link> */}
                                    </Col>
                                </Row>
                            </div>	
                        </div>
                    </li>
                    <li className="mega-drop-down">
                        <a className="mega-menu-href" href="#">
                            <i className="fa fa-cogs"></i> SKIN TYPE
                            &nbsp;
                            <Image
                            src={'/downArrow.png'}
                            height={8}
                            width={14}
                            alt="Image"
                            className="navbar-arrow-image"
                            />
                        </a>
                        <div className="animated fadeIn mega-menu">
                            <div className="mega-menu-wrap">
                                <Row>
                                    <Col
                                    className="mega-menu-left-container"
                                    >
                                        {
                                            skinTypeLists?.length?skinTypeLists.map((dta)=>{
                                                return <Link 
                                                key={dta.id}
                                                href={`/products?skin_type=${dta.name}&skin_type_id=${dta.id}&menu=1`}
                                                className="link-href"
                                                >
                                                    {dta.name}
                                                </Link>
                                            }):""
                                        }
                                    </Col>
                                </Row>
                            </div>	
                        </div>
                    </li>
                    <li className="mega-drop-down">
                        <a className="mega-menu-href" href="#">
                            <i className="fa fa-briefcase"></i> INGREDIENTS
                            &nbsp;
                            <Image
                            src={'/downArrow.png'}
                            height={8}
                            width={14}
                            alt="Image"
                            className="navbar-arrow-image"
                            />
                        </a>
                        <div className="animated fadeIn mega-menu">
                            <div className="mega-menu-wrap">
                                <Row>
                                    <Col
                                    className="mega-menu-left-container"
                                    >
                                        {
                                            ingredientLists?.length?ingredientLists.map((dta)=>{
                                                return <Link 
                                                key={dta.id}
                                                href={`/products?ingredients=${dta.name}&ingredient_id=${dta.id}&menu=1`}
                                                className="link-href"
                                                >
                                                    {dta.name}
                                                </Link>
                                            }):""
                                        }
                                    </Col>
                                </Row>
                            </div>	
                        </div>
                    </li>
                    <li className="mega-drop-down">
                        <a className="mega-menu-href" href="#">
                            <i className="fa fa-list"></i> BRANDS
                            &nbsp;
                            <Image
                            src={'/downArrow.png'}
                            height={8}
                            width={14}
                            alt="Image"
                            className="navbar-arrow-image"
                            />
                        </a>
                        <div className="animated fadeIn mega-menu">
                            <div className="mega-menu-wrap">
                                <Row>
                                    <Col
                                    className="mega-menu-left-container"
                                    >
                                        {
                                            brandLists?.length?brandLists.map((dta)=>{
                                                return <Link 
                                                key={dta.id}
                                                href={`/products?brand=${dta.name}&brand_id=${dta.id}&menu=1`}
                                                className="link-href"
                                                >
                                                    {dta.name}
                                                </Link>
                                            }):""
                                        }
                                    </Col>
                                </Row>
                            </div>	
                        </div>
                    </li>
                </ul>
            </Col> 
        </>
    )
}
export default NavBarTwo;