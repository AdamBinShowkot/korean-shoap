'use client'
import Link from 'next/link';
import {
    Row,
    Col,
    Button
} from 'react-bootstrap';
import './index.scss';


const NotFoundItem=({setIsModalShow})=>{
    return(
        <>
            <Row>
                <Col
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection:'column',
                    padding:'30px 10px'
                }}
                >
                    <h3>Not Products Found On Bag.</h3>
                    <Link
                    href={"/products?page=1&per_page=10"}
                    >
                    <Button
                    className='go-to-shop-button'
                    onClick={()=>{
                        if(typeof setIsModalShow=='function'){
                            setIsModalShow(false)
                        }
                    }}
                    >
                        Got To Shoap
                    </Button>
                    </Link>
                </Col>
            </Row>
        </>
    )
}
export default NotFoundItem;