'use client';
import React from 'react';
import { 
    Row,
    Col,
    Modal,
    Button
} from 'react-bootstrap';
import Image from 'next/image';

const WarningModal=({IsShow,setIsShow,setYesDelete,deletData,handleRemoveCart})=>{
    return(
        <>
            <Modal 
            show={IsShow} 
            onHide={setIsShow}
            centered={true}
            style={{
                zIndex:'10000 !important'
            }}
            >
                <Modal.Body
                style={{
                    padding:'15px 20px'
                }}
                >
                   <Row>
                        <Col 
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            flexDirection:'column',
                            padding:"20px 0px"
                        }}
                        >
                            <Image
                            src="/cart_warning.png"
                            height={70}
                            width={70}
                            alt="Cart Success"
                            />
                            <Row>
                                <Col
                                style={{
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    flexDirection:'column',
                                    marginTop:"10px"
                                }}
                                >
                                    <h3 style={{fontSize:'24px',fontWeight:'600',textAlign:'center'}}>Are you sure?<br/> you want to delete item from lists.</h3><br/>
                                    <span>You won't be able to revert this!</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                style={{
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    flexDirection:'row',
                                    marginTop:"20px"
                                }}
                                >
                                    <Button
                                    style={{
                                        margin:"0px 15px",
                                        backgroundColor:"#389e0d",
                                        border:'none'
                                    }}
                                    onClick={()=>{
                                        setIsShow(false);
                                        if(deletData.id){
                                            handleRemoveCart(deletData)
                                        }
                                    }}
                                    >
                                        Yes.delete it!
                                    </Button>
                                    <Button
                                    style={{
                                        margin:"0px 15px",
                                        backgroundColor:'#fa541c',
                                        border:'none'
                                    }}
                                    onClick={()=>{
                                        setIsShow(false)
                                    }}
                                    >
                                        Close
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                   </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default WarningModal;