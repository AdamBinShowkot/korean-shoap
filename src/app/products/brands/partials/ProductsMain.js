'use client';
import React,{
    useState,
    useEffect,
    useContext,
    forwardRef,
    Children
} from 'react';
import {
    Form,
    Row,
    Col,
    InputGroup,
    InputGroupText,
    Dropdown
} from 'react-bootstrap';
import Image from 'next/image';
import { 
    useRouter 
} from 'next/navigation';
import { 
    useSearchParams 
} from 'next/navigation';
//import Product from '@/app/ui/Product';
import ProductTwo from '@/app/ui/ProductTwo';
import BrandCard from '@/app/ui/BrandCard';
import PaginationMain from './Pagination';
import PlaceHolder from '@/app/ui/PlaceHolder';
import NotFoundComponent from '@/app/ui/NotFound';
import './index.scss';
import Link from 'next/link';
import axios from 'axios';
import ConfigureAxios from '../../../../utils/axiosConfig'
import { 
    ProductsContextApi 
} from '@/contextApi/productsApi';



const ProductsMain=()=>{
    // const products = await getProductLists();
    const history=useRouter();
    const searchParams = useSearchParams()
    const page = searchParams.get('page');
    const query = searchParams.get('q');
    const per_page = searchParams.get('per_page');
    const brand_name=searchParams.get('name');


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
    const [products,setProducts]=useState([]);
    const [pagesArr,setPagesArr]=useState([]);
    const [currentPage,setCurrentPage]=useState(0);
    const [nextPagesUrl,setNextPagesUrl]=useState("");
    const [previousPageUrl,setPreviousPageUrl]=useState("");


    useEffect(()=>{
        ConfigureAxios();
        getBrandLists();
    },[])

    const getBrandLists=async()=>{
        const lists=await axios.get(`/public/brand/list?page=1&per_page=100`).then((response)=>{
            if(response.status==200){
               // console.log(response)
                if(response.data.items.length){
                    const datas=response.data.items;
                    setProducts(datas)
                    setDummyproducts([])
                    //return datas;
                }else{
                    setProducts([])
                    setDummyproducts([])
                }
                //return []
            }
        }).catch((error)=>{
            console.log("get brand lists error.");
            setProducts([])
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
                className="products-bottom-container-column"
                >
                    {/* <Row> */}
                        <Row 
                        xs={12}
                        className='products-bottom-container-div'
                        >
                            {
                                products?.length?(
                                    products.map((dta)=>{  
                                    return <Col 
                                        key={dta.id} 
                                        xs={6}
                                        lg={2}
                                        >
                                            <BrandCard
                                            IsBrand={true}
                                            IsSkinConcern={false}
                                            IsFromHome={false} 
                                            data={dta}/>
                                        </Col>
                                    })
                                ):dummyProducts?.length?dummyProducts.map((dta)=>{
                                    return <div key={dta.id}>
                                        <PlaceHolder/>
                                    </div>
                                }):<NotFoundComponent/>
                            }
                        </Row>
                    {/* </Row> */}
                </Col>
            </Row>
           {/* {
            page && per_page?(
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
                        <PaginationMain
                        props={{
                            page:page,
                            per_page:per_page,
                            nextPagesUrl:nextPagesUrl,
                            previousPageUrl:previousPageUrl,
                            pagesArr:pagesArr,
                            currentPage:currentPage
                        }}
                        />
                </Col>
            </Row>
            ):""
          } */}
        </>
    )
}
export default ProductsMain;