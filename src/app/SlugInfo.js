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


const SlugInfo=()=>{
    const [infos,setInfos]=useState({});

    useEffect(()=>{
        initialLoad()
    },[]);

    const initialLoad=async(slugs)=>{
        const data=await getCategoryInfos();

        if(data?.content){
            setInfos(data);
        }else{
            setInfos({})
        }
    }
    const getCategoryInfos=async()=>{
        ConfigureAxios();
        const response=axios.get(`/public/seo-contents/home`).then((res)=>{
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