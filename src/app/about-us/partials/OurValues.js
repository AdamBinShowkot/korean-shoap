import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import './index.scss';
import ValuesCard from './ValuesCard';

const OurValues=()=>{
    return(
        <>
            <Row
            
            >
                <Col 
                xs={12}
                className='our-values-container'
                >
                    <Row>
                        <Col xs={12}>
                            <h2>
                                Our Values
                            </h2>
                        </Col>
                    </Row>
                    <Row
                    
                    >
                        <Col 
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <hr className='our-values-hr'/>
                        </Col>
                    </Row>
                    <Row
                    style={{
                        padding:'50px 0px'
                    }}
                    >
                        <Col xs={6}>
                            <ValuesCard

                            />
                        </Col>
                        <Col xs={6}>
                            <ValuesCard
                            title={"Worldwide Shipping"}
                            image="values2.png"
                            description={"Low Charges | 1,99€ Standard Shipping"}
                            />
                        </Col>
                    </Row>
                    <Row
                    style={{
                        padding:'50px 0px'
                    }}
                    >
                        <Col xs={4}>
                            <ValuesCard
                            title={"Vegan Products"}
                            image="values3.png"
                            description={"Vegan Products available!"}
                            />
                        </Col>
                        <Col xs={4}>
                            <ValuesCard
                            title={"Mild Formula"}
                            image="values4.png"
                            description={"Less irritation | Suitable for sensitive skin"}
                            />
                        </Col>
                        <Col xs={4}>
                            <ValuesCard
                            title={"Cruelty Free"}
                            image="values5.png"
                            description={"We care for our forests | FSC Certified"}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default OurValues;