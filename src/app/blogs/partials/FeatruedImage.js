import React from 'react';
import{
    Row,
    Col,
    Button
} from 'react-bootstrap';
import './index.scss';

const FeaturedImage=()=>{
    return(
        <>
            <Row
            style={{
                width: '100%',
                minHeight:'320px',
                backgroundImage:`url('/blogFeatured2.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%'
            }}
            >
                <Col 
                xs={12}
                style={{
                    textAlign:'center',
                    padding:"25px 20px",
                    position:'relative'
                }}
                >
                    <h2 style={{color:"#fff",fontWeight:'500'}}>CARE FOR YOUR</h2>
                    <h2 style={{color:"#fff",fontWeight:'700'}}>BEAUTY</h2>
                    <Button
                    className='featured-explore-more'
                    >
                        Explore More
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col 
                xs={12}
                style={{
                    padding:"0px",
                    marginTop:'30px'
                }}
                >
                    <h3>Tag</h3><br/>
                    <Button
                    className='tag-button'
                    >
                        Beauty
                    </Button>
                    <Button
                    className='tag-button'
                    >
                        Make Up
                    </Button>
                    <Button
                    className='tag-button'
                    >
                        Oils & Serum
                    </Button>
                    <Button
                    className='tag-button'
                    >
                        Skincare Treatments
                    </Button>
                    <Button
                    className='tag-button'
                    >
                        Cleansers & Toner
                    </Button>
                    <Button
                    className='tag-button'
                    >
                        Tools
                    </Button>
                    <Button
                    className='tag-button'
                    >
                        Women
                    </Button>
                    <Button
                    className='tag-button'
                    >
                        Exfoliators
                    </Button>
                    <Button
                    className='tag-button'
                    >
                        Men
                    </Button>
                </Col>
            </Row>
        </>
    )
}
export default FeaturedImage;