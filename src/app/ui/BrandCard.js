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



const BrandCard=({data,IsBrand})=>{
    return(
        <>
            <Link
            href={`${IsBrand?`/products/brands/${data.slug}`:`/products/skin-concern/${data.slug}`}`}
            >
                <div
                className='brand-main-container'
                >
                    <ImageItem
                    data={data}
                    />
                </div>
            </Link>
        </>
    )
}
export default BrandCard;