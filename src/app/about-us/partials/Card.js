'use client';
import React from 'react';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';
import Image from 'next/image'
import './index.scss';

const CardMain=()=>{
    return(
        <>
            <Card
            className="mission-slider-card"
            >
                <Card.Img variant="top" src="/missionSlider.png" />
                <Card.Body
                style={{
                   textAlign:'center'
                }}
                >
                    <span>
                    Enriched Hand & Body Wash
                    </span><br/>
                    <span>
                    <b>৳20.00</b>
                    </span>
                    {/* <Card.Title>
                        <Image
                        src='/missionSlider.png'
                        height={589}
                        width={416}
                        />
                    </Card.Title>
                    <Card.Text
                    style={{
                        
                    }}
                    >
                        <span>
                            Neogen Dermalogy Black 
                            Energy Cream 80ml
                        </span>
                    </Card.Text> */}
                </Card.Body>
            </Card>
        </>
    )
}
export default CardMain;