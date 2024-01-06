'use client';
import React from 'react';
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
import Image from 'next/image';

const HeaderSearchInput=()=>{
    return(
        <>
            <InputGroup>
                <FormControl
                className='normal-input'
                placeholder='search here'
                >

                </FormControl>
                <InputGroupText
                className='normal-input global-search'
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