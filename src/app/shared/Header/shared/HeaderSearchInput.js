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
import axios from 'axios';
import ConfigureAxios from '@/utils/axiosConfig';
import './index.scss';
import Link from 'next/link';

const HeaderSearchInput=()=>{
    const [searchParams,setSearchParams]=useState("");
    const [searchLists,setSearchLists]=useState([]);
    const router=useRouter();

    const handleOnSearch=(e)=>{
        
        e.preventDefault();

        if(searchParams){
            // setSearchLists([]);
            // setSearchParams("");
            setSearchLists([]);
            setSearchParams("");
            window.location.href=`/products?q=${searchParams}`
            // setTimeout(()=>{
            //     router.push(`/products?q=${searchParams}`)
            // },100)
        }
    }
    const handleOnChange=(e)=>{
        const {value}=e.target;
        setSearchParams(e.target.value);
        ConfigureAxios();
        if(value){
            axios.get(`/public/product-search?q=${value}`)
            .then((response)=>{
                if(response.status==200){
                    const dataLists=response.data.items;
                    if(dataLists.length){
                        setSearchLists(dataLists)
                    }else{
                        setSearchLists([]);
                    }
                }
            }).catch((error)=>{
                setSearchLists([]);
                console.log("On search error.")
            })
        }
    }
    return(
        <>
            <div
            className='header-search-input'
            >
                <InputGroup
                style={{
                    zIndex:2
                }}
                // className='header-search-input'
                >
                    {/* <div
                    style={{
                        display:'flex'
                    }}
                    > */}
                        <FormControl
                        className='normal-input'
                        placeholder='search here'
                        value={searchParams}
                        onChange={handleOnChange}
                        onKeyDown={(e)=>{
                            if(e.key=="Enter" && searchParams){
                                // setSearchLists([]);
                                // setSearchParams("");
                                // router.push(`/products?q=${searchParams}`)
                                setSearchLists([]);
                                setSearchParams("");
                                window.location.href=`/products?q=${searchParams}`
                            }
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
                    {/* </div> */}
                    
                </InputGroup>
                <ul 
                className={`live-search-list ${searchParams?'':'search-hide'}`}
                >
                   {
                    searchLists?.length?searchLists.map((data)=>{
                        return <li 
                        key={data.id}
                        onClick={()=>{
                            setSearchLists([]);
                            setSearchParams("");
                        }}
                        >
                            <Link
                            href={`/products/${data.slug}`}
                            >
                                {data.name}
                            </Link>
                        </li>
                    }):<li>
                        Opps! Not Found.
                    </li>
                   }
                    {/* <li>Is</li>
                    <li>My</li>
                    <li>Search</li>
                    <li>With</li>
                    <li>Black Jack</li>
                    <li>and</li>
                    <li>Sluts</li>
                    <li>BellHard</li> */}
                </ul>
            </div> 
        </>
    )
}
export default HeaderSearchInput;