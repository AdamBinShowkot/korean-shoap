'use client';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';
import Image from 'next/image';
import { 
    baseImageServer 
} from '@/utils/config';
import ImageItem from './ImageItems';
import './brandTwo.scss';
import Link from 'next/link';



const BrandCardTwo=({data,IsBrand})=>{
    return(
        <>
            <Link
            href={`${IsBrand?`/products/brands/${data.slug}`:`/products/skin-concern/${data.slug}`}`}
            >
                <div
                className='brand-main-container-two'
                >
                    <ImageItem
                    data={data}
                    />
                </div>
            </Link>
        </>
    )
}
export default BrandCardTwo;