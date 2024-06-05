'use client'
import React, { useEffect, useState } from 'react';
import {
    Card,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import StaticProducts from '@/app/ui/StaticCard';
//import Product from '@/app/ui/Product';
import ProductTwo from '@/app/ui/ProductTwo';
import NewProduct from '@/app/ui/NewProduct';
import EmptyCard from '@/app/ui/EmptyCard';
import useDeviceSize from '@/hooks/useDeviceSize';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import Image from 'next/image';
import ConfigureAxios from '@/utils/axiosConfig';
import axios from 'axios';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className+` slider-next-arrow-btn`}
        // style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className+` slider-previous-arrow-btn`}
        // style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
}

const ItemsContainer=({title,IsCleanser,IsTonner,IsSerum,IsBodyCare,IsEyeCare,IsSuncreen,IsHairCare,IsScrubMask,IsSleepingMask,IsCream})=>{
    const [lists,setLists]=useState([]);
    const [len,setLen]=useState(0);
    const [myLists,setMyLists]=useState([]);
    const [essenseLisrts,setEssenseLists]=useState([]);
    const [ampouleLists,setAmpouleLists]=useState([]);

    const [settings,setSettings]=useState(
        {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        }
    )
    const [width, height] = useDeviceSize();  

    useEffect(()=>{
        initialLoad()
    },[])
    useEffect(() => {
        if(width<420){

            let newLists=[...lists];
            let newSettings={...settings,slidesToShow:2};
            if(len>=5){
                //console.log("Heloooooooooooo5")
                setMyLists(newLists);
            }else if(len>=2){
                // console.log("Heloooooooooooo3")
                 for(let i=0; i<2; i++){
                     const newObj={
                         id:"1000"+i,
                         emptyPost:true
                     }
                    
                     newLists=[...newLists,newObj]; 
                 }
                 // const temp=newLists[0]
                 // newLists[0]=newLists[3]
                 // newLists[3]=temp
                 setMyLists(newLists)
            }else{
                //console.log("Helooooooooooooelse")
                for(let i=0; i<2; i++){
                    const newObj={
                        id:"1000"+i,
                        emptyPost:true
                    }
                    newLists=[...newLists,newObj];
                }
                setMyLists(newLists)
            }
          
            setSettings(newSettings)
        }else{
          
            let newLists=[...lists];
            let newSettings={...settings,slidesToShow:5};
            if(len>=5){
                //console.log("Heloooooooooooo5")
                setMyLists(newLists);
            }else if(len>=4){
                //console.log("Heloooooooooooo4")
                for(let i=0; i<1; i++){
                    const newObj={
                        id:"1000"+i,
                        emptyPost:true
                    }
                    newLists=[...newLists,newObj];
                }
                setMyLists(newLists)
            }else if(len>=3){
               // console.log("Heloooooooooooo3")
                for(let i=0; i<2; i++){
                    const newObj={
                        id:"1000"+i,
                        emptyPost:true
                    }
                   
                    newLists=[...newLists,newObj]; 
                }
                // const temp=newLists[0]
                // newLists[0]=newLists[3]
                // newLists[3]=temp
                setMyLists(newLists)
            }else if(len>=2){
                // console.log("Heloooooooooooo3")
                 for(let i=0; i<3; i++){
                    const newObj={
                        id:"1000"+i,
                        emptyPost:true
                    }
                    
                    newLists=[...newLists,newObj]; 
                 }
                 // const temp=newLists[0]
                 // newLists[0]=newLists[3]
                 // newLists[3]=temp
                 setMyLists(newLists)
            }else{
                //console.log("Helooooooooooooelse")
                for(let i=0; i<4; i++){
                    const newObj={
                        id:"1000"+i,
                        emptyPost:true
                    }
                    newLists=[...newLists,newObj];
                }
                setMyLists(newLists)
                //console.log(title,newLists)
            }
            setSettings(newSettings)
           
        }
    
        return () => {
          
        };
    }, [width,lists]);

    const initialLoad=async()=>{
        if(IsCleanser && !IsTonner && !IsSerum && !IsBodyCare && !IsEyeCare && !IsSuncreen && !IsHairCare && !IsScrubMask && !IsSleepingMask && !IsCream){
            getCleanserProducts()
            //console.log("Title : ",title)
        }else if(!IsCleanser && IsTonner && !IsSerum && !IsBodyCare && !IsEyeCare && !IsSuncreen && !IsHairCare && !IsScrubMask && !IsSleepingMask && !IsCream){
            getTonerProducts();
            //console.log("Title : ",title)
        }else if(!IsCleanser && !IsTonner && IsSerum && !IsBodyCare && !IsEyeCare && !IsSuncreen && !IsHairCare && !IsScrubMask && !IsSleepingMask && !IsCream){
            //getBodySerumProducts();
            const serums=await getBodySerumProducts();
            const essences=await getBodyEssenseProducts();
            const ampoules=await getBodyAmpouleProducts();

            
            const listss=serums.concat(essences,ampoules);
            // console.log("Serum Length: ",serums.length);
            // console.log("Lists Length: ",listss.length);
            if(listss.length){
                setLists(listss);
                setLen(listss.length)
            }else{
                setLists([]);
                setLen(0)
            }
            //console.log("Title : ",title)
        }else if(!IsCleanser && !IsTonner && !IsSerum && IsBodyCare && !IsEyeCare && !IsSuncreen && !IsHairCare && !IsScrubMask && !IsSleepingMask && !IsCream){
            getBodyCareProducts();
            //console.log("Title : ",title)
        }else if(!IsCleanser && !IsTonner && !IsSerum && !IsBodyCare && IsEyeCare && !IsSuncreen && !IsHairCare && !IsScrubMask && !IsSleepingMask && !IsCream){
            getEyeCareProducts();
            //console.log("Title : ",title)
        }
        else if(!IsCleanser && !IsTonner && !IsSerum && !IsBodyCare && !IsEyeCare && IsSuncreen && !IsHairCare && !IsScrubMask && !IsSleepingMask && !IsCream){
            const scrubLists=await getSunScreenProducts();
            const maskLists=await getSunStickProducts();

            const listss=scrubLists.concat(maskLists);
            if(listss.length){
                setLists(listss);
                setLen(listss.length)
            }else{
                setLists([]);
                setLen(0)
            }
        }
        else if(!IsCleanser && !IsTonner && !IsSerum && !IsBodyCare && !IsEyeCare && !IsSuncreen && IsHairCare && !IsScrubMask && !IsSleepingMask && !IsCream){
            getHairCareProducts();
        }
        else if(!IsCleanser && !IsTonner && !IsSerum && !IsBodyCare && !IsEyeCare && !IsSuncreen && !IsHairCare && IsScrubMask && !IsSleepingMask && !IsCream){
            const scrubLists=await getScrubProducts();
            const maskLists=await getMaskProducts();

            
            const listss=scrubLists.concat(maskLists);
            //console.log("Serum Length: ",sleepingMask);
            // console.log("Lists Length: ",listss.length);
            if(listss.length){
                setLists(listss);
                setLen(listss.length)
            }else{
                setLists([]);
                setLen(0)
            }
        }
        else if(!IsCleanser && !IsTonner && !IsSerum && !IsBodyCare && !IsEyeCare && !IsSuncreen && !IsHairCare && !IsScrubMask && IsSleepingMask && !IsCream){
            const sleepingMask=await getSleepingMaskProducts();
            const nightCreams=await getNightCreamProducts();

            
            const listss=sleepingMask.concat(nightCreams);
            //console.log("Serum Length: ",sleepingMask);
            // console.log("Lists Length: ",listss.length);
            if(listss.length){
                setLists(listss);
                setLen(listss.length)
            }else{
                setLists([]);
                setLen(0)
            }
        }
        else if(!IsCleanser && !IsTonner && !IsSerum && !IsBodyCare && !IsEyeCare && !IsSuncreen && !IsHairCare && !IsScrubMask && !IsSleepingMask && IsCream){
            const sleepingMask=await getMoisturizerProducts();
            const nightCreams=await getCreamProducts();

            
            const listss=sleepingMask.concat(nightCreams);
            if(listss.length){
                setLists(listss);
                setLen(listss.length)
            }else{
                setLists([]);
                setLen(0)
            }
        }

    }
    const getCleanserProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/cleanser').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get Cleanser Product Lists Error.")
          return [];
        });
      
        if(response.length){
            setLists(response);
            setLen(response.length)
        }else{
            setLists([])
            setLen(0)
        }
    }

    const getTonerProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/toner').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get Toner Products Error")
          return [];
        });
      
        if(response.length){
            setLists(response);
            setLen(response.length)
        }else{
            setLists([])
            setLen(0)
        }
    }

    const getBodySerumProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/serum').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get Body Serum Lists Error.")
          return [];
        });
      
        if(response.length){
            //setLists(response);
            //setLen(response.length)
            return response;
        }else{
            //setLists([])
            //setLen(0)
            return [];
        }
    }
    const getBodyEssenseProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/essence').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get Body Serum Lists Error.")
          return [];
        });
      
        if(response.length){
            //setEssenseLists(response);
            //setLen(response.length)
            return response;
        }else{
            //setEssenseLists([])
            //setLen(0)
            return []
        }
    }
    const getBodyAmpouleProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/ampoule').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get Body Serum Lists Error.")
          return [];
        });
      
        if(response.length){
            //setAmpouleLists(response);
            return response;
            //setLen(response.length)
        }else{
            //setAmpouleLists([])
           // setLen(0)
           return []
        }
    }

    const getBodyCareProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/body-care').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get Body Care Lists Error.")
          return [];
        });
      
        if(response.length){
            setLists(response);
            setLen(response.length)
        }else{
            setLists([])
            setLen(0)
        }
    }

    const getEyeCareProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/eye-care').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
         // console.log(error)
          console.log("Get Eye Care Lists Error.")
          return [];
        });
      
        if(response.length){
            setLists(response);
            setLen(response.length)
        }else{
            setLists([])
            setLen(0)
        }
    }

    const getSleepingMaskProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/sleeping-mask').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get Sleeping Mask Lists Error.")
          return [];
        });
      
        if(response.length){
            //setLists(response);
            //setLen(response.length)
            return response;
        }else{
            //setLists([])
            //setLen(0)
            return [];
        }
    }
    const getNightCreamProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/night-cream').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get Body Serum Lists Error.")
          return [];
        });
      
        if(response.length){
            //setEssenseLists(response);
            //setLen(response.length)
            return response;
        }else{
            //setEssenseLists([])
            //setLen(0)
            return []
        }
    }
    const getHairCareProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/hair-care').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
         // console.log(error)
          console.log("Get Hair Care Lists Error.")
          return [];
        });
      
        if(response.length){
            setLists(response);
            setLen(response.length)
        }else{
            setLists([])
            setLen(0)
        }
    }
    const getScrubProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/scrub').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get Scrub Lists Error.")
          return [];
        });
      
        if(response.length){
            //setEssenseLists(response);
            //setLen(response.length)
            return response;
        }else{
            //setEssenseLists([])
            //setLen(0)
            return []
        }
    }
    const getMaskProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/mask').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get MaskLists Error.")
          return [];
        });
      
        if(response.length){
            //setEssenseLists(response);
            //setLen(response.length)
            return response;
        }else{
            //setEssenseLists([])
            //setLen(0)
            return []
        }
    }
    const getSunScreenProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/sunscreen').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get Scrub Lists Error.")
          return [];
        });
      
        if(response.length){
            //setEssenseLists(response);
            //setLen(response.length)
            return response;
        }else{
            //setEssenseLists([])
            //setLen(0)
            return []
        }
    }
    const getSunStickProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/sun-stick').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get MaskLists Error.")
          return [];
        });
      
        if(response.length){
            //setEssenseLists(response);
            //setLen(response.length)
            return response;
        }else{
            //setEssenseLists([])
            //setLen(0)
            return []
        }
    }
    const getMoisturizerProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/moisturizer').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get Moisturizer Lists Error.")
          return [];
        });
      
        if(response.length){
            //setEssenseLists(response);
            //setLen(response.length)
            return response;
        }else{
            //setEssenseLists([])
            //setLen(0)
            return []
        }
    }
    const getCreamProducts=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/feature-product/category/cream').then((res)=>{
            if(res.status===200){
                //console.log("Products : ",res.data);
                return res.data?.length?res.data[0].products:[];
            }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get Cream Error.")
          return [];
        });
      
        if(response.length){
            //setEssenseLists(response);
            //setLen(response.length)
            return response;
        }else{
            //setEssenseLists([])
            //setLen(0)
            return []
        }
    }
      
    return(
        <>
            <Row>
                <Col 
                xs={12}
                className='products-item-title'
                >
                    {/* <p>
                        <strong>{title?title:''}</strong> <span>{'  '}items</span>
                    </p> */}
                    <Image 
                    src={`/${title}.webp`}
                    height={150}
                    width={1200}
                    alt={`${title}`}
                    className='title-image'
                    />
                </Col>
            </Row>
            <Row 
            className='product-slider-container'
            style={{
                overflow:'hidden !important'
            }}
            >
                <Col xs={12}>
                    <Slider {...settings}>
                        {/* <div>
                            <StaticProducts/>
                        </div> */}
                        {
                            myLists?.length?myLists.map((dta,index)=>{
                                if(!dta?.emptyPost){
                                    return <div key={dta.id}>
                                        <NewProduct 
                                        data={dta}
                                        IsFromHomeSlide={true}
                                        />
                                    </div>
                                    
                                }else{
                                    return <div key={dta.id}>
                                        <EmptyCard index={index}/>
                                    </div>
                                }
                            }):""
                        }
                        {/* <div >
                            <Product windowWidth={width}/>
                        </div>
                        <div>
                            <Product windowWidth={width}/>
                        </div>
                        <div>
                            <Product windowWidth={width}/>
                        </div>
                        <div>
                            <Product windowWidth={width}/>
                        </div>
                        <div>
                            <Product windowWidth={width}/>
                        </div>
                        <div>
                            <Product windowWidth={width}/>
                        </div>
                        <div>
                            <Product windowWidth={width}/>
                        </div>
                        <div>
                            <Product windowWidth={width}/>
                        </div>
                        <div>
                            <Product windowWidth={width}/>
                        </div> */}
                    </Slider>
                </Col>
            </Row>
        </>
    )
}
export default ItemsContainer;