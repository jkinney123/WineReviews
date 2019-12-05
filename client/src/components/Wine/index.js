import React from "react";
import WineModal from "../Modal";
// import { ListItem } from "../List";
// import { Link } from "react-router-dom";
// import Modal from "react-mod

import "./style.css";

const Wine = props => (
  <div className="card-Style">
    <img className="card-img-top" src={props.image} alt="Wine" />
    <div className="card-body">
      <h4 className="card-title">{props.name}</h4>
      <p className="card-text">
        {props.grape} {props.year}>
      </p>
      <br />
      <WineModal />
    </div>
  </div>
);

export default Wine;
