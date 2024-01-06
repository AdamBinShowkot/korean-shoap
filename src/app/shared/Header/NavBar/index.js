'use client'
import React from 'react';
import {
    Col,
    Container,
    NavDropdown,
    Dropdown,
    Row
} from 'react-bootstrap';
import Link from 'next/link';
import './index.scss';

const NavBarMain=()=>{
    return(
        <>
            <Col
            className='navbar-container'
            >
                <h2 className='navbar-category'>Categories</h2>
                <hr className='navbar-hr'/>
                <NavDropdown
                className="pr-2 py-2 align-text-top"
                title="SKIN CONCERN"
                id="basic-nav-dropdown"
                >
                    <Container className="eventsNav pt-0 mt-0">
                        <Row>
                        <Col xs="12" md="6" className="text-left">
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"concierge-bell"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Catering
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Corporate
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Private
                                </span>
                            </Link>
                            </Dropdown.Item>

                            <Dropdown.Divider />
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"chalkboard-teacher"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Classes
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Barista 101
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                History of Coffee
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Intro to Cafe Snobbery
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider className="d-md-none" />
                        </Col>

                        <Col xs="12" md="6" className="text-left">
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"building"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Rentals
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Fireside Room
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Roasting Room
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"sun"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Seasonal
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Coldbrew Night
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link text-wrap" role="button">
                                Campfire Coffee Class
                                </span>
                            </Link>
                            </Dropdown.Item>
                        </Col>
                        </Row>
                    </Container>
                </NavDropdown>
                <hr className='navbar-hr'/>
                <NavDropdown
                className="pr-2 py-2 align-text-top"
                title="SKIN TYPE"
                id="basic-nav-dropdown"
                >
                    <Container className="eventsNav pt-0 mt-0">
                        <Row>
                        <Col xs="12" md="6" className="text-left">
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"concierge-bell"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Catering
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Corporate
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Private
                                </span>
                            </Link>
                            </Dropdown.Item>

                            <Dropdown.Divider />
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"chalkboard-teacher"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Classes
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Barista 101
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                History of Coffee
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Intro to Cafe Snobbery
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider className="d-md-none" />
                        </Col>

                        <Col xs="12" md="6" className="text-left">
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"building"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Rentals
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Fireside Room
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Roasting Room
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"sun"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Seasonal
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Coldbrew Night
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link text-wrap" role="button">
                                Campfire Coffee Class
                                </span>
                            </Link>
                            </Dropdown.Item>
                        </Col>
                        </Row>
                    </Container>
                </NavDropdown>
                <hr className='navbar-hr'/>
                <NavDropdown
                className="pr-2 py-2 align-text-top"
                title="INGREDIENTS"
                id="basic-nav-dropdown"
                >
                    <Container className="eventsNav pt-0 mt-0">
                        <Row>
                        <Col xs="12" md="6" className="text-left">
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"concierge-bell"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Catering
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Corporate
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Private
                                </span>
                            </Link>
                            </Dropdown.Item>

                            <Dropdown.Divider />
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"chalkboard-teacher"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Classes
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Barista 101
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                History of Coffee
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Intro to Cafe Snobbery
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider className="d-md-none" />
                        </Col>

                        <Col xs="12" md="6" className="text-left">
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"building"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Rentals
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Fireside Room
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Roasting Room
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"sun"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Seasonal
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Coldbrew Night
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link text-wrap" role="button">
                                Campfire Coffee Class
                                </span>
                            </Link>
                            </Dropdown.Item>
                        </Col>
                        </Row>
                    </Container>
                </NavDropdown>
                <hr className='navbar-hr'/>
                <NavDropdown
                className="pr-2 py-2 align-text-top"
                title="BRANDS"
                id="basic-nav-dropdown"
                >
                    <Container className="eventsNav pt-0 mt-0">
                        <Row>
                        <Col xs="12" md="6" className="text-left">
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"concierge-bell"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Catering
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Corporate
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Private
                                </span>
                            </Link>
                            </Dropdown.Item>

                            <Dropdown.Divider />
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"chalkboard-teacher"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Classes
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Barista 101
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                History of Coffee
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Intro to Cafe Snobbery
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider className="d-md-none" />
                        </Col>

                        <Col xs="12" md="6" className="text-left">
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"building"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Rentals
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Fireside Room
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Roasting Room
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>
                            {/* <FontAwesomeIcon
                                color="black"
                                icon={"sun"}
                                size="1x"
                                className="pr-1"
                            /> */}
                            {"  "}
                            Seasonal
                            </Dropdown.Header>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link" role="button">
                                Coldbrew Night
                                </span>
                            </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/">
                                <span className="nav-link text-wrap" role="button">
                                Campfire Coffee Class
                                </span>
                            </Link>
                            </Dropdown.Item>
                        </Col>
                        </Row>
                    </Container>
                </NavDropdown>
                <hr className='navbar-hr'/>
            </Col>
        </>
    )
}
export default NavBarMain;