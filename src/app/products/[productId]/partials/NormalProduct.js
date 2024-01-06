import React from 'react';
import {
    Card
} from 'react-bootstrap';

const NormalProduct=({image})=>{
    return(
        <>
            <Card
            style={{
                width: '120px',
                height:'130px',
                backgroundImage:`url('/detailsSlider.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
            }}
            >

            </Card>
        </>
    )
}
export default NormalProduct;