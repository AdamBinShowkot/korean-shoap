'use client';
import React,{
    useContext, useEffect, useState
} from 'react';
import {
    Col,
    Container,
    Row,
    FormControl,
    InputGroup,
    InputGroupText,
    Form,
    Button,
    Modal,
    Card,
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import { 
    UserInfoContextApi 
} from '@/contextApi/userInfoApi';
import ConfigureAxios from '@/utils/axiosConfig';
import SuccessToaster from '@/app/ui/SuccessToaster';
import ErrorToaster from '@/app/ui/ErrorToaster';
import axios from 'axios';
import { 
    baseImageServer 
} from '@/utils/config';
import WarningModal from '@/app/ui/WarningModal';
import NotFoundComponent from '@/app/ui/NotFound';
import './index.scss';

const MenuModal=({IsModalShow,setIsModalShow})=>{
    const [categoryLists,setCategoryLists]=useState([]);
    const [skinTypeLists,setSkinTypeLists]=useState([]);
    const [skinConcernLists,setSkinConernLists]=useState([]);
    const [ingredientLists,setIngredientLists]=useState([]);
    const [brandLists,setBrandLists]=useState([]);
    const [openBrand,setOpenBrand]=useState(true);
    const [openSkinType,setOpenSkinType]=useState(true);
    const [openSkinConcern,setOpenSkinConcern]=useState(true);
    const [openIngredients,setOpenIngredients]=useState(true);
    const [openCategory,setOpenCategory]=useState(true);

    // get cart lists on initial load
    useEffect(()=>{
        const token=localStorage.getItem("token");

        if(IsModalShow){
            inittialLoad();
        }
    },[IsModalShow])

    const inittialLoad=async()=>{
        ConfigureAxios();
        getCategoryLists();
        getSkinTypeLists();
        getConcernLists();
        getIngredientsLists();
        getBrandLists();

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
           <Modal 
            show={IsModalShow} fullscreen={false} onHide={() => setIsModalShow(false)}
            className="products-cart-modal left"
            >
                <Modal.Header>
                    <Row>
                        <Col
                        style={{
                            //position:'relative',
                            textAlign:'center',
                           // display:'flex',
                            //flexDirection:'column',
                            padding:'4px 10px',
                            display:'flex',
                            justifyContent:'flex-end',
                            alignItems:'center'
                        }}
                        >
                            <Row>
                                <Col
                                style={{
                                    textAlign:'center'
                                }}
                                //xs={10}
                                >
                                    <h4
                                    style={{
                                        textAlign:'center'
                                    }}
                                    >Menu</h4>
                                </Col>
                                <Col
                                //xs={2}
                                >
                                    <Image
                                    src={'/modal_close_icon.png'}
                                    alt="Modal Close"
                                    height={18}
                                    width={16}
                                    style={{
                                        // position:'absolute',
                                        // left:10,
                                        // top:-6
                                    }}
                                    onClick={()=>{
                                        setIsModalShow(false)
                                    }}
                                    className="modal-close-icon"
                                    ></Image>
                                </Col>
                            </Row>
                           
                        </Col>
                    </Row>
                </Modal.Header>
                <Modal.Body
                style={{
                    backgroundColor:"#f7f5fb",
                    flexDirection:'column'
                }}
                className="cart-modal-body"
                >
                    <ul 
                    class="exo-menu navbar-container"
                    style={{
                        display:'flex',
                        flexDirection:'column'
                    }}
                    >
                        <li className="mega-drop-down">
                        <a 
                        className="mega-menu-href" 
                        href="#"
                        onClick={()=>{
                            //alert("Helloo")
                            setOpenCategory(!openCategory);
                        }}
                        >
                            CATEGORY
                            &nbsp;
                            <Image
                            src={'/downArrow.png'}
                            height={8}
                            width={14}
                            alt="Image"
                            className="navbar-arrow-image"
                            />
                        </a>
                        <div  className={`animated fadeIn mega-menu ${openCategory?'hide-child':''}`}>
                            <div className="mega-menu-wrap">
                                <Row>
                                    <Col
                                    className="mega-menu-left-container"
                                    >
                                        {
                                            categoryLists?.length?categoryLists.map((dta)=>{
                                                return <Link 
                                                key={dta.id}
                                                onClick={()=>{
                                                    setIsModalShow(false)
                                                }}
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
                        <a 
                        className="mega-menu-href" 
                        href="#"
                        onClick={()=>{
                            setOpenSkinConcern(!openSkinConcern);
                        }}
                        >
                            SKIN CONCERN
                            &nbsp;
                            <Image
                            src={'/downArrow.png'}
                            height={8}
                            width={14}
                            alt="Image"
                            className="navbar-arrow-image"
                            />
                        </a>
                        <div className={`animated fadeIn mega-menu ${openSkinConcern?'hide-child':''}`}>
                            <div className="mega-menu-wrap">
                                <Row>
                                    <Col
                                    className="mega-menu-left-container"
                                    >
                                        {
                                            skinConcernLists?.length?skinConcernLists.map((dta)=>{
                                                return <Link 
                                                key={dta.id}
                                                onClick={()=>{
                                                    setIsModalShow(false)
                                                }}
                                                href={`/products?skin_concern=${dta.name}&skin_concern_id=${dta.id}&menu=1`}
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
                        <a 
                        className="mega-menu-href" 
                        href="#"
                        onClick={()=>{
                            setOpenSkinType(!openSkinType);
                        }}
                        >
                            SKIN TYPE
                            &nbsp;
                            <Image
                            src={'/downArrow.png'}
                            height={8}
                            width={14}
                            alt="Image"
                            className="navbar-arrow-image"
                            />
                        </a>
                        <div  className={`animated fadeIn mega-menu ${openSkinType?'hide-child':''}`}>
                            <div className="mega-menu-wrap">
                                <Row>
                                    <Col
                                    className="mega-menu-left-container"
                                    >
                                        {
                                            skinTypeLists?.length?skinTypeLists.map((dta)=>{
                                                return <Link 
                                                key={dta.id}
                                                onClick={()=>{
                                                    setIsModalShow(false)
                                                }}
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
                        <a 
                        className="mega-menu-href" 
                        href="#"
                        onClick={()=>{
                            setOpenIngredients(!openIngredients);
                        }}
                        >
                            INGREDIENTS
                            &nbsp;
                            <Image
                            src={'/downArrow.png'}
                            height={8}
                            width={14}
                            alt="Image"
                            className="navbar-arrow-image"
                            />
                        </a>
                        <div className={`animated fadeIn mega-menu ${openIngredients?'hide-child':''}`}>
                            <div className="mega-menu-wrap">
                                <Row>
                                    <Col
                                    className="mega-menu-left-container"
                                    >
                                        {
                                            ingredientLists?.length?ingredientLists.map((dta)=>{
                                                return <Link 
                                                key={dta.id}
                                                onClick={()=>{
                                                    setIsModalShow(false)
                                                }}
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
                        <a 
                        className="mega-menu-href" 
                        href="#"
                        onClick={()=>{
                            setOpenBrand(!openBrand);
                        }}
                        >
                            BRANDS
                            &nbsp;
                            <Image
                            src={'/downArrow.png'}
                            height={8}
                            width={14}
                            alt="Image"
                            className="navbar-arrow-image"
                            />
                        </a>
                        <div 
                        className={`animated fadeIn mega-menu ${openBrand?'hide-child':''}`}
                        >
                            <div className="mega-menu-wrap">
                                <Row>
                                    <Col
                                    className="mega-menu-left-container"
                                    >
                                        {
                                            brandLists?.length?brandLists.map((dta)=>{
                                                return <Link 
                                                key={dta.id}
                                                onClick={()=>{
                                                    setIsModalShow(false)
                                                }}
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
                   {/* <Navbar
                   style={{
                    display:'flex',
                    flexDirection:'column'
                   }}
                   >
                    <Nav className="mr-auto mobile-nav-menu">
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                            Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="mr-auto mobile-nav-menu">
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                            Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="mr-auto mobile-nav-menu">
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                            Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                   </Navbar> */}
                </Modal.Body>
            </Modal>
        </>
    )
}
export default MenuModal;