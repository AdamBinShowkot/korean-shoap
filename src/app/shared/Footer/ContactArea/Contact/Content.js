import React from 'react';
import './index.scss'

const Content=({isContentShow})=>{
    return(
        <>
            <p className={`${isContentShow?'show-contact-content content':'hide-contact-content content'}`}>
                <span>
                    50 Zigatola Kacha Bazar,Dhaka,Bangladesh
                </span><br/>
                <span>
                    Mail:koreanshopbangladesh@gmail.com
                </span>
                <br/>
                <span>Phone:+8801303-779646</span>
            </p>
        </>
    )
}
export default Content;