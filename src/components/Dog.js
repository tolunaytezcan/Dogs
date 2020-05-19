import React from "react";
import FavoriteActions from "./FavoriteActions";
//import { Router,Route } from 'react-router';
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from 'reactstrap';

const Dog = ({
  id,
  name,
}) => {
  return (
    <ListGroup style={{
      display: "inline-block",
      float:"left",
      width:"200px",
    }}>
    <ListGroupItem>
        <Link to={`/detay/${id}/${name}`}>
          <h6>{name}</h6>
        </Link>
      <FavoriteActions id={id}/>
      </ListGroupItem>
    </ListGroup>
  );
};

export default Dog;
