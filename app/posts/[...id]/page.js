"use client";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { Crete_Round } from "next/font/google";
import Link from "next/link";

const crete = Crete_Round({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

const SinglePost = () => {
    return (
        <div className="container mx-auto ">
            <Card className="border border-0 w-100">
                <Card.Body>
                    <h3
                        className={`${crete.className} headline-color mb-5 `}
                        style={{ cursor: "pointer" }}
                    >
                        <h1
                            className={`${crete.className} text-center text-md-start`}
                            style={{ fontSize: "60px" }}
                        >
                            Creating an object that travels at 1% the speed of light?
                        </h1>
                    </h3>
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

                    <Card.Text>
                        <h5 className="lh-lg">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ipsum
                            assumenda voluptatum error dignissimos at iste nihil laborum ea tempora
                            praesentium, consequuntur perspiciatis incidunt fugit aspernatur quam
                            tempore in sapiente nesciunt blanditiis quos. Reprehenderit iure
                            assumenda quos minus delectus! Mollitia nulla tempore fugiat rem
                            nesciunt suscipit eius exercitationem, dolores debitis dolor dignissimos
                            iusto consequatur libero, fugit accusantium. Maxime in alias impedit
                            asperiores excepturi ducimus aliquam voluptatum exercitationem omnis
                            ratione debitis, atque aspernatur iusto dolores est quia consequuntur
                            officia beatae! Ducimus minima earum itaque recusandae rem tenetur fugit
                            quas sed, dolores qui quam, non saepe autem? Eaque sunt id fuga numquam?
                            ...
                        </h5>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SinglePost;
