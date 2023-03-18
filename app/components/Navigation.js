"use client";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { BsMoonStars } from "react-icons/bs";
import { Hind_Siliguri } from "next/font/google";
import Link from "next/link";

const bengali = Hind_Siliguri({
    weight: "600",
    subsets: ["latin"],
    display: "swap",
});

const Navigation = () => {
    return (
        <Navbar expand="lg" className="py-5 px-sm-3">
            <Container>
                <Navbar.Brand className={`${bengali.className} fs-1 text-danger `}>
                    রোজনামচা
                </Navbar.Brand>
                <Nav className=" d-block d-md-none fs-3 fw-bold">
                    <BsMoonStars />
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link href={"/"} className="fs-5 me-lg-3 fw-bold text-black">
                            Home
                        </Link>
                    </Nav>
                    <Form className="d-flex mx-auto">
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
