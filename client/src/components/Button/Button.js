import React from "react";
import "./Button.css";

const buttons = [
  { btnIcon: "edit", btnText: "Edit Book", btnColorClass: "grey" },
  { btnIcon: "delete", btnText: "Delete Book", btnColorClass: "red darken-1" }
];

const Button = props => {
  return buttons.map(button => {
    let key = props.bookID;
    return (
      <button
        key={(key = key + "," + button.btnIcon)}
        className={"waves-effect waves-light btn " + button.btnColorClass}
        onClick={event => props.clicked(event, key)}
      >
        <i className="material-icons right">{button.btnIcon}</i>
        {button.btnText}
      </button>
    );
  });
};

export default Button;
