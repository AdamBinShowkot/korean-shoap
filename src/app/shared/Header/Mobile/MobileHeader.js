import {
    Row,
    Col,
    Button
} from 'react-bootstrap';
import Image from 'next/image';
import HeaderSearchInput from '../shared/HeaderSearchInput';
import './index.scss';

const MobileHeader=()=>{
    return(
        <>
            <Col 
            sm={12}
            >
                <Row
                className='mobile-header-top-container'
                >
                    <Col 
                    xs={2}
                    style={{
                        textAlign:'right'
                    }}
                    >
                        <Image
                        src="/mobile_menu.png"
                        width={60}
                        height={60}
                        className='mobile-humberger-menu'
                        alt="Picture of the author"
                        />
                    </Col>
                    <Col 
                    xs={6}
                    >
                        <Image
                        src="/shop-logo.png"
                        width={250}
                        height={100}
                        className='mobile-shoap-logo'
                        alt="Picture of the author"
                        />
                    </Col>
                    <Col 
                    xs={4}
                    style={{
                        display:'flex'
                    }}
                    >
                        <Button
                        className='normal-social-button'
                        >
                            <Image
                            src="/facebook.png"
                            width={16}
                            height={16}
                            alt="search"
                            />
                        </Button>
                    
                        <Button
                        className='normal-social-button'
                        >
                            <Image
                            src="/instagram.png"
                            width={20}
                            height={20}
                            alt="search"
                            />
                        </Button>
                        <Button
                        className='normal-social-button'
                        >
                            <Image
                            src="/youtube.png"
                            width={22}
                            height={22}
                            alt="search"
                            />
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col 
                    sm={12}
                    style={{
                        padding:'4px 10% 10px'
                    }}
                    >
                        <HeaderSearchInput/>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
export default MobileHeader;