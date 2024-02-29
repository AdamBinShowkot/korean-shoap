import React from 'react';
import Image from 'next/image';
import { baseImageServer } from '@/utils/config';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';
import './brand.scss'

const ImageItem=({data})=>{
    return(
        <section>
            <Row>
                <Col
                className='image-container'
                >
                    <Image
                    src={`${data?.image?`${baseImageServer}/${data.image}`:'/products2.jpg'}`}
                    height={220}
                    width={190}
                    alt={`${data?.img_alt?data?.img_alt:'Alter Text'}`}
                    className='brand-image'
                    />
                </Col>
            </Row>
        </section>
    )
}
export default ImageItem;