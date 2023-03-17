"use client";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Righteous } from "next/font/google";
import { BsMoonStars } from "react-icons/bs";

const righteous = Righteous({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const Navigation = () => {
    return (
        <Navbar expand="lg" className="py-5 px-sm-3">
            <Container>
                <Navbar.Brand className={`${righteous.className} fs-1 `}>Rojnamcha</Navbar.Brand>
                <Nav className=" d-block d-md-none fs-3 fw-bold">
                    <BsMoonStars />
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className="fs-5 me-lg-3 fw-bold text-black">Home</Nav.Link>
                        <Nav.Link className="fs-5 me-lg-3 fw-bold text-black">Blogs</Nav.Link>
                        <Nav.Link className="fs-5 me-lg-3 fw-bold text-black">About</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                    <Nav
                        className="ms-3 d-none d-md-block fs-3 fw-bold"
                        style={{ cursor: "pointer" }}
                    >
                        <BsMoonStars />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
