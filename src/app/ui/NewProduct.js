'use client';
import React,{
    useEffect,
    useState
} from 'react';
import {
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';
import './newProduct.scss';
import Link from 'next/link';
import Image from 'next/image';
import { 
    baseImageServer 
} from '@/utils/config';

const NewProduct=({data})=>{
    const variants=data?.variant?.length?data?.variant[0]:{}
    return(
        <>
            <a className="korean-shop-cart">
                <div className='cart-body'>
                    <div className='discount-section'>
                        <span>10%</span>
                        <span>OFF</span>
                    </div>
                    <div className='image-section'>
                        <Image
                        src={`${data?.image?`${baseImageServer}/${data.image}`:'/products2.jpg'}`}
                        height={220}
                        width={190}
                        alt={`${data?.img_alt?data?.img_alt:'Alter Text'}`}
                        className='image'
                        >
                        </Image>
                    </div>
                </div>
                <div className='cart-content'>
                    <div className='title'>
                        <Link
                        href={`${data?.slug?`/products/${data?.slug}`:'/products/page=1&per_page=10'}`}
                        className="products-link-href"
                        >
                            <span>
                                <b>
                                    {data?.name?data.name:`Neogen Dermalogy Black 
                                    Energy Cream 80ml`}
                                </b>
                            </span>
                        </Link>
                    </div>
                    <div className='price-wishlist'>
                        <div className='price'>
                            <h3 className="cart-price-text" style={{marginRight:'5px'}}>
                                ৳{variants?.price && variants?.discount_price?parseFloat(variants.discount_price).toFixed(0):0}
                            </h3>
                            <h3 className="cart-discount-text">&nbsp;<del> ৳{variants?.price?parseFloat(variants.price).toFixed(0):0}</del></h3>
                        </div>
                        <div className='wishlist'>
                            <Image
                            src="/love.png"
                            height={25}
                            width={25}
                            alt="Wishlist"
                            >

                            </Image>
                        </div>
                    </div>
                    <div className='cart-action'>
                        <div className='add-to-cart'>
                            <Button 
                            className='product-action-button'
                            >
                                Add To Cart 
                            </Button>
                        </div>
                        <div className='buy-now'>
                            <Button 
                            className='product-action-button'
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}
export default NewProduct;