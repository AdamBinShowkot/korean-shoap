import React from 'react';
import {
    Card
} from 'react-bootstrap';
import { 
    baseImageServer 
} from '@/utils/config';

const NormalProduct=({image,setActiveImage})=>{
    return(
        <>
            <Card
            onMouseEnter={()=>{
                setActiveImage(image)
            }}
            className='slider-normal-card'
            style={{
                width: '110px',
                height:'110px',
                backgroundColor:'transparent',
                backgroundImage:`url(${baseImageServer}/${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
            }}
            >

            </Card>
        </>
    )
}
export default NormalProduct;