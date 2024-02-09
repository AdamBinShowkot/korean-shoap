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
        const categories=await getCategoryLists();
        const skinTypes=await getSkinTypeLists();
        const skinConcerns=await getConcernLists();
        const ingredients=await getIngredientsLists();
        const brands=await getBrandLists();

        if(categories.length){
            setCategoryLists(categories)
        }else{
            setCategoryLists([])
        }

        if(skinTypes.length){
            setSkinTypeLists(skinTypes)
        }else{
            setSkinTypeLists([])
        }

        if(skinConcerns.length){
            setSkinConernLists(skinConcerns)
        }else{
            setSkinConernLists([])
        }

        if(ingredients.length){
            setIngredientLists(ingredients)
        }else{
            setIngredientLists([])
        }

        if(brands.length){
            setBrandLists(brands)
        }else{
            setBrandLists([])
        }
        // console.log("Cat: ",categories);
        // console.log("Skin: ",skinTypes);
        // console.log("Concerns: ",skinConcerns);
        // console.log("Ingredients: ",ingredients);
        // console.log("Brands: ",brands);

    }
    const getCategoryLists=async()=>{
        const lists=await axios.get(`/public/category/list?page=1&per_page=20`).then((response)=>{
            if(response.status==200){
                //console.log(response)
                if(response.data.items.length){
                    const datas=response.data.items;
                    return datas;
                }
                return []
            }
        }).catch((error)=>{
            console.log("get category lists error.");
            return []
        })
        return lists;
    }
    const getSkinTypeLists=async()=>{
        const lists=await axios.get(`/public/skin-type/list?page=1&per_page=100`).then((response)=>{
            if(response.status==200){
               // console.log(response)
                if(response.data.items.length){
                    const datas=response.data.items;
                    return datas;
                }
                return []
            }
        }).catch((error)=>{
            console.log("get skin type lists error.");
            return []
        })
        return lists;
    }
    const getConcernLists=async()=>{
        const lists=await axios.get(`/public/skin-concern/list?page=1&per_page=100`).then((response)=>{
            if(response.status==200){
                //console.log(response)
                if(response.data.items.length){
                    const datas=response.data.items;
                    return datas;
                }
                return []
            }
        }).catch((error)=>{
            console.log("get skin concern lists error.");
            return []
        })
        return lists;
    }
    const getBrandLists=async()=>{
        const lists=await axios.get(`/public/brand/list?page=1&per_page=100`).then((response)=>{
            if(response.status==200){
               // console.log(response)
                if(response.data.items.length){
                    const datas=response.data.items;
                    return datas;
                }
                return []
            }
        }).catch((error)=>{
            console.log("get brand lists error.");
            return []
        })
        return lists;
    }
    const getIngredientsLists=async()=>{
        const lists=await axios.get(`/public/ingredient/list?page=2&per_page=100`).then((response)=>{
            if(response.status==200){
               // console.log(response)
                if(response.data.items.length){
                    const datas=response.data.items;
                    return datas;
                }
                return []
            }
        }).catch((error)=>{
            console.log("get ingredients lists error.");
            return []
        })
        return lists;
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
                                                href={`/products?category=${dta.slug}&page=1&per_page=10`}
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
                                                href={`/products?skin-concern=${dta.slug}&page=1&per_page=10`}
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
                                                href={`/products?skin-type=${dta.slug}&page=1&per_page=10`}
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
                                                href={`/products?ingredients=${dta.slug}&page=1&per_page=10`}
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
                                                href={`/products?brands=${dta.slug}&page=1&per_page=10`}
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