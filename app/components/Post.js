import React from "react";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { Crete_Round } from "next/font/google";

const crete = Crete_Round({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

const Post = () => {
    return (
        <Col>
            <Card className="border border-0">
                <Card.Body>
                    <div className="d-flex flex-row justify-content-start align-items-center mb-3 text-danger">
                        <h6 className="d-flex flex-row justify-content-center align-items-center">
                            <span>
                                <AiOutlineCalendar />
                            </span>{" "}
                            <span className="mx-1">Dec 05, 2023</span>
                            <span>
                                <BsDashLg />
                            </span>{" "}
                            <span className="mx-1">
                                <BsClock />
                            </span>{" "}
                            <span>05 min read</span>
                        </h6>
                    </div>
                    <h3
                        className={`${crete.className} headline-color mb-3 `}
                        style={{ cursor: "pointer" }}
                    >
                        Creating an object that travels at 1% the speed of light?
                    </h3>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi nesciunt
                        ...
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Post;
