import React from 'react';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';
import Image from 'next/image';
import { 
    baseImageServer 
} from '@/utils/config';
import './index.scss';
import { 
    getMonthNameWithId 
} from '@/utils/dateConfig';

const FakeCardd=({data})=>{
    //console.log("Dataa: ",data);
    const myDate=new Date(data?.created_at);
    const monthName=getMonthNameWithId((myDate.getMonth()+1));

    return(
        <>
            <Card
            className='blog-card'
            style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                visibility:"hidden"
            }}
            >
                <Row
                style={{
                    width: '100%',
                    minHeight:'170px',
                    backgroundImage:`url('${baseImageServer}/${data?.image}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%'
                }}
                >
                    <Col 
                    xs={12}
                    >

                    </Col>
                </Row>
                <Row>
                    <Col 
                    xs={12}
                    style={{
                        padding:'10px',
                        textAlign:'center'
                    }}
                    >
                        <span style={{fontSize:'11px'}}>By: Admin&nbsp;&nbsp; | &nbsp;&nbsp;{monthName} {myDate.getDate()}, {myDate.getFullYear()}</span><br/>
                        <span>
                            <b>
                                {
                                    data?.title?data.title:'Tips & Procedure To Apply Luxury Beauty Cosmetic Cream'
                                }
                            </b>
                        </span>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
export default FakeCardd;