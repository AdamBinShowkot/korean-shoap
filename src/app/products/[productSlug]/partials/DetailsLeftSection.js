'use client';
import { 
    Row,
    Col,
    Button,
    Card 
} from "react-bootstrap";
import Image from "next/image";
import { 
    baseImageServer 
} from "@/utils/config";
import ImageMagnifier from "./MagnifyingImage";
import ProductSlider from "./ProductSlider";
import VideoPlayerArea from "./VideoPlayerArea";
import './index.scss';
import { useState } from "react";

const DetailsLeftSection=({details})=>{
    const [activeImage,setActiveImage]=useState(`${details.image?details.image:'/detailsImage.png'}`);

    return(
        <>
            <Card
            style={{
                borderRadius:'10px'
            }}
            >
                {/* <Row>
                    <Col 
                    xs={12}
                    style={{
                        padding:'10px 30px'
                    }}
                    >
                        <Button
                        className='save-off-button'
                        >
                            Save 20%
                        </Button>
                    </Col>
                </Row> */}
                {/* <Row> */}
                    <div 
                    //xs={12}
                    style={{
                        display:'flex',
                        width:"100%",
                        justifyContent:'center',
                        alignItems:'center',
                        position:'relative'
                    }}
                    >
                        <Button
                        className='save-off-button product-details'
                        >
                            Save 20%
                        </Button>
                        <ImageMagnifier
                        src={`${details?.image?`${baseImageServer}/${activeImage}`:'/detailsImage.png'}`}
                        height={320}
                        width={320}
                        
                        />
                        {/* <Image
                        src={`${details?.image?`${baseImageServer}/${details.image}`:'/detailsImage.png'}`}
                        height={320}
                        width={320}
                        alt="Image"
                        /> */}
                    </div>
                {/* </Row> */}
            </Card>
            {
                details?.images?.length?<Row
                style={{
                    padding:'20px 0px'
                }}
                >
                    <Col xs={12}>
                        {/* <NormalProduct/> */}
                        <ProductSlider
                        setActiveImage={setActiveImage}
                        images={details.images}
                        />
                    </Col>
                </Row>:""
            }
            <Row
            style={{
                padding:'0px 0px 10px 0px'
            }}
            >
                <Col xs={12}>
                    <VideoPlayerArea/>
                </Col>
            </Row>
        </>
    )
}
export default DetailsLeftSection;