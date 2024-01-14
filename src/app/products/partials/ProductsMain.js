'use client';
import React,{
    useState,
    useEffect,
    useContext
} from 'react';
import {
    Row,
    Col,
    InputGroup,
    InputGroupText
} from 'react-bootstrap';
import Image from 'next/image';
import Product from '@/app/ui/Product';
import PaginationMain from './Pagination';
import './index.scss';
import Link from 'next/link';
import axios from 'axios';
import ConfigureAxios from '../../../utils/axiosConfig'
import { 
    ProductsContextApi 
} from '@/contextApi/productsApi';

// async function getProductLists(){
//     ConfigureAxios();
//     const response=axios.get('/product').then((res)=>{
//         if(res.status===201){
//             return res.data;
//         }
//     });

//     return response;
// }
const ProductsMain=()=>{
    // const products = await getProductLists();
    const [products,setProducts]=useState([]);
    const [perPage,setPerPage]=useState(10);
    const [page,setPage]=useState(1);

    useEffect(()=>{
        ConfigureAxios();
        const productsLists=axios.get(`/public/product-list?per_page=${perPage}&page=${page}`)
        .then((response)=>{
            if(response.status===200){
                //console.log(response.data)
                if(response.data?.items?.length){
                    setProducts(response.data.items)
                }else{
                    setProducts([])
                }
            }
        }).catch((error)=>{

        })
    },[page])

    return(
        <>
            <Row
            >
                <Col 
                xs={12}
                className='products-top-container-row'
                >
                    <InputGroup
                    className='product-filter-input-group'
                    >
                        <div
                        xs={3}
                        className='products-filter-group-button'
                        >
                            <div
                            style={{
                                width:'100%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                                <div
                                style={{
                                    width:'80%',
                                    
                                }}
                                >
                                    <span
                                    style={{
                                        marginRight:'10px'
                                    }}
                                    >
                                        Body Care
                                    </span>
                                </div>
                                <div
                                style={{
                                    width:'20%',
                                    textAlign:'right'
                                }}
                                >
                                    <Image
                                    src="/filterBtn1.png"
                                    width={18}
                                    height={18}
                                    alt="search"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                        xs={3}
                        className='products-filter-group-button'
                        >
                            <div
                            style={{
                                width:'100%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                                <div
                                style={{
                                    width:'80%',
                                    
                                }}
                                >
                                    <span
                                    style={{
                                        marginRight:'10px'
                                    }}
                                    >
                                        Body Care
                                    </span>
                                </div>
                                <div
                                style={{
                                    width:'20%',
                                    textAlign:'right'
                                }}
                                >
                                    <Image
                                    src="/filterBtn1.png"
                                    width={18}
                                    height={18}
                                    alt="search"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                        xs={3}
                        className='products-filter-group-button'
                        >
                            <div
                            style={{
                                width:'100%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                                <div
                                style={{
                                    width:'80%',
                                    
                                }}
                                >
                                    <span
                                    style={{
                                        marginRight:'10px'
                                    }}
                                    >
                                        Body Care
                                    </span>
                                </div>
                                <div
                                style={{
                                    width:'20%',
                                    textAlign:'right'
                                }}
                                >
                                    <Image
                                    src="/filterBtn1.png"
                                    width={18}
                                    height={18}
                                    alt="search"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                        xs={3}
                        className='products-filter-group-button'
                        >
                            <div
                            style={{
                                width:'100%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                                <div
                                style={{
                                    width:'80%',
                                    
                                }}
                                >
                                    <span
                                    style={{
                                        marginRight:'10px'
                                    }}
                                    >
                                        Body Care
                                    </span>
                                </div>
                                <div
                                style={{
                                    width:'20%',
                                    textAlign:'right'
                                }}
                                >
                                    <Image
                                    src="/filterBtn1.png"
                                    width={18}
                                    height={18}
                                    alt="search"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                        xs={3}
                        className='products-filter-button-main'
                        >
                            <div
                            style={{
                                width:'100%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                                <div
                                style={{
                                    width:'100%',
                                    textAlign:'right'
                                }}
                                >
                                    <Image
                                    src="/filter.png"
                                    width={18}
                                    height={18}
                                    alt="search"
                                    />
                                </div>
                            </div>
                        </div>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col 
                xs={12}
                className="products-bottom-container-col"
                >
                    {/* <Row>
                        {
                            products?.length?(
                                products.map((dta)=>{  
                                return <Col xs={3}
                                style={{
                                    margin:'20px 0px'
                                }}>
                                    <Link href="/products/2">
                                        <Product data={dta}/>
                                    </Link>
                                </Col>
                                })
                            ):""
                        }
                    </Row> */}
                    {
                        products?.length?(
                            products.map((dta)=>{  
                            return <div key={dta.id} style={{margin:'5px 0px'}}>
                                    <Product  data={dta}/>
                                </div>
                            })
                        ):""
                    }
                </Col>
            </Row>
            <Row>
                <Col 
                xs={12}
                style={{
                    padding:"0px 0px 30px 0px",
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <ProductsContextApi.Provider value={{page,setPage}}>
                        <PaginationMain/>
                    </ProductsContextApi.Provider>
                </Col>
            </Row>
        </>
    )
}
export default ProductsMain;