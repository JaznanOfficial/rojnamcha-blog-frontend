"use client";
import React, { useRef, useState } from "react";
import Posts from "../components/Posts";
import JoditEditor from "jodit-pro-react";
import { Container } from "react-bootstrap";

const superAdmin = () => {
    const editor = useRef(null);
    const [content, setContent] = useState("");
    console.log(content);

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        uploader: {
            url: "https://xdsoft.net/jodit/finder/?action=fileUpload",
        },
        filebrowser: {
            ajax: {
                url: "https://xdsoft.net/jodit/finder/",
            },
            height: 580,
        },
        height: 400,
    };
    return (
        <Container>
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                // onBlur={(newContent) => } // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => setContent(newContent)}
            />
            <Posts />
        </Container>
    );
};

export default superAdmin;
