import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Post.css'

interface PostProps {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Post = ({ id, userId, title, body }: PostProps) => {
    const [activeKey, setActiveKey] = useState(0);
    const [commentsPosts, setComments] = useState<any>([])

    const getComments = async () => {
      const response = await axios.get (`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
      setTimeout ( () => {
          setComments(response.data)
      }, 1000)
    }
  
    const handleAccordionToggle = (eventKey: any) => {
        setActiveKey(eventKey === activeKey ? null : eventKey);
        if (eventKey == 1 && commentsPosts.length === 0) getComments()
    };
  
  return (
    <Card key={id} style={{ textAlign: "left" }} className="mb-4 Post">
      <Card.Body>
        <Link to={`/user/${userId}/?key=${userId}`}>
            <Card.Img src="/userIcon.png" className="userIcon"/>
        </Link>
        <small className="text-muted userTitle">User ID:{userId} </small>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      <Accordion activeKey={String(activeKey)} onSelect={handleAccordionToggle}>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Comments:</Accordion.Header>
          <Accordion.Body>
            { commentsPosts.length === 0
                ? <FontAwesomeIcon icon={faSpinner} spin />
                : commentsPosts.map ( (el: { id: React.Key | null | number; body: string, email: string }) : any => 
                    <div className="postsList_comment" key={el.id}>
                        <h6> {el.email} </h6>
                        <p> {el.body} </p>
                    </div>
                )
             }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
};

export default Post;
