'use client';
import React,{
    useState,
    useEffect
} from 'react';
import {
    Col,
    Container,
    Row,
    FormControl,
    InputGroup,
    InputGroupText,
    Form,
    Button
} from 'react-bootstrap';
import { 
    useRouter 
} from 'next/navigation';
import Image from 'next/image';

const HeaderSearchInput=()=>{
    const [searchParams,setSearchParams]=useState("");
    const router=useRouter();

    const handleOnSearch=(e)=>{
        e.preventDefault();
        if(searchParams){
            router.push(`/products?q=${searchParams}`)
        }
    }
    return(
        <>
            <InputGroup>
                <FormControl
                className='normal-input'
                placeholder='search here'
                value={searchParams}
                onChange={(e)=>{
                    setSearchParams(e.target.value);
                }}
                >

                </FormControl>
                <InputGroupText
                className='normal-input global-search'
                onClick={handleOnSearch}
                >
                    <Image
                    src="/search.png"
                    width={20}
                    height={20}
                    alt="search"
                    />
                </InputGroupText>
            </InputGroup>
        </>
    )
}
export default HeaderSearchInput;