'use client'
import React,{
    useRef,
    useEffect,
    useState
} from "react"
import {
    Row,
    Col,
    Button,
    Container
} from 'react-bootstrap';
import useDeviceSize from "@/hooks/useDeviceSize";
import ConfigureAxios from "@/utils/axiosConfig";
import axios from "axios";
import FilterProduct from "@/app/ui/FilterProduct";
import StaticCardWithImage from "@/app/ui/StaticCardWithImage";
import './index.scss';
import SingleItem from "./SingleItem";
import NewProduct from "@/app/ui/NewProduct";
import Link from "next/link";

function getProductLists(){
    ConfigureAxios();
    axios.get('/public/feature-product/brand')
    .then((response)=>{
       // console.log("Res",response)
    }).catch((error)=>{

    })
}

const IsotopeReact = ({lists,brands}) => {
    //console.log("Lists : ",lists)
    const isotope = useRef()
    const [width, height] = useDeviceSize();
  // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState('*')
    const [products,setProducts]=useState([]);
    const [cosrxLists,setCosrxLists]=useState([]);
    //const [cosrxLists,setCosrxLists]=useState([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]);
    const [neogenLists,setNeogenLists]=useState([]);
    const [tiamLists,setTiamLists]=useState([]);
    const [sumBymiLists,setSumBymiLists]=useState([]);
    const [activeBtn,setActiveBtn]=useState("*");
    // useEffect(()=>{
    //     ConfigureAxios();
    //     axios.get('/public/feature-product/brand')
    //     .then((response)=>{
    //         console.log("Res",response)
    //     }).catch((error)=>{

    //     })
    // },[])
  // initialize an Isotope object with configs

    useEffect(()=>{
    if(lists.length){
        let dataLists=[];
        lists.map((dta)=>{
            // if(dta.slug=="neogen"){
            //     if(dta?.products?.length){
            //         setNeogenLists(dta.products);
            //     }
            // }else if(dta.slug=="cosrx"){
            //     if(dta?.products?.length){
            //         setCosrxLists(dta.products);
            //     }
            // }else if(dta.slug=="tiam"){
            //     if(dta?.products?.length){
            //         setTiamLists(dta.products);
            //     }
            // }else if(dta.slug=="tiam"){
            //     if(dta?.products?.length){
            //         setTiamLists(dta.products);
            //     }
            // }
            if(dta?.products?.length){
                //alert("HHH")
                //console.log("Datas : ",dta.products)
                let newArr=[...products];

                //newArr=newArr.concat(dta.products);
                let newArr2=[];

                dta.products.map((d2)=>{
                    const newObj={
                        ...d2,
                        parent_slug:dta.slug,    
                    }
                    newArr2=[...newArr2,newObj];
                })

                dataLists=[...dataLists,...newArr2];

               
            }
        })
        setProducts(dataLists);
    }
   //console.log(lists)
},[lists])
  useEffect(() => {
    setTimeout(()=>{
        isotope.current = new Isotope('.filter-container', {
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
        })
   },400)
    // cleanup
   // return () => isotope.current.destroy()
  }, [width])


  // handling filter key change
  useEffect(() => {
    setTimeout(()=>{
        filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
    },500)
  }, [filterKey])

//   useEffect(()=>{
//     if(lists.length){
//         lists.map((dta)=>{
//             if(dta.name=="Neogen"){
//                 if(dta?.products?.length){
//                     setNeogenLists(dta.products);
//                 }
//             }else if(dta.name=="COSRX"){
//                 if(dta?.products?.length){
//                     setCosrxLists(dta.products);
//                 }
//             }
//         })
//     }
//    console.log(lists)
// },[lists])

  const handleFilterKeyChange = key => () => setFilterKey(key)

  //console.log("d: ",products)
  return (
    <>
        <div
        className="isotope-container"
        >
            <Col 
            xs={12}
            style={{
                width:"100%",
                display:'flex',
                flexWrap:'wrap',
                flexDirection:'column',
                //position:'relative'
            }}
            >
                <Row>
                    <Col 
                    xs={12}
                    style={{
                        padding:'10px 0px',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    >
                        <h2>BEST <strong style={{color:'rgba(232, 99, 154, 1)'}}>BRAND</strong></h2>
                    </Col>
                </Row>
                <Row
                >
                    <Col 
                    xs={12}
                    style={{
                        padding:'30px 0px',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    >
                        {/* <Button
                        variant="outline-primary"
                        className={`filter-button ${filterKey=="cosrx"?"filter-active-button":""}`}
                        onClick={handleFilterKeyChange('cosrx')}
                        >
                            COSRX
                        </Button> */}
                        {/* <Button
                        variant="outline-primary"
                        className={`filter-button ${filterKey=="neogen"?"filter-active-button":""}`}
                        onClick={handleFilterKeyChange('neogen')}
                        >
                            NEOGEN
                        </Button> */}
                        {/* <Button
                        variant="outline-primary"
                        className={`filter-button ${filterKey=="fruit"?"filter-active-button":""}`}
                        onClick={handleFilterKeyChange('fruit')}
                        >
                            TIAM
                        </Button> */}
                        {/* <Button
                        variant="outline-primary"
                        className={`filter-button ${filterKey=="vege"?"filter-active-button":""}`}
                        onClick={handleFilterKeyChange('vege')}
                        >
                            SUM BY MI
                        </Button> */}
                        {
                            brands?.length?brands.map((dta)=>{
                                return <Button
                                key={dta.id}
                                variant="outline-primary"
                                className={`filter-button ${filterKey==`${dta?.slug}`?"filter-active-button":""}`}
                                onClick={handleFilterKeyChange(`${dta?.slug}`)}
                                >
                                    {dta?.name.toUpperCase()}
                                </Button>
                            }):""
                        }
                        <Link
                        href={`/products/brands`}
                        target="_blank"
                        >
                            <Button
                            variant="outline-primary"
                            className={`filter-button ${filterKey=="*"?"filter-active-button":""}`}
                            onClick={handleFilterKeyChange('*')}
                            >
                                ALL BRAND
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <div 
                className="filter-products-container-two filter-container"
                // style={{
                //     display:'flex',
                //     flexWrap:'wrap'
                // }}
                >
                    {
                        products?.length?products.map((dta)=>{
                            return  <SingleItem
                            className={`${dta.parent_slug?dta.parent_slug:''}`}
                            key={dta.id}
                            details={dta}
                            />
                        }):""
                    }
                    {/* {
                        tiamLists?.length?tiamLists.map((dta)=>{
                            return  <SingleItem
                            className={"tiam"}
                            key={dta.id}
                            details={dta}
                            />
                        }):""
                    }
                    {
                        neogenLists?.length?neogenLists.map((dta)=>{
                            return  <SingleItem
                            className={"neogen"}
                            key={dta.id}
                            details={dta}
                            />
                        }):""
                    }
                    {
                        cosrxLists?.length?cosrxLists.map((dta)=>{
                            return  <SingleItem
                            className={"cosrx"}
                            key={dta.id}
                            details={dta}
                            />
                        }):""
                    } */}
                    {/* <ItemsContainer/> */}
                    
                    {/* <Col
                    style={{
                        width:'22% !important'
                    }} 
                    className="grid-item vege ">
                        <StaticCardWithImage/>
                    </Col>
                    <Col
                    style={{
                        width:'22% !important'
                    }} 
                    className="grid-item fruit">
                        <FilterProduct/>
                    </Col>
                    <Col
                    style={{
                        width:'22% !important'
                    }} 
                    className="grid-item fruit">
                        <FilterProduct/>
                    </Col>
                    <Col
                    style={{
                        width:'22% !important'
                    }} 
                    className="grid-item fruit">
                        <FilterProduct/>
                    </Col> */}
                </div>
            </Col>
        </div>
    </>
  )
}

export default IsotopeReact;