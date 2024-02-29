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
import ImageItem from './ImageItems';


const BrandCard=({data,IsBrand})=>{
    return(
        <>
           <Col
           xl={2}
           sm={6}
           >
                <Card
                className='brand-main-container'
                >
                    <Link
                    href={`${IsBrand?`/products/brands/${data.slug}`:`/products/skin-concern/${data.slug}`}`}
                    >
                        <ImageItem
                        data={data}
                        />
                    </Link>
                </Card>
           </Col>
        </>
    )
}
export default BrandCard;