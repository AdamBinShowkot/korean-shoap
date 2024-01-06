import React from 'react';
import {
    Row,
    Col,
    Image
} from 'react-bootstrap';
import StarComponent from './StarComponent';
import './index.scss';

const ListMain=()=>{
    return(
        <>
            <Row>
                <Col 
                xs={12}
                >
                    <Row>
                        <Col 
                        xs={1}
                        style={{
                            display:'flex',
                            justifyContent:'flex-end',
                            alignItems:'baseline'
                        }}
                        >
                            <Image src="/avatar.png" circle="true" alt=''/>
                        </Col>
                        <Col xs={11}>
                            <Row>
                                <Col xs={6}>
                                    <h3>Marry</h3>
                                    <StarComponent rate={5} size={10}/>
                                </Col>
                                <Col 
                                xs={6}
                                style={{
                                    textAlign:'right'
                                }}
                                >
                                    <span style={{fontSize:'12px',color:'grey'}}>09/10/2022</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col 
                                xs={12}
                                >
                                    <h4>
                                    Luxurious
                                    </h4>
                                    <p className='comment-description'>
                                    I absolutely love the Ultra-Rich Moisturize Cream and I use it every night and I&apos;ve seen a huge difference in my skin! Who needs botox?? It's hydrating, moisturizing and leaves your skin with the most radiant glow! My pigmentation has gotten better since using this whole Anti-aging brightening line! It smells and feels DIVINE!! So luxurious! My skRead more about review stating Delicious!in looks smooth, clear and youthful and I'm SO impressed and grateful.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </>
    )
}

export default ListMain;