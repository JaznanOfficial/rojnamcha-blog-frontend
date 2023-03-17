"use client";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Post from "./Post";
import { Crete_Round } from "next/font/google";

const crete = Crete_Round({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

const Posts = () => {
    return (
        <div className="mt-5">
            <h1
                className={`${crete.className} w-50 mx-auto text-center`}
                style={{ color: "#152035", marginBottom: "5rem" }}
            >
                Recent Post
            </h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Post key={idx} />
                    ))}
                </Row>
            </Container>
            <div className="my-5 text-center">
                <button type="button" class="btn btn-danger">
                    See All Posts
                </button>
            </div>
        </div>
    );
};

export default Posts;
