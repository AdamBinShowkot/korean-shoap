'use client';
import React,{
    useEffect,
    useState
} from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import parse from 'html-react-parser';
import ConfigureAxios from '@/utils/axiosConfig';
import axios from 'axios';


const SlugInfo=({params})=>{
    const [infos,setInfos]=useState({});

    useEffect(()=>{
        initialLoad(params.slugs)
    },[]);

    const initialLoad=async(slugs)=>{
        const data=await getCategoryInfos(slugs);

        if(data?.content){
            setInfos(data);
        }else{
            setInfos({})
        }
    }
    const getCategoryInfos=async(slugs)=>{
        ConfigureAxios();
        const response=axios.get(`/public/seo-contents/category/${slugs}`).then((res)=>{
            if(res.status===200){
                return res.data;
            }
        }).catch((error)=>{
          return [];
        });
        return response;
    }
    return(
        <>
            {
                infos?.content?(
                    <Row>
                        <Col
                        className='home-page-footer-seo-content'
                        >
                            {infos?.content?parse(infos.content):""}
                        </Col>
                    </Row>
                ):""
            } 
        </>
    )
}
export default SlugInfo;