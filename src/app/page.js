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
import PageContent from './PageContent';
import parse from 'html-react-parser';
import SlugInfo from './SlugInfo';
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
    //console.log(error)
    console.log("Get Brand Product Lists error.")
    return [];
  });

  return response;
}
async function getFeturedBrands(){
  ConfigureAxios();
  const response=axios.get('/public/features/brand').then((res)=>{
      if(res.status===200){
        //console.log("Products : ",res.data);
        return res.data?.length?res.data:[];
      }
  }).catch((error)=>{
    //console.log(error)
    console.log("Get Featured Brand List Error.")
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
    //console.log(error)
    console.log("Get Products Lists Error.")
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
    //console.log(error)
    console.log("Get Cleanser Product Lists Error.")
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
    //console.log(error)
    console.log("Get Toner Products Error")
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
   // console.log(error)
   console.log("Get Eye Care Lists Error.")
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
    //console.log(error)
    console.log("Get Body Care Lists Error.")
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
    //console.log(error)
    console.log("Get Body Serum Lists Error.")
    return [];
  });

  return response;
}

async function getHeroBgImage(){
  ConfigureAxios();
  const response=axios.get('/public/sliders/hero-slider').then((res)=>{
    if(res.status===200){
      //console.log("Products : ",res.data);
      return res.data;
    }
  }).catch((error)=>{
    //console.log(error)
    console.log("Get Home Page Image Error.")
    return [];
  });

  return response;
}

async function getHomePageInfo(){
  ConfigureAxios();
  const response=axios.get(`/public/seo-contents/home`).then((res)=>{
      if(res.status===200){
          //console.log("Products : ",res.data);
          return res.data;
      }
  }).catch((error)=>{
    //console.log(error)
    console.log("Get Terms & Condition Error.")
    return [];
  });

  return response;
}
export default async function Home() {
  // const featredBrandLists=await getFeturedBrands();
  // const brandLists=await getBrandProductLists();
  // const productsLists=await getProductsLists();
  // const CleanserItems=await getCleanserProducts();
  // const TonerItems=await getTonerProducts();
  // const BodyCareItems=await getBodyCareProducts();
  // const EyeCareItems=await getEyeCareProducts();
  // const EyeSerumItems=await getBodySerumProducts();
  // const HeroBgLists=await getHeroBgImage();
  // const brandLists=[] ;
  // const productsLists=[];
  // const CleanserItems=[];
  // const TonerItems=[];
  // const BodyCareItems=[];
  // const EyeCareItems=[];
  // const EyeSerumItems=[];
  // const HeroBgLists=[];
  //const brandLists=[];
  //const bodyCareDataLists= await getBodyCareLists();
  //console.log(bodyCareDataLists)
  //const test = useSize();
  const homeInfo=await getHomePageInfo();


  return (
    <>
      <Row>
        <Col>
          <SliderBanner
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
            //lists={productsLists}
            />
          </div>
          <div style={{
            width:'100%',
          }}>
            <ItemsContainer 
            title="CLEANSER "
            IsCleanser={true}
            IsTonner={false}
            IsSerum={false}
            IsBodyCare={false}
            IsEyeCare={false}
            />
          </div>
          <div style={{
            width:'100%',
          }}>
            <ItemsContainer 
            title="TONER "
            IsCleanser={false}
            IsTonner={true}
            IsSerum={false}
            IsBodyCare={false}
            IsEyeCare={false}
            />
          </div>
          <div style={{
            width:'100%',
          }}>
            <ItemsContainer 
            title="SERUM/ESSENCE/AMPOULE "
            IsCleanser={false}
            IsTonner={false}
            IsSerum={true}
            IsBodyCare={false}
            IsEyeCare={false}
            />
          </div>
          <div style={{
            width:'100%',
          }}>
            <ItemsContainer 
            title="BODY CARE "
            IsCleanser={false}
            IsTonner={false}
            IsSerum={false}
            IsBodyCare={true}
            IsEyeCare={false}
            />
          </div>
          <div style={{
            width:'100%',
          }}>
            <ItemsContainer 
            title="EYE CARE "
            IsCleanser={false}
            IsTonner={false}
            IsSerum={false}
            IsBodyCare={false}
            IsEyeCare={true}
            />
          </div>
        </Col>
      </Row>

      <Row>
        <BannerThree/>
      </Row>
      <Row>
      
        <IsotopeReact 
        // lists={brandLists}
        // brands={featredBrandLists}
        />
      </Row>
      {/* <Row>
        <Col
        className='home-page-footer-seo-content'
        >
          {homeInfo?.content?parse(homeInfo.content):""}
        </Col>
      </Row>  */}
      <SlugInfo/>
      {/* <Row>
        <Col xs={12}>
          <HomeBlogSection/>
        </Col>
      </Row> */}
      {/* <PageContent/> */}
    </>
  )
}
