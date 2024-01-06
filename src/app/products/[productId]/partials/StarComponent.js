'use client';
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating';
import './index.scss';

const StarComponent=({rate,size})=>{
    const [rating, setRating] = useState(rate?rate:3)
    return(
        <>
            <div className='star-rating' style={{display:"flex !important"}}>
                <Rating 
                //onClick={handleRating}
                size={size?size:20}
                transition
                allowFraction
                //showTooltip 
                initialValue={rating} 
                />
            </div>
        </>
    )
}
export default StarComponent;