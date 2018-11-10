import React from "react";

const Input = props => {
  const buttons = [
    {
      btnName: "bookTitle",
      btnType: "text",
      labelText: "Title",
      btnValue: props.bookTitle
    },
    {
      btnName: "bookAuthor",
      btnType: "text",
      labelText: "Author",
      btnValue: props.bookAuthor
    },
    {
      btnName: "bookPages",
      btnType: "number",
      labelText: "Number of Pages",
      btnValue: props.bookPages
    }
  ];

  return buttons.map(button => (
    <div className="row" key={button.btnName}>
      <div className="input-field col s12">
        <input
          id={button.btnName}
          type={button.btnType}
          className="validate"
          onChange={event => props.changed(event)}
          value={button.btnValue}
        />
        {props.editedBook ? (
          button.labelText
        ) : (
          <label htmlFor={button.btnName}>{button.labelText}</label>
        )}
      </div>
    </div>
  ));
};

export default Input;
