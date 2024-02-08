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

const WarningToaster=({IsShow,ToastMsg,Postion,Width})=>{
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
                style={{
                    width:Width?Width:'20vw'
                }}
                >
                    <Toast.Body
                    style={{
                        display:'flex',
                        justifyContent:'space-around',
                        alignItems:'center',
                        flexDirection:'row',
                        
                    }}
                    className={`korean-shoap-toaster toast-login-warning`}
                    >
                        <Image
                        src="/warning_icon.png"
                        height={30}
                        width={30}
                        alt="Warning Icon"
                        />
                        <h4>{ToastMsg?ToastMsg:''}</h4>
                    </Toast.Body>
                </Toast>
        </ToastContainer>
    )
}

export default WarningToaster;