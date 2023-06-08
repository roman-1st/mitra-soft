import React, { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./SearchContainer.css";
import { useDispatch } from "react-redux";
import { StateActionTypes } from "../../../types/state";

const SearchContainer = () => {
  const [value, setValue ] = useState('')         // значение поиска по заголовку поста
  const dispatch = useDispatch()

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {   // запись значения 
    dispatch({type: StateActionTypes.FILTERED_POSTS, payload: e.target.value})
    setValue(e.target.value)
  }

  const clearValue = () => {      // удаление поля value 
    setValue('');
    dispatch({type: StateActionTypes.FILTERED_POSTS, payload: ''})
  }

  return (

    <InputGroup className="mb-3 searchContainer">
      <div className="inputDiv">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={value}
          onChange={ (e: any) => changeValue(e)}
          className="inputPlace"
        />
      </div>
      <Button onClick={clearValue} variant="outline-primary" className="searchButton">
        Clear
      </Button>
    </InputGroup>
  );
};

export default SearchContainer;
