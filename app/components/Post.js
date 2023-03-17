import React from "react";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Post = () => {
    return (
        <Col>
            <Card className="border border-0">
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Post;
