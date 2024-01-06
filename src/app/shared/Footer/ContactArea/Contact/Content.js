import React from 'react';
import './index.scss'

const Content=({isContentShow})=>{
    return(
        <>
            <p className={`${isContentShow?'show-contact-content content':'hide-contact-content content'}`}>
                <span>
                Zigatola dhanmondi 1209
                </span><br/>
                <span>
                Email: koreanshop@gmail.com
                </span>
                <br/>
                <span>Hotline: +880170000000</span>
            </p>
        </>
    )
}
export default Content;