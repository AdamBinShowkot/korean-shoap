'use client'
import React from "react";
import {
    Row,
    Col,
    Container,
    Button,
    Card,
    Form,
    InputGroup,
    FormControl,
    InputGroupText
} from 'react-bootstrap';
import BlogPost from "@/app/ui/BlogPost";
import BlogVideo from "@/app/ui/BlogVideo";
import Image from 'next/image';
import './index.scss';

const HomeBlogSection=()=>{
    return(
        <>
            <Container>
                <Row
                className="home-blog-container"
                >
                    <Col className="first grid-items">
                        <Row
                        style={{
                            height:'300px',
                            backgroundImage:`url('/videoBg.jpg')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 100%'
                        }}
                        >
                            <Col 
                            xs={12}
                            style={{
                                position:'relative',
                                padding:'25px 30px'
                            }}
                            >
                                <h2>
                                Korean Shop BD
                                </h2>
                                <Button
                                className="video-watch-button"
                                >
                                    Watch Now
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    {/* <Col className="second grid-items"> */}
                    <Card
                    className="second grid-items"
                    style={{ 
                        width: '100%',
                        padding:'0',
                        //margin:'0px',
                        borderRadius:'5px'
                    }}
                    >
                        <Card.Body
                        style={{
                            padding:'25px 6px 20px'
                        }}
                        >
                            <Row>
                                <Col xs={12}>
                                    <InputGroup>
                                        <FormControl
                                        className='normal-input'
                                        placeholder='search here'
                                        >

                                        </FormControl>
                                        <InputGroupText
                                        className='normal-input global-search'
                                        >
                                            <Image
                                            src="/search.png"
                                            width={20}
                                            height={20}
                                            alt="search"
                                            />
                                        </InputGroupText>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row
                            style={{
                                padding:'15px 0'
                            }}
                            >
                                <Col xs={7}>
                                    <span style={{fontSize:'13px !important'}}><b>Find a Blog and video</b></span>
                                </Col>
                                <Col xs={5}>
                                    <Form.Select
                                    // style={{
                                    //     width:'10%'
                                    // }}
                                    size="sm">
                                        <option>All Video</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row
                            >
                                <Col xs={12}>
                                    <Row
                                    style={{
                                        padding:'4px 0'
                                    }}
                                    >
                                        <Col
                                        xs={12}
                                        style={{
                                            position:'relative'
                                        }}
                                        >
                                            <InputGroup>
                                                <InputGroupText
                                                className='blog-tag-filter-button blog-tag-filter-button-active'
                                                >
                                                    <div
                                                    style={{
                                                        width:'100%',
                                                        display:'flex',
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}
                                                    >
                                                        <div
                                                        style={{
                                                            width:'80%',
                                                            
                                                        }}
                                                        >
                                                            <span
                                                            style={{
                                                                marginRight:'10px'
                                                            }}
                                                            >
                                                                Body Care
                                                            </span>
                                                        </div>
                                                        <div
                                                        style={{
                                                            width:'20%',
                                                            textAlign:'right'
                                                        }}
                                                        >
                                                            <Image
                                                            src="/check.png"
                                                            width={18}
                                                            height={18}
                                                            alt="search"
                                                            />
                                                        </div>
                                                    </div>
                                                </InputGroupText>
                                                <InputGroupText
                                                style={{
                                                    position:'absolute',
                                                    right:'0'
                                                }}
                                                className='blog-tag-filter-button'
                                                >
                                                    <div
                                                    style={{
                                                        width:'100%',
                                                        display:'flex',
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}
                                                    >
                                                        <div
                                                        style={{
                                                            width:'80%',
                                                            
                                                        }}
                                                        >
                                                            <span
                                                            style={{
                                                                marginRight:'10px'
                                                            }}
                                                            >
                                                                Eye Care
                                                            </span>
                                                        </div>
                                                        <div
                                                        style={{
                                                            width:'20%',
                                                            textAlign:'right'
                                                        }}
                                                        >
                                                            <Image
                                                            src="/plus.png"
                                                            width={18}
                                                            height={18}
                                                            alt="search"
                                                            />
                                                        </div>
                                                    </div>
                                                </InputGroupText>
                                            </InputGroup>
                                            
                                            
                                        </Col>
                                    </Row> 
                                    <Row
                                    style={{
                                        padding:'4px 0'
                                    }}
                                    >
                                        <Col
                                        xs={12}
                                        style={{
                                            position:'relative'
                                        }}
                                        >
                                            <InputGroup>
                                                <InputGroupText
                                                className='blog-tag-filter-button'
                                                >
                                                    <div
                                                    style={{
                                                        width:'100%',
                                                        display:'flex',
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}
                                                    >
                                                        <div
                                                        style={{
                                                            width:'80%',
                                                            
                                                        }}
                                                        >
                                                            <span
                                                            style={{
                                                                marginRight:'10px'
                                                            }}
                                                            >
                                                                Eye Care
                                                            </span>
                                                        </div>
                                                        <div
                                                        style={{
                                                            width:'20%',
                                                            textAlign:'right'
                                                        }}
                                                        >
                                                            <Image
                                                            src="/plus.png"
                                                            width={18}
                                                            height={18}
                                                            alt="search"
                                                            />
                                                        </div>
                                                    </div>
                                                </InputGroupText>
                                                <InputGroupText
                                                style={{
                                                    position:'absolute',
                                                    right:'0'
                                                }}
                                                className='blog-tag-filter-button'
                                                >
                                                    <div
                                                    style={{
                                                        width:'100%',
                                                        display:'flex',
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}
                                                    >
                                                        <div
                                                        style={{
                                                            width:'80%',
                                                            
                                                        }}
                                                        >
                                                            <span
                                                            style={{
                                                                marginRight:'10px'
                                                            }}
                                                            >
                                                                Eye Care
                                                            </span>
                                                        </div>
                                                        <div
                                                        style={{
                                                            width:'20%',
                                                            textAlign:'right'
                                                        }}
                                                        >
                                                            <Image
                                                            src="/plus.png"
                                                            width={18}
                                                            height={18}
                                                            alt="search"
                                                            />
                                                        </div>
                                                    </div>
                                                </InputGroupText>
                                            </InputGroup>
                                            
                                            
                                        </Col>
                                    </Row>
                                    <Row
                                    style={{
                                        padding:'4px 0'
                                    }}
                                    >
                                        <Col
                                        xs={12}
                                        style={{
                                            position:'relative'
                                        }}
                                        >
                                            <InputGroup>
                                                <InputGroupText
                                                className='blog-tag-filter-button'
                                                >
                                                    <div
                                                    style={{
                                                        width:'100%',
                                                        display:'flex',
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}
                                                    >
                                                        <div
                                                        style={{
                                                            width:'80%',
                                                            
                                                        }}
                                                        >
                                                            <span
                                                            style={{
                                                                marginRight:'10px'
                                                            }}
                                                            >
                                                                Eye Care
                                                            </span>
                                                        </div>
                                                        <div
                                                        style={{
                                                            width:'20%',
                                                            textAlign:'right'
                                                        }}
                                                        >
                                                            <Image
                                                            src="/plus.png"
                                                            width={18}
                                                            height={18}
                                                            alt="search"
                                                            />
                                                        </div>
                                                    </div>
                                                </InputGroupText>
                                                <InputGroupText
                                                style={{
                                                    position:'absolute',
                                                    right:'0'
                                                }}
                                                className='blog-tag-filter-button'
                                                >
                                                    <div
                                                    style={{
                                                        width:'100%',
                                                        display:'flex',
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}
                                                    >
                                                        <div
                                                        style={{
                                                            width:'80%',
                                                            
                                                        }}
                                                        >
                                                            <span
                                                            style={{
                                                                marginRight:'10px'
                                                            }}
                                                            >
                                                                Eye Care
                                                            </span>
                                                        </div>
                                                        <div
                                                        style={{
                                                            width:'20%',
                                                            textAlign:'right'
                                                        }}
                                                        >
                                                            <Image
                                                            src="/plus.png"
                                                            width={18}
                                                            height={18}
                                                            alt="search"
                                                            />
                                                        </div>
                                                    </div>
                                                </InputGroupText>
                                            </InputGroup>
                                            
                                            
                                        </Col>
                                    </Row>
                                    <Row
                                    style={{
                                        padding:'4px 0'
                                    }}
                                    >
                                        <Col
                                        xs={12}
                                        style={{
                                            position:'relative'
                                        }}
                                        >
                                            <InputGroup>
                                                <InputGroupText
                                                className='blog-tag-filter-button'
                                                >
                                                    <div
                                                    style={{
                                                        width:'100%',
                                                        display:'flex',
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}
                                                    >
                                                        <div
                                                        style={{
                                                            width:'80%',
                                                            
                                                        }}
                                                        >
                                                            <span
                                                            style={{
                                                                marginRight:'10px'
                                                            }}
                                                            >
                                                                Eye Care
                                                            </span>
                                                        </div>
                                                        <div
                                                        style={{
                                                            width:'20%',
                                                            textAlign:'right'
                                                        }}
                                                        >
                                                            <Image
                                                            src="/plus.png"
                                                            width={18}
                                                            height={18}
                                                            alt="search"
                                                            />
                                                        </div>
                                                    </div>
                                                </InputGroupText>
                                                <InputGroupText
                                                style={{
                                                    position:'absolute',
                                                    right:'0'
                                                }}
                                                className='blog-tag-filter-button'
                                                >
                                                    <div
                                                    style={{
                                                        width:'100%',
                                                        display:'flex',
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}
                                                    >
                                                        <div
                                                        style={{
                                                            width:'80%',
                                                            
                                                        }}
                                                        >
                                                            <span
                                                            style={{
                                                                marginRight:'10px'
                                                            }}
                                                            >
                                                                Eye Care
                                                            </span>
                                                        </div>
                                                        <div
                                                        style={{
                                                            width:'20%',
                                                            textAlign:'right'
                                                        }}
                                                        >
                                                            <Image
                                                            src="/plus.png"
                                                            width={18}
                                                            height={18}
                                                            alt="search"
                                                            />
                                                        </div>
                                                    </div>
                                                </InputGroupText>
                                            </InputGroup>
                                            
                                            
                                        </Col>
                                    </Row>
                                    <hr
                                    style={{
                                        margin:'30px 0'
                                    }}
                                    />
                                    <Row
                                    style={{
                                        padding:'0px 0px 10px 0px'
                                    }}
                                    >
                                        <Col xs={12}>
                                            <Button
                                            className="blog-full-width-button"
                                            >
                                                Skin Care Blog
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row
                                    style={{
                                        padding:'10px 0px'
                                    }}
                                    >
                                        <Col xs={12}>
                                            <BlogPost isChecked={true} isNew={true}/>
                                        </Col>
                                    </Row>
                                    <Row
                                    style={{
                                        padding:'10px 0px'
                                    }}
                                    >
                                        <Col xs={12}>
                                            <BlogPost isChecked={true} isNew={true}/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>   
                    {/* </Col> */}
                    <Col className="third grid-items">
                    <Row
                        style={{
                            padding:'20px 0'
                        }}
                        >
                            <Col 
                            xs={6}
                            style={{
                                padding:'0'
                            }}
                            >
                                <Row>
                                    <Col 
                                    xs={6}
                                   
                                    >
                                        <span><b>Video</b></span>
                                    </Col>
                                    <Col 
                                    xs={6}
                                    
                                    >
                                        <span>| 12 video</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col 
                            xs={6}
                            style={{
                                textAlign:'right',
                                justifyContent:'flex-end'
                            }}
                            >
                                {/* <Form.Select
                                style={{
                                    width:'10%'
                                }}
                                size="sm">
                                    <option>All Video</option>
                                </Form.Select> */}
                            </Col>
                        </Row>
                        <Row
                        style={{
                            padding:'0px'
                        }}
                        >
                            <Col 
                            xs={4}
                            style={{
                                padding:'6px'
                            }}
                            >
                                <BlogVideo/>
                            </Col>
                            <Col 
                            xs={4}
                            style={{
                                padding:'6px'
                            }}
                            >
                                <BlogVideo image={'sVideo2.png'}/>
                            </Col>
                            <Col 
                            xs={4}
                            style={{
                                padding:'6px'
                            }}
                            >
                                <BlogVideo image={'sVideo1.png'}/>
                            </Col>
                        </Row>
                        <Row
                        style={{
                            padding:'20px 0'
                        }}
                        >
                            <Col 
                            xs={6}
                            style={{
                                padding:'0'
                            }}
                            >
                                <Row>
                                    <Col 
                                    xs={6}
                                   
                                    >
                                        <span><b>Recent Post</b></span>
                                    </Col>
                                    <Col 
                                    xs={6}
                                    
                                    >
                                        <span>| 12 video</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col 
                            xs={6}
                            style={{
                                textAlign:'right',
                                justifyContent:'flex-end'
                            }}
                            >
                                {/* <Form.Select
                                style={{
                                    width:'10%'
                                }}
                                size="sm">
                                    <option>All Video</option>
                                </Form.Select> */}
                            </Col>
                        </Row>
                        <Row
                        style={{
                            padding:'0px'
                        }}
                        >
                            <Col 
                            xs={4}
                            style={{
                                padding:'6px'
                            }}
                            >
                               <BlogPost/>
                            </Col>
                            <Col 
                            xs={4}
                            style={{
                                padding:'6px'
                            }}
                            >
                                <BlogPost/>
                            </Col>
                            <Col 
                            xs={4}
                            style={{
                                padding:'6px'
                            }}
                            >
                                <BlogPost/>
                            </Col>
                        </Row>
                   </Col>
                </Row>
            </Container>
        </>
    )
}
export default HomeBlogSection;