'use client'
import Image from 'next/image'
import { 
    useEffect,
    useState 
} from 'react';
import {
  Row,
  Col,
  Container
} from 'react-bootstrap';
import ConfigureAxios from '@/utils/axiosConfig';
import axios from 'axios';
import SliderBanner from './components/SliderBanner';
import HomeFeatured from './components/HomeFeater2';
import ProductsSlider from './components/ProductsSlider';
import BannerTwo from './components/Banner2';
import ItemsContainer from './components/Items';
import BannerThree from './components/Banner3';
import IsotopeReact from './components/ProductsFilter';
import HomeBlogSection from './components/HomeBlogSection';
//import useSize from '@/hooks/useSize';


const PageContent=()=>{
  const [featredBrandLists,setFeatredBrandLists]=useState([]);
  const [brandLists,setBrandLists]=useState([]);
  const [productsLists,setProductsLists]=useState([]);
  const [CleanserItems,setCleanserItems]=useState([]);
  const [TonerItems,setTonerItems]=useState([]);
  const [BodyCareItems,setBodyCareItems]=useState([]);
  const [EyeCareItems,setEyeCareItems]=useState([]);
  const [EyeSerumItems,setEyeSerumItems]=useState([]);
  const [HeroBgLists,setHeroBgLists]=useState([]);

  useEffect(()=>{
    ConfigureAxios();
    initialLoading();
  },[])

  const initialLoading=async()=>{
    await getFeturedBrands();
    await getBrandProductLists();
    await getProductsLists();
    await getCleanserProducts();
    await getTonerProducts();
    await getBodyCareProducts();
  }

  const getFeturedBrands=async()=>{
    ConfigureAxios();
    axios.get('/public/features/brand').then((res)=>{
        if(res.status===200){
          //return res.data?.length?res.data:[];
          const {data}=res;
          if(data?.length){
            setFeatredBrandLists(res.data);
          }else{
            setFeatredBrandLists([])
          }
        }
    }).catch((error)=>{
      console.log("Get Featured Brand List Error.")
      setFeatredBrandLists([])
    });
  
  }

  const getBrandProductLists=async()=>{
    axios.get('/public/feature-product/brand').then((res)=>{
        if(res.status===200){
            //console.log("Products : ",res.data);
            //return res.data;
            const {data}=res;

            if(data.length){
                setBrandLists(data)
            }else{
                setBrandLists([])
            }
        }
    }).catch((error)=>{
      console.log("Get Brand Product Lists error.")
      setBrandLists([])
    });
  
  }

  const getProductsLists=async()=>{
    axios.get('/public/product-list?per_page=15&page=1').then((res)=>{
        if(res.status===200){
            //console.log("Products : ",res.data);
            //return res.data.items;
            const {items}=res.data;
            if(items.length){
                setProductsLists(items);
            }else{
                setProductsLists([])
            }
        }
    }).catch((error)=>{
      console.log("Get Products Lists Error.")
      setProductsLists([])
    });
  }

  const getCleanserProducts=async()=>{
    axios.get('/public/feature-product/category/cleanser').then((res)=>{
        if(res.status===200){
            //return res.data?.length?res.data[0].products:[];
            const {data}=res;
            if(data.length){
                const products=data[0].products;
                if(products.length){
                    setCleanserItems(products);
                }else{
                    setCleanserItems([]);
                }
            }else{
                setCleanserItems([]);
            }
        }
    }).catch((error)=>{
      //console.log(error)
      console.log("Get Cleanser Product Lists Error.")
      setCleanserItems([]);
    });
  }

  const getTonerProducts=()=>{
    axios.get('/public/feature-product/category/toner').then((res)=>{
        if(res.status===200){
            //console.log("Products : ",res.data);
            //return res.data?.length?res.data[0].products:[];
            const {data}=res;
            if(data.length){
                const products=data[0].products;
                if(products.length){
                    setTonerItems(products);
                }else{
                    setTonerItems([]);
                }
            }else{
                setTonerItems([]);
            }
        }
    }).catch((error)=>{
      //console.log(error)
      console.log("Get Toner Products Error")
      setTonerItems([])
    });
  }

  const getBodyCareProducts=async()=>{
    axios.get('/public/feature-product/category/body-care').then((res)=>{
        if(res.status===200){
            ///return res.data?.length?res.data[0].products:[];
            const {data}=res;
            if(data.length){
                const products=data[0].products;
                if(products.length){
                    setBodyCareItems(products);
                }else{
                    setBodyCareItems([]);
                }
            }else{
                setBodyCareItems([]);
            }
        }
    }).catch((error)=>{
      //console.log(error)
      console.log("Get Body Care Lists Error.")
      setBodyCareItems([]);
    });
  }

  const getEyeCareProducts=()=>{
    axios.get('/public/feature-product/category/eye-care').then((res)=>{
        if(res.status===200){
            //console.log("Products : ",res.data);
            return res.data?.length?res.data[0].products:[];
        }
    }).catch((error)=>{
     // console.log(error)
     console.log("Get Eye Care Lists Error.")
      return [];
    });
  }


  return (
    <>
      <Row>
        <Col>
          <SliderBanner
          lists={HeroBgLists}
          />
        </Col>
      </Row>
      <Row
      className='home-page-inner-container'
      >
        <Col 
        xs={12}
        style={{
          padding:'0',
          display:'flex',
          flexDirection:'column'
        }}
        >
          <div
          style={{
            width:'100%',
          }}
          >
            <ProductsSlider
            lists={productsLists}
            />
          </div>
          <div style={{
            width:'100%',
          }}>
            <ItemsContainer 
            title="CLEANSER "
            lists={CleanserItems}
            len={CleanserItems?.length?CleanserItems.length:0}
            />
          </div>
          <div style={{
            width:'100%',
          }}>
            <ItemsContainer 
            lists={TonerItems}
            len={TonerItems?.length?TonerItems.length:0}
            title="TONER "/>
          </div>
          <div style={{
            width:'100%',
          }}>
            <ItemsContainer 
            title="SERUM/ESSENCE/AMPOULE "
            lists={EyeSerumItems}
            len={EyeSerumItems?.length?EyeSerumItems.length:0}
            />
          </div>
          <div style={{
            width:'100%',
          }}>
            <ItemsContainer 
            title="BODY CARE "
            lists={BodyCareItems}
            len={BodyCareItems?.length?BodyCareItems.length:0}
            />
          </div>
          <div style={{
            width:'100%',
          }}>
            <ItemsContainer 
            title="EYE CARE "
            lists={EyeCareItems}
            len={EyeCareItems?.length?EyeCareItems.length:0}
            />
          </div>
        </Col>
      </Row>

      <Row>
        <BannerThree/>
      </Row>
      <Row>
        <IsotopeReact 
        lists={brandLists}
        brands={featredBrandLists}
        />
      </Row>
      {/* <Row>
        <Col xs={12}>
          <HomeBlogSection/>
        </Col>
      </Row> */}
    </>
  )
}
export default PageContent;
