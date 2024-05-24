import React from 'react';
import { 
    Row,
    Col 
} from 'react-bootstrap';
import Image from 'next/image';
import { baseImageServer } from '@/utils/config';
import './brand.scss';
import Link from 'next/link';
import './brand.scss';

const ImageItem=({data})=>{
    return(
        // <section
        // style={{
        //     height:"100%",
        //     width:'100%',
        //     display:'flex'
        // }}
        // >
           
                <div
                className='image-container'
                style={{
                   
                }}
                >
                    <Image
                    src={`${data?.image?`${baseImageServer}/${data.image}`:'/products2.jpg'}`}
                    height={220}
                    width={230}
                    alt={`${data?.img_alt?data?.img_alt:'Alter Text'}`}
                    className='brand-image'
                    />
                </div>
            
        // </section>
    )
}
export default ImageItem;