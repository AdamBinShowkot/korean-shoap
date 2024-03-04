import React from 'react';
import './index.scss'

const Content=({isContentShow})=>{
    return(
        <>
            <p className={`${isContentShow?'show-contact-content content':'hide-contact-content content'}`}>
                <span>
                    <strong>50 Zigatola Kacha Bazar,Dhaka,Bangladesh</strong>
                </span><br/>
                <span>
                    <strong>Mail:koreanshopbangladesh@gmail.com</strong>
                </span>
                <br/>
                <span><strong>Phone:+8801303-779646</strong></span>
            </p>
        </>
    )
}
export default Content;