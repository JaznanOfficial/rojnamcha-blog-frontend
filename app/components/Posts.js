"use client";
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Post from "./Post";
import { Crete_Round } from "next/font/google";
import ReactPaginate from "react-paginate";

const crete = Crete_Round({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

const Posts = () => {
    const allPosts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    // pagination
    const [pageNumber, setPageNumber] = useState(0);
    const postsPerPage = 9;
    const skip = postsPerPage * pageNumber;
    const displayPosts = allPosts.slice(skip, skip + postsPerPage);
    const totalPage = Math.ceil(allPosts.length / postsPerPage);
    // console.log(totalPage);
    const pageChange = ({ selected }) => {
        setPageNumber(selected);
    };
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

            <div className="py-5 my-5 text-center w-75 mx-auto">
                <ReactPaginate
                    previousLabel={"<< Prev"}
                    nextLabel={"Next >>"}
                    pageCount={totalPage}
                    onPageChange={pageChange}
                    breakLabel={"..."}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    containerClassName={
                        "pagination d-flex align-items-center justify-content-center"
                    }
                    activeLinkClassName={"btn btn-active text-white bg-danger border-danger"}
                    pageLinkClassName={"btn text-gray hover:bg-red-500 hover:border-red-500 mx-1"}
                    previousLinkClassName={"btn text-danger prev-next-link "}
                    nextLinkClassName={"btn text-danger prev-next-link"}
                    breakLinkClassName={"btn text-danger prev-next-link"}
                />
            </div>
        </div>
    );
};

export default Posts;
