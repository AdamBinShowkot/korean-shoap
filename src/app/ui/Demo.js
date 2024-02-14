import React from 'react';
import { 
    Row,
    Col,
    Card 
} from 'react-bootstrap';


const DemoComponent=()=>{
    return(
        <>
            <a class="koean-shop-cart">
                <div className="card-body should-relative">
                    <div className="should-absoulte">
                        <p>
                            {"10%"}
                        </p>
                    </div>
                    <img/>
                </div>
                <div className='cart-content flex flex-dirextion-col'>
                    <div>
                        <a><h3>Cart Content Title...</h3></a>
                    </div>
                    <div class="should-flex jc-between">
                        <div>
                            <h2>Price 1</h2>
                            <h2>Price 2</h2>
                        </div>
                        <div >
                            <p>WISH LISTS ICON</p>
                        </div>
                    </div>
                    <div class="should-flex jc-between">
                        <div>
                           <button>Button 1</button>
                        </div>
                        <div >
                            <button>Button 2</button>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}
export default DemoComponent