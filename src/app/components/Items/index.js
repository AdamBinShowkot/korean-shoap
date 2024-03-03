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
const ItemsContainer=({title,lists,len})=>{
   
    const [myLists,setMyLists]=useState([]);
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
    }, [width]);

    // console.log("TWO",myLists);
    // console.log("TWO",title);
    return(
        <>
            <Row>
                <Col 
                xs={12}
                className='products-item-title'
                >
                    <p>
                        <strong>{title?title:''}</strong> <span>{'  '}items</span>
                    </p>
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
                                        <NewProduct data={dta}/>
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