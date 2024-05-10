'use client';
import React,{
    useState,
    useEffect
} from 'react';
import {
    Row,
    Col,
    FormControl,
    InputGroup,
    InputGroupText,
    Form,
    Button
} from 'react-bootstrap';
import axios from 'axios';
import Image from 'next/image';
import BlogPosts from './partials/BlogPosts';
import SidebarMain from './partials/Sidebar';
import RecentSinglePost from './partials/RecentSinglePost';
import FeaturedImage from './partials/FeatruedImage';
import ConfigureAxios from '@/utils/axiosConfig';
import './index.scss';


const BlogsPage=()=>{
    const [blogs,setBlogs]=useState([]);
    const [categries,setCategories]=useState([]);

    useEffect(()=>{
        ConfigureAxios();
        initialLoading();
    },[]);

    const initialLoading=async()=>{
        const blogLists=await getBlogs();
        const categoryLists=await getCategories();

        //console.log("Blog: ",blogLists);
        //console.log("Cat: ",categoryLists);

        if(blogLists?.length){
            setBlogs(blogLists)
        }else{
            setBlogs([]);
        }

        if(categoryLists?.length){
            setCategories(categoryLists);
        }else{
            setCategories(categoryLists);
        }

    }

    const getBlogs=async()=>{
        const data= await axios.get(`/public/blogs?per_page=10&page=1`).then((res)=>{
            if(res.status===200){
                const {
                    items
                }=res.data;

                //console.log("Items: ",items);
                if(items.length){
                    return items;
                }else{
                    return [];
                }
            }
        }).catch((error)=>{
            return [];
        })

        return data;
    }
    const getCategories=async()=>{
        const data=await axios.get(`/public/blog-categories`).then((res)=>{
            if(res.status===200){
                const {
                    data
                }=res;

                //console.log("Data: ",data);
                if(data.length){
                    return data;
                }else{
                    return [];
                }
            }
        }).catch((error)=>{
            return [];
        })

        return data;
    }
    return(
        <>
            <Row
            className='blogs-page-container'
            >
                <Col 
                xs={12}
                >
                    <Row
                    className='blog-page-container'
                    >
                        <div className="blog-first">
                            <BlogPosts lists={blogs}/>
                        </div>
                        <div 
                        className="blog-second "
                        >
                            <h3>Search</h3><br/>
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
                            <br/>
                            <h3>Categories</h3>
                            <ul className='blog-category-lists'>
                                {
                                    categries?.length?categries.map((d)=>{
                                        return <li key={d.id}>{d.name}</li>
                                    }):""
                                }
                                {/* <li>Uncategorized</li>
                                <li>Hair & Body</li>
                                <li>Make Up</li>
                                <li>How To’s</li>
                                <li>Skincare</li>
                                <li>Sun Care</li>
                                <li>Tip</li> */}
                            </ul>
                        </div>
                        <div 
                        className="blog-third "
                        >
                            <h3>Recent Post</h3><br/>
                            <RecentSinglePost/>
                            <RecentSinglePost/>
                            <RecentSinglePost/>
                            <RecentSinglePost/>
                        </div>
                        <div
                        className="blog-fourth"
                        >
                            <FeaturedImage/>
                        </div>
                        {/* <Col 
                        className="blog-third grid-items"
                        style={{
                            padding:'15px 10px'
                        }}
                        >
                            <SidebarMain/>
                        </Col> */}
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default BlogsPage;