import {
    Row,
    Col
} from 'react-bootstrap';
import TopBanner from '../TopBanner';
import CheckoutMain from './partials/Checkout';
import './index.scss';

const CheckoutPage=()=>{
    return(
        <>
            {/* <TopBanner/> */}
            <CheckoutMain/>
        </>
    )
}
export default CheckoutPage;