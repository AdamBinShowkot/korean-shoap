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

const IsotopeReact = () => {
    //console.log("Lists : ",lists)
    const isotope = useRef()
    const [width, height] = useDeviceSize();
    const [lists,setLists]=useState([]);
    const [brands,setBrands]=useState([]);
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
        initialLoading();
    },[])

    useEffect(()=>{
        if(lists.length){
            let dataLists=[];
            lists.map((dta)=>{
                if(dta?.products?.length){
                    let newArr=[...products];

                    let newArr2=[];

                    dta.products.map((d2)=>{
                        const newObj={
                            ...d2,
                            parent_slug:dta.slug=="3w-clinic"?"s"+dta.slug:dta.slug,    
                        }
                        newArr2=[...newArr2,newObj];
                    })

                    dataLists=[...dataLists,...newArr2];

                
                }
            })
            setProducts(dataLists);
            //console.log('Data: ',dataLists)
        }
    },[lists])
    useEffect(() => {
        setTimeout(()=>{
            isotope.current = new Isotope('.filter-container', {
                itemSelector: '.grid-item',
                layoutMode: 'fitRows',
            })
        },400)
   // return () => isotope.current.destroy()
  }, [width,lists])


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

  const initialLoading=async()=>{
    ConfigureAxios();
    const brands1=await getFeturedBrands();
    //console.log("Brandss : ",brands1)

    const brands11=configParentLists(brands1)
    const lists1=await getBrandProductLists();
    //console.log("listss : ",lists1)

    if(brands11.length){
        setBrands(brands11)
    }else{
        setBrands([])
    }

    if(lists1.length){
        setLists(lists1)
    }else{
        setLists([])
    }

  }

  const configParentLists=(lists)=>{
    //console.log("Lists:s ",lists)
    let returnLists=[];
    const newLists=[...lists];

    if(newLists?.length){
        newLists.map((d)=>{
            const obj={
                ...d,
                slug:d.slug=="3w-clinic"?"s"+d.slug:d.slug
            }
            returnLists=[...returnLists,obj];
        })
    }
    return returnLists;
  }
  const getFeturedBrands=async()=>{
    const response=await axios.get('/public/features/brand').then((res)=>{
        if(res.status===200){
          //console.log("Products : ",res.data);
          return res.data?.length?res.data:[];
        }
    }).catch((error)=>{
      //console.log(error)
      console.log("Get Featured Brand List Error.")
      return [];
    });
  
    return response;
  }
  const getBrandProductLists=async()=>{
    const response=await axios.get('/public/feature-product/brand').then((res)=>{
        if(res.status===200){
            //console.log("Products : ",res.data);
            return res.data;
        }
    }).catch((error)=>{
      //console.log(error)
      console.log("Get Brand Product Lists error.")
      return [];
    });
  
    return response;
  }

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
                    className="brand-lists-container"
                    >
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
                </div>
            </Col>
        </div>
    </>
  )
}

export default IsotopeReact;