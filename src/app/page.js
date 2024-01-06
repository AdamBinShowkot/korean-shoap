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
async function getBrandProductLists(){
  ConfigureAxios();
  const response=axios.get('/public/feature-product/brand').then((res)=>{
      if(res.status===200){
          //console.log("Products : ",res.data);
          return res.data;
      }
  });

  return response;
}
export default async function Home() {
  const brandLists=await getBrandProductLists();
 // const brandLists=[];
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
            <ProductsSlider/>
          </Row>
          {/* <Row
          style={{
            padding:'0'
          }}
          >
            <BannerTwo/>
          </Row> */}
          <Row>
            <ItemsContainer title="CLEANSER "/>
          </Row>
          <Row>
            <ItemsContainer title="TONER "/>
          </Row>
          <Row>
            <ItemsContainer title="SERUM/ESSENCE/AMPOULE "/>
          </Row>
          <Row>
            <ItemsContainer title="BODY CARE "/>
          </Row>
          <Row>
            <ItemsContainer title="EYE CARE "/>
          </Row>
        </Col>
      </Row>
      <Row>
        <BannerThree/>
      </Row>
      <Row
      // style={{
      //   padding:'50px 0px',
      //   minHeight:'500px'
      // }}
      >
        <Col>
          <IsotopeReact lists={brandLists}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <HomeBlogSection/>
        </Col>
      </Row>
    </>
  )
}
