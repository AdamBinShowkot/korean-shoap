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
import './index.scss';
import Link from 'next/link';
import axios from 'axios';
import ConfigureAxios from '../../../utils/axiosConfig'
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
    const per_page = searchParams.get('per_page');
    const category_id = searchParams.get('category_id');
    const brand_id=searchParams.get('brand_id');
    const skin_type_id=searchParams.get('skin_type_id');
    const skin_concern_id=searchParams.get('skin_concern_id');
    const ingredient_id=searchParams.get('ingredient_id');
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
    const [categoryLists,setCategoryLists]=useState([]);
    const [skinTypeLists,setSkinTypeLists]=useState([]);
    const [skinConcernLists,setSkinConernLists]=useState([]);
    const [ingredientLists,setIngredientLists]=useState([]);
    const [brandLists,setBrandLists]=useState([]);
    const [activeBrand,setActiveBrand]=useState(brand_id?brand_id:0);
    const [activeCategories,setActiveCategories]=useState(category_id?category_id:0);
    const [activeSkinConcern,setActiveSkinConcern]=useState(skin_concern_id?skin_concern_id:0);
    const [activeSkinType,setActiveSkinType]=useState(skin_type_id?skin_type_id:0);
    const [activeIngreidients,setActiveIngreidients]=useState(ingredient_id?ingredient_id:0);

    useEffect(()=>{
        inittialLoad()
    },[])

    useEffect(()=>{
        ConfigureAxios();
        if(category_id){
            setActiveBrand(0);
            setActiveSkinType(0);
            setActiveSkinConcern(0);
            setActiveIngreidients(0);
            axios.get(`/public/product-filter?category_id=${category_id}`)
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
        }
        if(brand_id){
            setActiveCategories(0);
            setActiveSkinType(0);
            setActiveSkinConcern(0);
            setActiveIngreidients(0);
            axios.get(`/public/product-filter?brand_id=${brand_id}`)
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
        }
        if(skin_type_id){
            setActiveBrand(0);
            setActiveCategories(0);
            setActiveSkinConcern(0);
            setActiveIngreidients(0);
            axios.get(`/public/product-filter?skin_type_id=${skin_type_id}`)
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
        }
        if(skin_concern_id){
            setActiveBrand(0);
            setActiveSkinType(0);
            setActiveCategories(0);
            setActiveIngreidients(0);
            axios.get(`/public/product-filter?skin_concern_id=${skin_concern_id}`)
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
        }
        if(ingredient_id){
            setActiveBrand(0);
            setActiveSkinType(0);
            setActiveSkinConcern(0);
            setActiveCategories(0);
            axios.get(`/public/product-filter?ingredient_id=${ingredient_id}`)
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
        }else{
            axios.get(`/public/product-list?per_page=${per_page}&page=${page}`)
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
                    }
                }
            }).catch((error)=>{

            })
        }
    },[page,per_page,category_id,brand_id,skin_type_id,skin_concern_id,ingredient_id])

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


    const handleOnFilterMenuChange=(data,name)=>{
        if(name=="category"){
            if(data.id){
                setActiveCategories(data.id)
                history.push(`/products?category_id=${data.id}`)
            }
        }else if(name=="brand"){
            if(data.id){
                setActiveBrand(data.id);
                history.push(`/products?brand_id=${data.id}`)
            }
        }else if(name=="skin-type"){
            if(data.id){
                setActiveSkinType(data.id)
                history.push(`/products?skin_type_id=${data.id}`)
            }
        }else if(name=="skin-concern"){
            if(data.id){
                setActiveSkinConcern(data.id)
                history.push(`/products?skin_concern_id=${data.id}`)
            }
        }else if(name=="ingredient"){
            if(data.id){
                setActiveIngreidients(data.id)
                history.push(`/products?ingredient_id=${data.id}`)
            }
        }
    }
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
                        <Dropdown 
                        >
                            <Dropdown.Toggle 
                            as={CustomToggle}
                            className="filter-sub-menu-container"
                            id="dropdown-basic"
                            style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                width:'10vw !important',
                            }}
                            >
                               Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu 
                            as={CustomMenu}
                            className="filter-sub-menu-container"
                            >
                                {
                                    categoryLists?.length?categoryLists.map((dta)=>{
                                        return <Dropdown.Item 
                                        eventKey={`${dta.id}`}
                                        onClick={(e)=>{
                                            handleOnFilterMenuChange(dta,'category')
                                        }}
                                        key={dta.id}
                                        className={`filter-item-menu ${activeCategories==dta.id?'filter-item-menu-active':''}`}
                                        >
                                            {dta.name}
                                        </Dropdown.Item>
                                    }):""
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown 
                        >
                            <Dropdown.Toggle 
                            as={CustomToggle}
                        
                            id="dropdown-basic"
                            style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                width:'10vw !important',
                            }}
                            >
                               Brands
                            </Dropdown.Toggle>

                            <Dropdown.Menu
                            className="filter-sub-menu-container"
                            as={CustomMenu}>
                                {
                                    brandLists?.length?brandLists.map((dta)=>{
                                        return <Dropdown.Item 
                                        eventKey={`${dta.id}`}
                                        className={`filter-item-menu ${activeBrand==dta.id?'filter-item-menu-active':''}`}
                                        onClick={(e)=>{
                                            handleOnFilterMenuChange(dta,'brand')
                                        }}
                                        key={dta.id}
                                        >
                                            {dta.name}
                                        </Dropdown.Item>
                                    }):""
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown 
                        >
                            <Dropdown.Toggle 
                            as={CustomToggle}
                        
                            id="dropdown-basic"
                            style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                width:'10vw !important',
                            }}
                            >
                               Skin Type
                            </Dropdown.Toggle>

                            <Dropdown.Menu
                            className="filter-sub-menu-container"
                            as={CustomMenu}>
                                {
                                    skinTypeLists?.length?skinTypeLists.map((dta)=>{
                                        return <Dropdown.Item 
                                        eventKey={`${dta.id}`}
                                        onClick={(e)=>{
                                            handleOnFilterMenuChange(dta,'skin-type')
                                        }}
                                        key={dta.id}
                                        className={`filter-item-menu ${activeSkinType==dta.id?'filter-item-menu-active':''}`}
                                        >
                                            {dta.name}
                                        </Dropdown.Item>
                                    }):""
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown 
                        >
                            <Dropdown.Toggle 
                            as={CustomToggle}
                            className="filter-sub-menu-container"
                            id="dropdown-basic"
                            style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                width:'10vw !important',
                            }}
                            >
                               Skin Concern
                            </Dropdown.Toggle>

                            <Dropdown.Menu 
                            as={CustomMenu}
                            className="filter-sub-menu-container"
                            >
                                {
                                    skinConcernLists?.length?skinConcernLists.map((dta)=>{
                                        return <Dropdown.Item 
                                        eventKey={`${dta.id}`}
                                        onClick={(e)=>{
                                            handleOnFilterMenuChange(dta,'skin-concern')
                                        }}
                                        key={dta.id}
                                        className={`filter-item-menu ${activeSkinConcern==dta.id?'filter-item-menu-active':''}`}
                                        >
                                            {dta.name}
                                        </Dropdown.Item>
                                    }):""
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown 
                        >
                            <Dropdown.Toggle 
                            as={CustomToggle}
                        
                            id="dropdown-basic"
                            style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                width:'10vw !important',
                            }}
                            >
                               Ingredients
                            </Dropdown.Toggle>

                            <Dropdown.Menu
                            className="filter-sub-menu-container"
                            as={CustomMenu}>
                                {
                                    ingredientLists?.length?ingredientLists.map((dta)=>{
                                        return <Dropdown.Item 
                                        eventKey={`${dta.id}`}
                                        onClick={(e)=>{
                                            handleOnFilterMenuChange(dta,'ingredient')
                                        }}
                                        key={dta.id}
                                        className={`filter-item-menu ${activeIngreidients==dta.id?'filter-item-menu-active':''}`}
                                        >
                                            {dta.name}
                                        </Dropdown.Item>
                                    }):""
                                }
                            </Dropdown.Menu>
                        </Dropdown>
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
                                    <ProductTwo  data={dta}/>
                                </div>
                            })
                        ):dummyProducts.map((dta)=>{
                            return <div key={dta.id}>
                                <PlaceHolder/>
                            </div>
                        })
                    }
                </Col>
            </Row>
          {
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
                    {/* <ProductsContextApi.Provider value={{page,setPage}}> */}
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
                    {/* </ProductsContextApi.Provider> */}
                </Col>
            </Row>
            ):""
          }
        </>
    )
}
export default ProductsMain;