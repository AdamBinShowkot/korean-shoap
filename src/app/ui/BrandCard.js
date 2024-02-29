'use client';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';
import Image from 'next/image';
import { baseImageServer } from '@/utils/config';
import ImageItem from './ImageItems';
import './brand.scss';
import Link from 'next/link';
import ImageItem from './ImageItems';


const BrandCard=({data,IsBrand})=>{
    return(
        <>
            <Link
            href={`${IsBrand?`/products/brands/${data.slug}`:`/products/skin-concern/${data.slug}`}`}
            >
                <Card
                className='brand-main-container'

                >
                    <ImageItem
                    data={data}
                    />
                </Card>
            </Link>
        </>
    )
}
export default BrandCard;