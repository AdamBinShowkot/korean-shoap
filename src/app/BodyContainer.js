'use client';
import './globals.css';
import {
    useState,
    useMemo,
    useEffect
} from 'react';
import {
    Row,
    Col,
    Container
} from 'react-bootstrap';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import { 
  WishListsContextApi 
} from '@/contextApi/widhListsContext';
import { 
  UserInfoContextApi 
} from '@/contextApi/userInfoApi';
import FlatButton from './FlatButton';
import HeaderMain from './shared/Header';
import MobileFooterMenu from './shared/Header/Mobile/MobileFooterMenu';
import FooterMain from './shared/Footer';
import { 
  ToastContainer 
} from 'react-toastify';
import ConfigureAxios from '@/utils/axiosConfig';
import axios from 'axios';


const BodyContainer=({children})=>{
    const [cartLists,setCartLists]=useState([]);
    const [userInfo,setUserInfo]=useState({});
    const [wishLists,setWishLists]=useState([]);

    useEffect(()=>{
      const token=localStorage.getItem("token");
      if(token){
        ConfigureAxios(token);
        axios.get(`/wishlist`)
        .then((response)=>{
          if(response.status==200){
            const {data}=response;

            if(data.length){
              //console.log("Responsee",data)
              setWishLists(data)
            }else{
              setWishLists([])
            }
          }else{
            setWishLists([])
          }
        }).catch((error)=>{
          setWishLists([])
          console.log("Get WishLists Error.");
        })
      }
    },[])

    // const provided = useMemo(() => ({
    //     value: cartLists,
    //     setValue: (value) => setCartLists(value)
    // }, [cartLists])
    
    return(
      <>
        <UserInfoContextApi.Provider 
        value={{userInfo,setUserInfo}}
        >
          <AddToCartContext.Provider 
          value={{cartLists,setCartLists}}
          >
            <WishListsContextApi.Provider
            value={{wishLists,setWishLists}}
            >
              <Container fluid>
                <HeaderMain/>
                {/* <Container> */}
                  
                {/* <div> */}
                  <div 
                  style={{
                    overflow:'hidden',
                    width:"100%"
                  }}>
                      {/* <ToastContainer
                      position="bottom-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                      /> */}
                    
                    <FlatButton/>
                    {children}
                  </div>
                {/* </div> */}
                {/* </Container> */}
                <FooterMain/>
                <MobileFooterMenu/>
              </Container>
            </WishListsContextApi.Provider>
          </AddToCartContext.Provider>
        </UserInfoContextApi.Provider>
      </>
    )
}
export default BodyContainer;