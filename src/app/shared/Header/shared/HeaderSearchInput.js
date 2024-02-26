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
import { 
    baseImageServer 
} from '@/utils/config';

const HeaderSearchInput=()=>{
    const [searchParams,setSearchParams]=useState("");
    const [searchLists,setSearchLists]=useState([]);
    const [IsSearchStart,setIsSearchStart]=useState(false);
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
            setIsSearchStart(true);
            axios.get(`/public/product-search?q=${value}`)
            .then((response)=>{
                if(response.status==200){
                    const dataLists=response.data.items;
                    if(dataLists.length){
                        setSearchLists(dataLists)
                        setIsSearchStart(false);
                    }else{
                        setIsSearchStart(false);
                        setSearchLists([]);
                    }
                }
            }).catch((error)=>{
                setIsSearchStart(false);
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
                        IsSearchStart?<div className="loading-container">
                            <Image
                            src={`/loading_gif.gif`}
                            height={70}
                            width={70}
                            alt="Is Loading."
                            />
                        </div>:searchLists?.length?searchLists.map((data)=>{
                            return <Link
                                href={`/products/${data.slug}`}
                                key={data.id}
                                onClick={()=>{
                                    setSearchLists([]);
                                    setSearchParams("");
                                }}
                                >
                                    <li
                                    className='items-lists'
                                    >
                                        <div
                                        className="item-div left-container"
                                        >
                                            <Image
                                            src={`${data?.image?`${baseImageServer}/${data.image}`:'/products2.jpg'}`}
                                            height={80}
                                            width={80}
                                            alt={`${data?.img_alt?data.img_alt:'Alt Image'}`}
                                            className='search-item-image'
                                            />
                                        </div>
                                        <div
                                        className="item-div right-container"
                                        >
                                            <span>
                                                <b>{data.name}</b>
                                            </span>
                                            <span>
                                                Status: <b>{data?.variant[0]?.stock>=1?"In Stock":"Stock Out"}</b>
                                            </span>
                                            <span
                                            style={{
                                                display:'flex'
                                            }}
                                            >
                                                <h3 className="search-cart-price-text" style={{marginRight:'5px'}}>
                                                ৳{data?.variant[0]?.price && data?.variant[0]?.discount_price?parseFloat(data?.variant[0].discount_price).toFixed(0):0}
                                                </h3>
                                                <h3 className="search-cart-discount-text">&nbsp;<del> ৳{data?.variant[0]?.price?parseFloat(data?.variant[0].price).toFixed(0):0}</del></h3>
                                            </span>
                                        </div>
                                </li> 
                            </Link>
                        }):<li>
                            Opps! Not Found.
                        </li>
                    }
                    <li
                    style={{
                        position:'sticky',
                        bottom:'-10px',
                        background:'transparent',
                        width:'10%',
                        marginLeft:'45%',
                        marginBottom:'-10px'
                    }}
                    >
                       <Image
                       src={`/search_close.png`}
                       height={30}
                       width={30}
                       alt="Search Close"
                       onClick={()=>{
                            setSearchParams("");
                       }}
                       />
                    </li>
                </ul>
            </div> 
        </>
    )
}
export default HeaderSearchInput;