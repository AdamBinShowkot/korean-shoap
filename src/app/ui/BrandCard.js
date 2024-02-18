'use client';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';
import Image from 'next/image';
import { baseImageServer } from '@/utils/config';
import './brand.scss';
import Link from 'next/link';


const BrandCard=({data})=>{
    return(
        <>
            <Card
            className='brand-main-container'
            >
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
                <Row>
                    <Col
                    className='brand-title-container'
                    >
                        <Link
                        href={`/products/brands/${data.slug}`}
                        className='brand-title-link'
                        >
                            <h3>{data.name}</h3>
                        </Link>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
export default BrandCard;