'use client';
import React, { 
    useEffect, 
    useState 
} from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import { 
    useRouter 
} from 'next/navigation';
import WishLists from './WishLists';

const WishListsMain=()=>{
    const history=useRouter();
    const [IsAuth,setIsAuth]=useState(false);

    useEffect(()=>{
        const myToken=localStorage.getItem("token");
        if(myToken){
            setIsAuth(true);
        }else{
            setIsAuth(false);
            history.push("/accounts")
        }
    },[])

    return(
        <>
            {
                IsAuth?(
                    <WishLists/>
                ):""
            }
        </>
    )
}
export default WishListsMain;