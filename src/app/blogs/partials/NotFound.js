import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';

const Notfound=()=>{
    return(
        <>
            <Row>
                <Col
                style={{
                    justifyContent:'center',
                    alignItems:"center",
                    display:'flex',
                    padding:"40px auto"
                }}
                >
                    <h3>No Blog Items Found.</h3>
                </Col>
            </Row>
        </>
    )
}
export default Notfound;