'use client';
import './globals.css';
import {
    useState,
    useMemo
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
  UserInfoContextApi 
} from '@/contextApi/userInfoApi';
import FlatButton from './FlatButton';
import HeaderMain from './shared/Header';
import MobileFooterMenu from './shared/Header/Mobile/MobileFooterMenu';
import FooterMain from './shared/Footer';
import { 
  ToastContainer 
} from 'react-toastify';


const BodyContainer=({children})=>{
    const [cartLists,setCartLists]=useState([]);
    const [userInfo,setUserInfo]=useState({});

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
            <Container fluid>
              <HeaderMain/>
              {/* <Container> */}
                
              <Row>
                <Col 
                style={{
                  overflow:'hidden'
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
                </Col>
              </Row>
              {/* </Container> */}
              <FooterMain/>
              <MobileFooterMenu/>
            </Container>
          </AddToCartContext.Provider>
        </UserInfoContextApi.Provider>
      </>
    )
}
export default BodyContainer;