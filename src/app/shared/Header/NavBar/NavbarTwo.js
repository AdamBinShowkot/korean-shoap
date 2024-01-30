'use client'
import React from 'react';
import {
    Col,
    Container,
    NavDropdown,
    Dropdown,
    Row,
    Card,
} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import './index2.scss';

const NavBarTwo=()=>{
    return(
        <>
            <Col
            className="navbar-container"
            >
                <ul class="exo-menu navbar-container">
                    <li>
                        <a  href="#" className='category-menu-href'><i className="fa fa-home"></i> CATEGORIES</a>
                    </li>
                    <li className="mega-drop-down">
                        <a className="mega-menu-href" href="#">
                            <i className="fa fa-cogs"></i> SKIN CONCERN
                            &nbsp;
                            <Image
                            src={'/downArrow.png'}
                            height={8}
                            width={14}
                            alt="Image"
                            className="navbar-arrow-image"
                            />
                        </a>
                        <div className="animated fadeIn mega-menu">
                            <div className="mega-menu-wrap">
                                <Row>
                                    <Col
                                    className="mega-menu-left-container"
                                    >
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Brightening Care
                                        </Link>
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Pores Care
                                        </Link>
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Acne & Spots Solution
                                        </Link>
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Moisturizing & Hydration Care
                                        </Link>
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Damaged Skin Repair
                                        </Link>
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                           Anti Agening & Wrinkle Care
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Image
                                        src="/skin-care-banner.jpg"
                                        height={500}
                                        width={500}
                                        alt="Banner"
                                        className="banner-image"
                                        />
                                    </Col>
                                </Row>
                            </div>	
                        </div>
                    </li>
                    <li className="mega-drop-down">
                        <a className="mega-menu-href" href="#">
                            <i className="fa fa-cogs"></i> SKIN TYPE
                            &nbsp;
                            <Image
                            src={'/downArrow.png'}
                            height={8}
                            width={14}
                            alt="Image"
                            className="navbar-arrow-image"
                            />
                        </a>
                        <div className="animated fadeIn mega-menu">
                            <div className="mega-menu-wrap">
                                <Row>
                                    <Col
                                    className="mega-menu-left-container"
                                    >
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Oily Skin
                                        </Link>
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Dry Skin
                                        </Link>
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Combination Skin
                                        </Link>
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Sensitive Skin
                                        </Link>
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Normal Skin
                                        </Link>
                                        <Link 
                                        href="/"
                                        className="link-href"
                                        >
                                            Damaged Skin
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Image
                                        src="/skin-care-banner.jpg"
                                        height={500}
                                        width={500}
                                        alt="Banner"
                                        className="banner-image"
                                        />
                                    </Col>
                                </Row>
                            </div>	
                        </div>
                    </li>
                    <li className="mega-drop-down">
                        <a className="mega-menu-href" href="#">
                            <i className="fa fa-briefcase"></i> INGREDIENTS
                            &nbsp;
                            <Image
                            src={'/downArrow.png'}
                            height={8}
                            width={14}
                            alt="Image"
                            className="navbar-arrow-image"
                            />
                        </a>
                        <div className="animated fadeIn mega-menu">
                            <div className="mega-menu-wrap">
                            
                            </div>	
                        </div>
                    </li>
                    <li className="mega-drop-down">
                        <a className="mega-menu-href" href="#">
                            <i className="fa fa-list"></i> BRANDS
                            &nbsp;
                            <Image
                            src={'/downArrow.png'}
                            height={8}
                            width={14}
                            alt="Image"
                            className="navbar-arrow-image"
                            />
                        </a>
                        <div className="animated fadeIn mega-menu">
                            <div className="mega-menu-wrap">
                            
                            </div>	
                        </div>
                    </li>
                    {/* <li className="mega-drop-down"><a href="#"><i className="fa fa-list"></i> BRANDS</a>
                        <div className="animated fadeIn mega-menu">
                            <div className="mega-menu-wrap">
                                <div className="row">
                                <div className="col-md-4">
                                    <h4 className="row mega-title">Feature</h4>
                                        <img className="img-responsive" src="https://3.bp.blogspot.com/-rUk36pd-LbM/VcLb48X4f-I/AAAAAAAAGCI/Y_UxBAgEqwA/s1600/Magento_themes.jpg"/>
                                    </div>
                                    <div className="col-md-2">
                                            <h4 className="row mega-title">Standers</h4>
                                        <ul className="stander">
                                            <li><a href="#">Mobile</a></li>
                                            <li><a href="#">Computer</a></li>
                                            <li><a href="#">Watch</a></li>
                                            <li><a href="#">laptop</a></li>
                                            <li><a href="#">Camera</a></li>
                                            <li><a href="#">I pad</a></li>
                                            <li><a className="view-more btn- btn-sm" href="#">View more</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <h4 className="row mega-title">Description</h4>
                                        <ul className="description">
                                            <li><a href="#">Women</a>
                                                <span>Description of Women</span>
                                            </li>
                                            <li><a href="#">Men</a>
                                                    <span>Description of men Cloths</span>
                                            </li>
                                            <li><a href="#">Kids</a>
                                                    <span>Description of Kids Cloths</span>
                                            </li>
                                            <li><a href="#">Others</a>
                                                    <span>Description of Others Cloths</span>
                                            </li>
                                            <li>
                                            <a className="view-more btn btn-sm " href="#">View more</a>
                                                    
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                    <h4 className="row mega-title">Icon + Description</h4>
                                        <ul className="icon-des">
                                            <li><a href="#"><i className="fa fa-globe"></i>Web</a></li>
                                            <li><a href="#"><i className="fa fa-mobile"></i>Mobile</a></li>
                                            <li><a href="#"><i className="fa fa-arrows-h"></i>Responsive</a></li>
                                            <li><a href="#"><i className="fa fa-desktop"></i>Desktop</a></li>
                                            <li><a href="#"><i className="fa fa-paint-brush"></i>UI/UX</a></li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>	
                        </div>
                    </li> */}

                    {/* <li className="blog-drop-down"><a href="#"><i className="fa fa-bullhorn"></i> Blog</a>
                        <div className="Blog animated fadeIn">
                            <div className="col-md-4">
                                <img className="img-responsive" src="https://2.bp.blogspot.com/-VG_e0pKfrDo/VcLb6JwZqfI/AAAAAAAAGCk/8ZgA9kZqTQ8/s1600/images3.jpg"/>
                                <div className="blog-des">
                            <h4 className="blog-title">Lorem ipsum dolor sit amet</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate. </p>
                                    <a className="view-more btn- btn-sm" href="#">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img className="img-responsive" src="https://3.bp.blogspot.com/-hUt5FrdZHio/VcLb5dlwTBI/AAAAAAAAGCU/UUH5N1JkoQc/s1600/images1.jpg"/>
                                <div className="blog-des">
                                <h4 className="blog-title">Lorem ipsum dolor sit amet</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate. </p>
                                            <a className="view-more btn- btn-sm" href="#">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img className="img-responsive" src="https://4.bp.blogspot.com/-A7U1uPlSq6Y/VcLb5kKHCkI/AAAAAAAAGCc/7WghyndTEuY/s1600/images2.jpg"/>
                                <div className="blog-des">
                                <h4 className="blog-title">Lorem ipsum dolor sit amet</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate. </p>
                                            <a className="view-more btn- btn-sm" href="#">Read More</a>
                                </div>
                            </div>
                            
                            
                        </div>
                    </li>
                    <li  className="images-drop-down"><a  href="#"><i className="fa fa-photo"></i> Images</a>
                        <div className="Images animated fadeIn">
                            <div className="col-md-3">
                                <h4>Images Title </h4>
                                <img className="img-responsive" src="https://2.bp.blogspot.com/-VG_e0pKfrDo/VcLb6JwZqfI/AAAAAAAAGCk/8ZgA9kZqTQ8/s1600/images3.jpg"/>
                            </div>
                            <div className="col-md-3">
                            <h4>Images Title </h4>
                                <img className="img-responsive" src="https://3.bp.blogspot.com/-hUt5FrdZHio/VcLb5dlwTBI/AAAAAAAAGCU/UUH5N1JkoQc/s1600/images1.jpg"/>
                            </div>
                            <div className="col-md-3">
                            <h4>Images Title </h4>
                                <img className="img-responsive" src="https://4.bp.blogspot.com/-A7U1uPlSq6Y/VcLb5kKHCkI/AAAAAAAAGCc/7WghyndTEuY/s1600/images2.jpg"/>
                            </div>
                            <div className="col-md-3">
                            <h4>Images Title </h4>
                                <img className="img-responsive"  src="https://3.bp.blogspot.com/-hGrnZIjzL2k/VcLb47kyQKI/AAAAAAAAGCQ/J6Q2IAHIQvQ/s1600/image4.jpg"/>
                            </div>
                            
                        </div>
                    
                    </li> */}
                    
                    {/* <a href="#" class="toggle-menu visible-xs-block">|||</a>		 */}
                </ul>
            </Col> 
        </>
    )
}
export default NavBarTwo;