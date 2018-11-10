import React from "react";
import Buttons from "../Button/Button";
import "./Book.css";

const pStyle = { fontSize: "1.09rem" };

const Book = props => {
  return (
    <div className="col s12 m6 l4 Book">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.bookTitle}</span>
          <p style={pStyle}>By: {props.bookAuthor}</p>
          <p style={pStyle}>Number of Pages: {props.bookPages}</p>
        </div>
        <div className="card-action">
          <Buttons bookID={props.bookID} clicked={props.btnAction} />
        </div>
      </div>
    </div>
  );
};

export default Book;
