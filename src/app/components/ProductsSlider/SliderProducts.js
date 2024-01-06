'use client'
import React,{
    useState,
    useEffect
} from 'react';
import {
    Card,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import StaticProducts from '@/app/ui/StaticCard';
import Product from '@/app/ui/Product';
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
const SliderProducts=()=>{
    const [settings,setSetting]=useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    })
    // const [windowSize, setWindowSize] = useState([
    //     0,
    //     0,
    // ]); 
    const [width, height] = useDeviceSize();  
    
    useEffect(() => {
        //console.log("Helooooo",width)
        if(width<420){

            let newSettings={...settings,slidesToShow:2};
            setSetting(newSettings)
        }else{
            let newSettings={...settings,slidesToShow:5};
            setSetting(newSettings)
        }
    
        return () => {
          
        };
    }, [width]);

    // const windowSizeHandler = () => {
    //     if(window.innerWidth<420){
    //         let newSettings={...settings,slidesToShow:2};
    //         setSetting(newSettings)
    //     }else{

    //     }
    //     setWindowSize([window.innerWidth, window.innerHeight]);
    // };
    return(
        <>
            <Row 
            style={{
                
            }}
            className='product-slider-container'
            >
                <Col xs={12}>
                    <Slider {...settings}>
                        <div>
                            <StaticProducts/>
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
                    </Slider>
                </Col>
           </Row>

            <Row 
            style={{
                padding:'20px 0px'
            }}
            >
                <Col 
                xs={12}
                className='product-non-slide-container'
                >
                    <Product windowWisth={width}/>
                    <Product windowWisth={width}/>
                    <Product windowWisth={width}/>
                    <Product windowWisth={width}/>
                    <Product windowWisth={width}/>
                </Col>
            </Row>

            <Row 
            style={{
                padding:'20px 0px'
            }}
            >
                <Col 
                xs={12}
                className='product-non-slide-container'
                >
                    <Product windowWisth={width}/>
                    <Product windowWisth={width}/>
                    <Product windowWisth={width}/>
                    <Product windowWisth={width}/>
                    <Product windowWisth={width}/>
                </Col>
            </Row>
        </>
    )
}
export default SliderProducts;