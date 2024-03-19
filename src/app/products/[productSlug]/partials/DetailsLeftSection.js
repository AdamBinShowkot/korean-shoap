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
                <Row>
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
                </Row>
                <Row>
                    <Col 
                    xs={12}
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    >
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
                    </Col>
                </Row>
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
        </>
    )
}
export default DetailsLeftSection;