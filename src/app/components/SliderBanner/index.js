'use client'
import React,{useEffect,useState} from 'react';
import {
    Card,
    Button,
    Col,
    Row
} from 'react-bootstrap';
import { 
    baseImageServer 
} from '@/utils/config';
import ConfigureAxios from '@/utils/axiosConfig';
import axios from 'axios';
import Slider from 'react-slick';
import './index.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const SliderBanner=()=>{
    const [lists,setLists]=useState([]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true
    };
    useEffect(()=>{
        initialLoading();
    },[])

    const initialLoading=async()=>{
        getHeroBgImage();
    }

    const getHeroBgImage=async()=>{
        ConfigureAxios();
        const response=await axios.get('/public/sliders/hero-slider').then((res)=>{
          if(res.status===200){
            //console.log("Products : ",res.data);
            return res.data;
          }
        }).catch((error)=>{
          //console.log(error)
          console.log("Get Home Page Image Error.")
          return [];
        });
      
        if(response.length){
            setLists(response);
        }else{
            setLists([])
        }
      }
    //console.log("Lists",lists)
    return(
        <>
            <Row
            style={{
                // minHeight:'280px',
                overflow:'hidden',
            }}
            className='slide-image-row'
            >
                <Col
                style={{
                    // minHeight:'280px',
                    padding:'0px !important',
                    margin:'0px !important'
                }}
                //className='slide-image-col'
                >
                    <Slider 
                    {...settings}
                    className="main-slide"
                    >
                        {/* <div
                        // style={{
                        //     minHeight:'500px'
                        // }}
                         //className='slide-image'
                        >
                            <Image
                            src={'/bsOne.png'}
                            //src={`${baseImageServer}/images/slider/wa0fZzpnCzFgWKkZgL6P.jpeg`}
                            width={1920}
                            height={440}
                            alt="Slide Image"
                            className='top-slide-image'
                            //style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                        <div
                        // style={{
                        //     minHeight:'500px'
                        // }}
                        //className='slide-image'
                        >
                            <Image
                            src={'/bsOne.png'}
                            width={1920}
                            height={440}
                            alt="Slide Image"
                            className='top-slide-image'
                            //style={{ width: '100%', height: 'auto' }}
                            />
                        </div> */}
                        {
                            lists?.length?lists.map((dta)=>{
                                return <div
                                key={dta.id}
                                >
                                    <Image
                                    //src={'/bsOne.png'}
                                    src={`${baseImageServer}/${dta.image?dta.image:'bsOne.png'}`}
                                    width={1920}
                                    height={440}
                                    alt="Slide Image"
                                    className='top-slide-image'
                                    />
                                </div>
                            }):""
                        }
                    </Slider>
                </Col>
            </Row>
        </>
    )
}
export default SliderBanner;