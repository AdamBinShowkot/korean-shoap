'use client';
import {
    useState,
    useMemo
} from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import { 
    AddToCartContext 
} from '@/contextApi/addToCartApi';
import FlatButton from './FlatButton';


const BodyContainer=({children})=>{
    const [cartLists,setCartLists]=useState([]);

    // const provided = useMemo(() => ({
    //     value: cartLists,
    //     setValue: (value) => setCartLists(value)
    // }, [cartLists])
    
    return(
      <Row>
        <Col 
        style={{
          overflow:'hidden'
        }}>
          <AddToCartContext.Provider value={{cartLists,setCartLists}}>
            <FlatButton/>
            {children}
          </AddToCartContext.Provider>
        </Col>
      </Row>
    )
}
export default BodyContainer;