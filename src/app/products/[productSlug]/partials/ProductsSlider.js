'use client'; 
import React,{
    useState,
    useEffect
} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//import Product from '@/app/ui/Product';
//import ProductTwo from '@/app/ui/ProductTwo';
import NewProduct from '@/app/ui/NewProduct';
import EmptyCard from '@/app/ui/EmptyCard';
import useDeviceSize from '@/hooks/useDeviceSize';

const FooterProductSlider=({product_lists,len})=>{
    const [width, height] = useDeviceSize();  

    const [myLists,setMyLists]=useState([]);
    const [settings,setSettings]=useState(
        {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        }
    )

    useEffect(() => {
        //console.log("Lists Data1: ",product_lists);
        if(width<420){
            //console.log("Lists Data: ",product_lists);
            let newLists=[...product_lists];
            let newSettings={...settings,slidesToShow:2};
            if(len>=5){
                setMyLists(newLists);
            }else if(len>=2){
                 for(let i=0; i<1; i++){
                    const newObj={
                         id:"1000"+i,
                         emptyPost:true
                    }
                    
                    newLists=[...newLists,newObj]; 
                }
                setMyLists(newLists)
            }else{
                for(let i=0; i<1; i++){
                    const newObj={
                        id:"1000"+i,
                        emptyPost:true
                    }
                    newLists=[...newLists,newObj];
                }
                setMyLists(newLists)
            }
          
            setSettings(newSettings)
        }else{
            
            let newLists=[...product_lists];
            let newSettings={...settings,slidesToShow:5};
            if(len>=5){
                //console.log("Heloooooooooooo5")
                setMyLists(newLists);
            }else if(len>=4){
                //console.log("Heloooooooooooo4")
                for(let i=0; i<1; i++){
                    const newObj={
                        id:"1000"+i,
                        emptyPost:true
                    }
                    newLists=[...newLists,newObj];
                }
                setMyLists(newLists)
            }else if(len>=3){
               // console.log("Heloooooooooooo3")
                for(let i=0; i<2; i++){
                    const newObj={
                        id:"1000"+i,
                        emptyPost:true
                    }
                   
                    newLists=[...newLists,newObj]; 
                }
                setMyLists(newLists)
            }else if(len>=2){
                for(let i=0; i<3; i++){
                    const newObj={
                        id:"1000"+i,
                        emptyPost:true
                    }
                    
                    newLists=[...newLists,newObj]; 
                }
                setMyLists(newLists)
            }else{
                for(let i=0; i<4; i++){
                    const newObj={
                        id:"1000"+i,
                        emptyPost:true
                    }
                    newLists=[...newLists,newObj];
                }
                setMyLists(newLists)
               // console.log(title,newLists)
            }
            setSettings(newSettings)
        }
    
        return () => {
          
        };
    }, [width,product_lists]);

    //console.log("Brand Data: ",myLists);

    return(
        <>
            <Slider {...settings}>
               {/* {
                    myLists?.length?myLists.map((dta)=>{
                        return  <div key={dta.id}>
                            <NewProduct data={dta}/>
                        </div>
                    }):""
               } */}
                {
                    myLists?.length?myLists.map((dta,index)=>{
                        if(!dta?.emptyPost){
                            return <div key={dta.id}>
                                <NewProduct data={dta}/>
                            </div>
                            
                        }else{
                            return <div key={dta.id}>
                                <EmptyCard index={index}/>
                            </div>
                        }
                    }):""
                }
                {/* <div>
                    <NewProduct/>
                </div>
                <div>
                    <NewProduct/>
                </div>
                <div>
                    <NewProduct/>
                </div>
                <div>
                    <NewProduct/>
                </div>
                <div>
                    <NewProduct/>
                </div> */}
            </Slider>
        </>
    )
}
export default FooterProductSlider;