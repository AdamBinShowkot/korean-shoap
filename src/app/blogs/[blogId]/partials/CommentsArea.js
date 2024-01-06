import React from 'react';
import {
    Row,
    Col,
    Image as BImage,
    Button
} from 'react-bootstrap';
import Image from 'next/image';
import './index.scss';

const CommentsArea=()=>{
    return(
        <>
            <Row
            style={{
                textAlign:'left'
            }}
            >
                <Col 
                xs={12}
                style={{
                    padding:'0px'
                }}
                className='commnets-container'
                >
                    <h3>4 comments</h3>
                    <hr className='comments-hr'/>
                    <Row>
                        <Row
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <Col 
                            xs={6}
                            style={{
                                display:'flex',
                                justifyContent:'flex-start',
                                alignItems:'center'
                            }}
                            >
                                <BImage src="/avatar.png" circle="true" /> 
                                &nbsp;&nbsp;
                                <span> 
                                    October 25, 2022 at 10:30 AM <br/>
                                    <b>Marry</b>
                                </span>
                            </Col>
                            <Col 
                            xs={6}
                            style={{
                                display:'flex',
                                justifyContent:'flex-end',
                                alignItems:'center'
                            }}
                            >
                                <Button
                                className='comments-reply-button' 
                                >
                                    <Image
                                    src='/reply.png'
                                    height={15}
                                    width={15}
                                    alt=""
                                    />
                                    &nbsp;
                                    Reply
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col 
                            xs={12}
                            style={{
                                padding:'0px 0px 0px 70px'
                            }}
                            >
                                <span>
                                    I absolutely love the Ultra-Rich Moisturize Cream and I use it every night and I&apos;ve seen a huge difference in my skin! Who needs botox?? 
                                    It&apos;s hydrating, moisturizing and leaves your skin with the most radiant glow! 
                                    My pigmentation has gotten better since using this whole Anti-aging brightening line! 
                                    It smells and feels DIVINE!! So luxurious! My skRead more about review stating Delicious!in looks smooth, clear and youthful and I&apos;m SO impressed and grateful.
                                </span>
                                <br/>
                                <hr  className='comments-hr'/>
                                <Row>
                                    <Col 
                                    xs={12}>
                                        <Row
                                        style={{
                                            display:'flex',
                                            justifyContent:'center',
                                            alignItems:'center'
                                        }}
                                        >
                                            <Col 
                                            xs={12}
                                            style={{
                                                display:'flex',
                                                justifyContent:'flex-start',
                                                alignItems:'center'
                                            }}
                                            >
                                                <BImage src="/avatar.png" circle="true" /> 
                                                &nbsp;&nbsp;
                                                <span> 
                                                    October 25, 2022 at 10:30 AM <br/>
                                                    <b>Marry</b>
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col 
                                            xs={12}
                                            style={{
                                                padding:'0px 0px 0px 70px'
                                            }}
                                            >
                                                <span>
                                                    I absolutely love the Ultra-Rich Moisturize Cream and I use it every night and I&apos;ve seen a huge difference in my skin! Who needs botox?? 
                                                    It&apos;s hydrating, moisturizing and leaves your skin with the most radiant glow!
                                                </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <hr  className='comments-hr'/>
                                <Row>
                                    <Col 
                                    xs={12}>
                                        <Row
                                        style={{
                                            display:'flex',
                                            justifyContent:'center',
                                            alignItems:'center'
                                        }}
                                        >
                                            <Col 
                                            xs={12}
                                            style={{
                                                display:'flex',
                                                justifyContent:'flex-start',
                                                alignItems:'center'
                                            }}
                                            >
                                                <BImage src="/avatar.png" circle="true" /> 
                                                &nbsp;&nbsp;
                                                <span> 
                                                    October 25, 2022 at 10:30 AM <br/>
                                                    <b>Marry</b>
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col 
                                            xs={12}
                                            style={{
                                                padding:'0px 0px 0px 70px'
                                            }}
                                            >
                                                <span>
                                                    I absolutely love the Ultra-Rich Moisturize Cream and I use it every night and I&apos;ve seen a huge difference in my skin! Who needs botox?? 
                                                    It smells and feels DIVINE!! So luxurious! My skRead more about review stating Delicious!in looks smooth, clear and youthful and I&apos;m SO impressed and grateful.
                                                </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                    <hr  className='comments-hr'/>
                    <Row>
                        <Row
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <Col 
                            xs={6}
                            style={{
                                display:'flex',
                                justifyContent:'flex-start',
                                alignItems:'center'
                            }}
                            >
                                <BImage src="/avatar.png" circle="true" /> 
                                &nbsp;&nbsp;
                                <span> 
                                    October 25, 2022 at 10:30 AM <br/>
                                    <b>Marry</b>
                                </span>
                            </Col>
                            <Col 
                            xs={6}
                            style={{
                                display:'flex',
                                justifyContent:'flex-end',
                                alignItems:'center'
                            }}
                            >
                                <Button
                                className='comments-reply-button' 
                                >
                                    <Image
                                    src='/reply.png'
                                    height={15}
                                    width={15}
                                    alt=""
                                    />
                                    &nbsp;
                                    Reply
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col 
                            xs={12}
                            style={{
                                padding:'0px 0px 0px 70px'
                            }}
                            >
                                <span>
                                    I absolutely love the Ultra-Rich Moisturize Cream and I use it every night and I&apos;ve seen a huge difference in my skin! Who needs botox?? 
                                    It&apos;s hydrating, moisturizing and leaves your skin with the most radiant glow! 
                                    My pigmentation has gotten better since using this whole Anti-aging brightening line! 
                                    It smells and feels DIVINE!! So luxurious! My skRead more about review stating Delicious!in looks smooth, clear and youthful and I&apos;m SO impressed and grateful.
                                </span>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default CommentsArea;