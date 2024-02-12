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


const CustomMenu = forwardRef(
    function CustomMenu({ children, style, className, 'aria-labelledby': labeledBy }, ref) {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
);

const CustomToggle = forwardRef(function CustomToggle({ children, onClick }, ref)  {
    return <div
    className='filter-toggle-button'
    ref={ref}
    onClick={(e) => {
        e.preventDefault();
        onClick(e);
    }}
    >
        <div
        style={{
            width:'80%',
            
        }}
        >
            <span
            style={{
                marginRight:'10px',
                fontSize:'13px',
                fontWeight:'600'
            }}
            >
                {children}
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
    // <a
    //   href=""
    //   ref={ref}
    //   onClick={(e) => {
    //     e.preventDefault();
    //     onClick(e);
    //   }}
    // >
    //   {children}
    //   &#x25bc;
    // </a>
})
  
const ProductsMain=()=>{
    // const products = await getProductLists();
    const history=useRouter();
    const searchParams = useSearchParams()
    const page = searchParams.get('page');
    const query = searchParams.get('q');
    const per_page = searchParams.get('per_page');
    const ingredients_name=searchParams.get('name');


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
        if(ingredients_name){
            axios.get(`/public/ingredient/products/${ingredients_name}?page=${page}&per_page=${per_page}`)
            .then((response)=>{
                if(response.status===200){
                    // console.log(response.data)
                    if(response.data?.items?.length){
                        const {meta}=response.data;
                        //console.log(meta)
                        const {
                            total_item,
                            total_page,
                            per_page,
                            current_page,
                            first_page_url,
                            last_page_url
                        }=meta;

                        let myArr=[]
                        for(let i=1; i<=total_page; i++){
                            const newObj={
                                id:i,
                                page_no:i
                            }
                            myArr=[...myArr,newObj];
                        }

                        let myLast=last_page_url.split("/");
                        let myFirst=first_page_url.split("/");

                        if(myLast.length){
                            let len=myLast.length;
                            myLast=myLast[len-1];
                            myLast=myLast.split("?")
                            setNextPagesUrl(myLast[1])
                           // console.log("My last : ",myLast[1]);
                        }
                        if(myFirst.length){
                            let len=myFirst.length;
                            myFirst=myFirst[len-1];
                            myFirst=myFirst.split("?")
                            setPreviousPageUrl(myFirst[1])
                            //console.log("My last : ",myFirst[1]);
                        }
                        setCurrentPage(current_page);
                        setPagesArr(myArr);
                        setProducts(response.data.items)
                    }else{
                        setProducts([])
                        setDummyproducts([])
                    }
                }
            }).catch((error)=>{
                setDummyproducts([])
            })
        }
    },[page,per_page,category_name])

    
   


    return(
        <>
            <Row>
                <Col 
                xs={12}
                className="products-bottom-container-col"
                >
                    {
                        products?.length?(
                            products.map((dta)=>{  
                            return <div key={dta.id} style={{margin:'5px 0px'}}>
                                    <ProductTwo  data={dta}/>
                                </div>
                            })
                        ):dummyProducts?.length?dummyProducts.map((dta)=>{
                            return <div key={dta.id}>
                                <PlaceHolder/>
                            </div>
                        }):<NotFoundComponent/>
                    }
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