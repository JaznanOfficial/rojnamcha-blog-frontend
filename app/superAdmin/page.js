"use client";
import React, { useRef, useState } from "react";
import Posts from "../components/Posts";
import { Button, Container } from "react-bootstrap";
// import JoditEditor from "jodit-react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const superAdmin = ({ placeholder }) => {
    // const editor = useRef(null);
    const [content, setContent] = useState("");

    const config = {
        readonly: false,

        height: 500,
        placeholder: placeholder || "Start typings...",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const content = {
        //     description: editor.current.value,
        // };
        console.log(content);
    };

    return (
        <Container>
            <JoditEditor
                // ref={editor}
                // value={content}

                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                // onChange={(newContent) => {
                // setContent(newContent);
                // }}
            />
            <Button variant="outline-danger" className="m-1" onClick={handleSubmit}>
                <strong>Post this Blog</strong>
            </Button>
            <Posts />
        </Container>
    );
};

export default superAdmin;
