import React from "react";
import { ListItem } from "../List";

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
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#myModal"
      >
        Open modal
      </button>
    </div>
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>

            <h4 className="modal-title"></h4>
          </div>

          <ListItem>
            <div className="modal-body">
              <p>Some text in the modal.</p>
            </div>
          </ListItem>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Wine;
