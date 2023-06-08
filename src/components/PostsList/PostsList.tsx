import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Post from "./Post/Post";
import "./PostsList.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import SearchContainer from "./SearchContainer/SearchContainer";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { StateActionTypes } from "../../types/state";
import { fetchPostsAction } from "../../redux/action-creator/actions";

const PostsList = () => {
    const [paginationLoading, setPaginationLoading] = useState(false)       // стэйт для пагинации
    const [postsCount, setPostCount] = useState(10)             // стэйт для количества отображаемых элементов
    const {posts, isLoading, filteredPosts, searchValue} = useTypedSelector( state => state.state)
    console.log(filteredPosts);
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPostsAction())
    }, []);

    const paginationFunc = () => {              // логика для пагинации
        setPaginationLoading(true)
        setTimeout( () => {
            setPostCount ( prev => prev + 10)
            setPaginationLoading(false)
        }, 1000)
    }

    const paginationContainer = () => {   //отображение кнопки подгрузи постов
        if(filteredPosts.length <= postsCount && filteredPosts.length > 0 ) return true    
        if(posts.length <= postsCount) return true
        return false
    };

    const postsValue = () => {
        if (filteredPosts.length === 0 && searchValue) return 'No matches, view all'
        if (filteredPosts.length > 0) return filteredPosts.length
        return posts.length
    }

    if (isLoading) return <FontAwesomeIcon className="loader" icon={faSpinner} spin />

    return (
        <div className="listContainer">
            <SearchContainer />
            <h3 className="text-muted postsListTitle">Users posts: </h3>
            <p className="text-muted postsListMatches"> {postsValue()}&nbsp;posts </p>
            {
                (filteredPosts.length > 0 ? filteredPosts : posts)
                    .slice(0, postsCount)
                    .map((el: any) => (
                        <Post key={el.id} id={el.id} userId={el.userId} title={el.title} body={el.body} />
                    ))
            }
            {
                !paginationContainer() && (
                    <Button onClick={paginationFunc}>
                        {paginationLoading ? (
                            <FontAwesomeIcon icon={faSpinner} spin />
                        ) : (
                            'Load more comments'
                        )}
                    </Button>
            )}
        </div>
    );
};

export default PostsList;
