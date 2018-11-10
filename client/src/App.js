import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import BookList from "./components/BookList/BookList";
import Modal from "./components/Modal/Modal";
import { connect } from "react-redux";
import * as actions from "./store/actions";
import { Route, Switch } from "react-router-dom";
import Book from "./components/Book/Book";
import Navbar from "./components/Navbar//Navbar";
import Footer from "./components/Footer//Footer";

class App extends Component {
  state = {
    formActivated: false,
    isEdit: false,
    book: null,
    bookID: null,
    formSubmitted: false
  };

  activateForm = (book, bookID) => {
    console.log("Form Activated");
    this.setState({
      formActivated: true
    });

    if (book && bookID) {
      this.setState({
        book,
        bookID,
        isEdit: true
      });
    }
  };

  deactivateForm = () => {
    console.log("Form Deactivated");
    this.setState({
      formActivated: false
    });
  };

  submitForm = (event, book) => {
    console.log("submit");
    event.preventDefault();
    this.setState({ formActivated: false });
    console.log(book);
    console.log("[EDITED]", this.props.editedBook);

    if (this.state.isEdit) {
      this.props.updateBook(book, this.props.editedBook._id);
      this.setState({
        isEdit: false
      });
    } else {
      this.props.createBook(book);
    }

    this.setState({ formSubmitted: true });
  };

  render() {
    const floatingButton = (
      <button
        onClick={this.activateForm}
        className="btn-floating btn-large waves-effect waves-light blue-grey darken-1"
      >
        <i className="material-icons">add</i>
      </button>
    );
    return (
      <div className="grey lighten-2 App">
        <Modal
          show={this.state.formActivated}
          backdropClicked={this.deactivateForm}
        >
          <Form
            formSubmitted={this.submitForm}
            isFormSubmitted={this.state.formSubmitted}
          />
        </Modal>
        <Navbar />
        {this.props.books.length === 0 ? (
          <h2 className="noBooks">No Books</h2>
        ) : null}
        <BookList
          activateForm={this.activateForm}
          deactivateForm={this.deactivateForm}
        />
        {floatingButton}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editedBook: state.book.book,
    books: state.books.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBook: book => dispatch(actions.createBookInit(book)),
    updateBook: (book, bookID) =>
      dispatch(actions.updateBookInit(book, bookID)),
    getError: () => dispatch(actions.getErrors({ error: "Error" }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
