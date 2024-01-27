import Image from 'next/image'
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

async function getBodyCareLists(){
  ConfigureAxios();
  const response=axios.get('/public/skin-concern/list?page=1&per_page=10').then((res)=>{
      if(res.status===200){
          return res.data?.data;
      }
  });

  return response;
}
async function getSkinTypeLists(){
  ConfigureAxios();
  const response=axios.get('/public/skin-type/list?page=1&per_page=10').then((res)=>{
      if(res.status===200){
        return res.data?.items;
      }
  });

  return response;
}
async function getBrandProductLists(){
  ConfigureAxios();
  const response=axios.get('/public/feature-product/brand').then((res)=>{
      if(res.status===200){
          //console.log("Products : ",res.data);
          return res.data;
      }
  }).catch((error)=>{
    console.log(error)
    return [];
  });

  return response;
}

async function getProductsLists(){
  ConfigureAxios();
  const response=axios.get('/public/product-list?per_page=15&page=1').then((res)=>{
      if(res.status===200){
          //console.log("Products : ",res.data);
          return res.data.items;
      }
  }).catch((error)=>{
    console.log(error)
    return [];
  });

  return response;
}
async function getCleanserProducts(){
  ConfigureAxios();
  const response=axios.get('/public/feature-product/category/cleanser').then((res)=>{
      if(res.status===200){
          //console.log("Products : ",res.data);
          return res.data?.length?res.data[0].products:[];
      }
  }).catch((error)=>{
    console.log(error)
    return [];
  });

  return response;
}
async function getTonerProducts(){
  ConfigureAxios();
  const response=axios.get('/public/feature-product/category/toner').then((res)=>{
      if(res.status===200){
          //console.log("Products : ",res.data);
          return res.data?.length?res.data[0].products:[];
      }
  }).catch((error)=>{
    console.log(error)
    return [];
  });

  return response;
}
async function getEyeCareProducts(){
  ConfigureAxios();
  const response=axios.get('/public/feature-product/category/eye-care').then((res)=>{
      if(res.status===200){
          //console.log("Products : ",res.data);
          return res.data?.length?res.data[0].products:[];
      }
  }).catch((error)=>{
    console.log(error)
    return [];
  });

  return response;
}
async function getBodyCareProducts(){
  ConfigureAxios();
  const response=axios.get('/public/feature-product/category/body-care').then((res)=>{
      if(res.status===200){
          //console.log("Products : ",res.data);
          return res.data?.length?res.data[0].products:[];
      }
  }).catch((error)=>{
    console.log(error)
    return [];
  });

  return response;
}
async function getBodySerumProducts(){
  ConfigureAxios();
  const response=axios.get('/public/feature-product/category/serum').then((res)=>{
      if(res.status===200){
          //console.log("Products : ",res.data);
          return res.data?.length?res.data[0].products:[];
      }
  }).catch((error)=>{
    console.log(error)
    return [];
  });

  return response;
}
export default async function Home() {
  const brandLists=await getBrandProductLists();
  const productsLists=await getProductsLists();
  const CleanserItems=await getCleanserProducts();
  const TonerItems=await getTonerProducts();
  const BodyCareItems=await getBodyCareProducts();
  const EyeCareItems=await getEyeCareProducts();
  const EyeSerumItems=await getBodySerumProducts();
  //const brandLists=[];
  //const bodyCareDataLists= await getBodyCareLists();
  //console.log(bodyCareDataLists)
  //const test = useSize();


  return (
    <>
      <Row>
        <Col>
          <SliderBanner/>
        </Col>
      </Row>
      <Row
      className='home-page-inner-container'
      >
        <Col 
        xs={12}
        style={{
          padding:'0'
        }}
        >
          <Row
          className='home-featured-main-row'
          >
            <HomeFeatured/>
          </Row>
          <Row>
            <ProductsSlider
            lists={productsLists}
            />
          </Row>
          {/* <Row
          style={{
            padding:'0'
          }}
          >
            <BannerTwo/>
          </Row> */}
          <Row>
            <ItemsContainer 
            title="CLEANSER "
            lists={CleanserItems}
            />
          </Row>
          <Row>
            <ItemsContainer 
            lists={TonerItems}
            title="TONER "/>
          </Row>
          <Row>
            <ItemsContainer 
            title="SERUM/ESSENCE/AMPOULE "
            lists={EyeSerumItems}
            />
          </Row>
          <Row>
            <ItemsContainer 
            title="BODY CARE "
            lists={BodyCareItems}
            />
          </Row>
          <Row>
            <ItemsContainer 
            title="EYE CARE "
            lists={EyeCareItems}
            />
          </Row>
        </Col>
      </Row>

      <Row>
        <BannerThree/>
      </Row>
      <Row>
        <IsotopeReact lists={brandLists}/>
      </Row>
      <Row>
        <Col xs={12}>
          <HomeBlogSection/>
        </Col>
      </Row>
    </>
  )
}
