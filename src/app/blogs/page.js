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
import Link from 'next/link'
import { 
    useRouter,
    useSearchParams 
} from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import BlogPosts from './partials/BlogPosts';
import SidebarMain from './partials/Sidebar';
import RecentSinglePost from './partials/RecentSinglePost';
import FeaturedImage from './partials/FeatruedImage';
import ConfigureAxios from '@/utils/axiosConfig';
import './index.scss';


const BlogsPage=()=>{
    const searchParams = useSearchParams();
    const router=useRouter();
    const [blogs,setBlogs]=useState([]);
    const [categries,setCategories]=useState([]);
    const [searchParams2,setSearchParams]=useState("");
    const [searchLists,setSearchLists]=useState([]);
    const [IsSearchStart,setIsSearchStart]=useState(false);
    const category = searchParams.get('category');
    const query = searchParams.get('query');

    useEffect(()=>{
        ConfigureAxios();

        initialLoading();
    },[]);

    useEffect(()=>{
        if(category || query){
            initialLoading2();
        }
    },[category,query])

    const initialLoading=async()=>{
        
        const categoryLists=await getCategories();

        //console.log("Blog: ",blogLists);
        //console.log("Cat: ",categoryLists);

        if(!category && !query){
            let blogLists=await getBlogs();
            if(blogLists?.length){
                setBlogs(blogLists)
            }else{
                setBlogs([]);
            }
        }
        

        if(categoryLists?.length){
            setCategories(categoryLists);
        }else{
            setCategories(categoryLists);
        }

    }


    const initialLoading2=async()=>{
        let blogLists=[];

        if(category && !query){
            blogLists=await getBlogsWithCategory(category);
        }

        //console.log("Blog: ",blogLists);
        //console.log("Cat: ",categoryLists);

        if(blogLists?.length){
            setBlogs(blogLists)
        }else{
            setBlogs([]);
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

    const getBlogsWithCategory=async(slugs)=>{
        const data= await axios.get(`/public/category-wise-blog/${slugs}?per_page=20&page=1`).then((res)=>{
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

    const handleOnSearch=(e)=>{
        
        e.preventDefault();

        if(searchParams2){
            // setSearchLists([]);
            // setSearchParams("");
            setSearchLists([]);
            setSearchParams("");
            window.location.href=`/products?q=${searchParams2}`
            // setTimeout(()=>{
            //     router.push(`/products?q=${searchParams}`)
            // },100)
        }
    }
    const handleOnChange=(e)=>{
        const {value}=e.target;
        setSearchParams(e.target.value);
        // ConfigureAxios();
        // if(value){
        //     setIsSearchStart(true);
        //     axios.get(`/public/product-search?q=${value}`)
        //     .then((response)=>{
        //         if(response.status==200){
        //             const dataLists=response.data.items;
        //             if(dataLists.length){
        //                 setSearchLists(dataLists)
        //                 setIsSearchStart(false);
        //             }else{
        //                 setIsSearchStart(false);
        //                 setSearchLists([]);
        //             }
        //         }
        //     }).catch((error)=>{
        //         setIsSearchStart(false);
        //         setSearchLists([]);
        //         console.log("On search error.")
        //     })
        // }
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
                                value={searchParams2}
                                onChange={handleOnChange}
                                onKeyDown={(e)=>{
                                    if(e.key=="Enter" && searchParams2){
                                        // setSearchLists([]);
                                        // setSearchParams("");
                                        // router.push(`/products?q=${searchParams}`)
                                        setSearchLists([]);
                                        setSearchParams("");
                                        window.location.href=`/blogs?category=&query=${searchParams2}`
                                    }
                                }}
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
                                        return <Link
                                        key={d.id}
                                        href={`/blogs?category=${d.slug}&query=`}
                                        >
                                            <li 
                                            >
                                            {d.name}
                                        </li>
                                        </Link>
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