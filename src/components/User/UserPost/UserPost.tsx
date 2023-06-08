import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Accordion, ListGroup } from "react-bootstrap";

interface UserPostProps {
  userPost: any
}

const UserPost = ({userPost} : UserPostProps) => {
  const [activeKey, setActiveKey] = useState(0);
  const [commentsPosts, setComments] = useState<any>([])

  const handleAccordionToggle = (eventKey: any) => {
    setActiveKey(eventKey === activeKey ? null : eventKey);
    if (eventKey == 1 && commentsPosts.length === 0) getComments()
  };
  
  const getComments = async () => {
    const response = await axios.get (`https://jsonplaceholder.typicode.com/comments/?postId=${userPost.id}`)
    setTimeout(() => {
      setComments(response.data)
    }, 1000);
  };

  return (
        <ListGroup.Item key={userPost.id} as="li">
          <b> {userPost.title} </b>
          <br /> 
          {userPost.body}
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
        </ListGroup.Item>

  )
}

export default UserPost