import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Inputs from "../Input/Input";

class Form extends Component {
  state = {
    book: {
      bookTitle: "",
      bookAuthor: "",
      bookPages: ""
    }
  };

  static getDerivedStateFromProps(props, state) {
    if (props.books !== state.books) {
      if (props.isFormSubmitted)
        return {
          books: props.books
        };
    }

    // let updatedBook;
    // if (props.editedBook !== null) {
    //   updatedBook = {
    //     bookTitle: props.editedBook.title,
    //     bookAuthor: props.editedBook.author,
    //     bookPages: props.editedBook.numPages
    //   };

    //   return {
    //     book: updatedBook
    //   };
    // }
    // if (props.isFormSubmitted) {
    //   updatedBook = {
    //     bookTitle: "",
    //     bookAuthor: "",
    //     bookPages: ""
    //   };

    //   return {
    //     book: updatedBook
    //   };
    // }

    return null;
  }

  // inputOnLoad = event => {
  //   console.log("Loaded");

  // };

  inputOnChange = event => {
    let updatedBook = {
      ...this.state.book,
      [event.target.id]: event.target.value
    };
    this.setState({
      book: updatedBook
    });
  };

  render() {
    return (
      <div className="row">
        <form
          className="col s12"
          onSubmit={event => this.props.formSubmitted(event, this.state.book)}
        >
          <Inputs changed={this.inputOnChange} values={this.state.book} />
          <div className="divider" />
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editedBook: state.book.book
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getError: () => dispatch(actions.getErrors({ error: "Error" }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
