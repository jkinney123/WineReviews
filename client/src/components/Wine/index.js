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
        <h5> grape: {props.grape}</h5>
        <h5> year: {props.year}</h5>
        <h5> origin: {props.origin}</h5>
        <h5> price: {props.price}</h5>
      </p>

      <WineModal
        key={props.id}
        // wineClick={this.wineClick}
        id={props.id}
        grape={props.grape}
        wineType={props.wineType}
        price={props.price}
        name={props.name}
        year={props.year}
        origin={props.origin}
        tastingNotes={props.tastingNotes}
        grade={props.grade}
        feel={props.feel}
        image={props.image}
      />
    </div>
  </div>
);

export default Wine;
