'use client';
import React,{
    useEffect,
    useState
} from 'react';
import {
    Toast,
    ToastContainer
} from 'react-bootstrap'
import Image from 'next/image';
import './toaster.scss';

const SuccessToaster=({IsShow,ToastMsg,Postion})=>{
    return(
        <ToastContainer
            className="p-3"
            position={`${Postion}`}
            style={{ 
                zIndex: 10000,
                position:'fixed'
            }}
            >
                <Toast 
                show={IsShow?IsShow:false}
                className='koraen-shoap-toaster-container'
                >
                    <Toast.Body
                    style={{
                        display:'flex',
                        justifyContent:'space-around',
                        alignItems:'center',
                        flexDirection:'row',
                        
                    }}
                    className={`korean-shoap-toaster toast-login-success`}
                    >
                        <Image
                        src="/success_icon.png"
                        height={30}
                        width={30}
                        alt="Success Icon"
                        />
                        <h4>{ToastMsg?ToastMsg:''}</h4>
                    </Toast.Body>
                </Toast>
        </ToastContainer>
    )
}

export default SuccessToaster;