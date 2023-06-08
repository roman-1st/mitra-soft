import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useRoutes, useSearchParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchUserPageAction } from "../../redux/action-creator/actions";
import { Post } from "../../types/state";
import "./User.css";
import UserPost from "./UserPost/UserPost";
import UserPosts from "./UserPost/UserPost";

const User = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get("key");

  const dispatch = useDispatch();

  const { userPage, userPosts, isLoading } = useTypedSelector(
    (state) => state.state
  );

  useEffect(() => {
    dispatch(fetchUserPageAction(Number(userId)));
  }, []);

  const prevPage = () => {
    navigate(-1);
  };

  if (isLoading) return <FontAwesomeIcon className="loader" icon={faSpinner} spin />;

  return (
    <div className="userPageContainer">
      <div className="userPageHeader">
        <div className="userInfo">
          <img className="userIcon" src="/userIcon.png" />
          <div className="userInfoText ">
            <h4 className="text-muted "> {userPage.username} </h4>
            <p> {userPage.name} </p>
            <p> {userPage.email} </p>
            <p> {userPage.website} </p>
          </div>
        </div>
        <div className="closePageContainer">
          <button onClick={() => prevPage()} className="closePageButton">
            Back
          </button>
        </div>
      </div>
      <div className="postsContainer">
        <h5 className=" text-muted  postsContainerTitle">
          {userPage.name}'s posts
        </h5>
        <ListGroup style={{ textAlign: "left" }} as="ol" numbered>
          {userPosts
            ? userPosts.map((el: any) => <UserPost key={el.id} userPost={el} />)
            : ""}
        </ListGroup>
      </div>
    </div>
  );
};

export default User;
