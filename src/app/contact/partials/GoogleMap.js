import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import Image from 'next/image';

const GoogleMap=()=>{
    return(
        <>
            <Row
            style={{
                padding:'20px 50px'
            }}
            >
                <Col 
                xs={12}
                style={{
                    width: '100%',
                    height:'400px',
                    backgroundImage:`url('/googleMapArea.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    padding:'10px',
                    margin:'0px',
                    borderRadius:'5px',
                    border:'none',
                }}
                >
                </Col>
            </Row>
        </>
    )
}
export default GoogleMap;