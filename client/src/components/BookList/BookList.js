import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Book from "../Book/Book";

import "./BookList.css";

class BookList extends Component {
  state = {
    btnAction: null
  };
  componentDidMount() {
    this.props.getBooks();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.books !== state.books) {
      console.log(props.books);

      return {
        books: props.books
      };
    }
    return null;
  }

  btnOnClick = (event, key) => {
    console.log(key);
    let [bookID, btnAction] = key.split(",");
    let book = this.props.books.find(book => book._id === bookID);
    let bookIndex = this.props.books.indexOf(book);

    console.log(bookID, btnAction);
    console.log("[props]", this.props.books);
    console.log("[BOOKID]", bookID, bookIndex);

    const deleteBook = bookID => {
      console.log("delete");

      this.props.books.splice(bookIndex, 1);

      let filteredBooks = this.state.books.filter(book => book._id !== bookID);

      this.setState({
        books: filteredBooks
      });
      this.props.deleteBook(bookID);
    };

    const editBook = () => {
      console.log("edit");
      this.props.activateForm(book, bookID);
      this.props.setBook(book);
      // if (this.props.editBook) this.props.updateBook(book, bookID);
    };
    switch (btnAction) {
      case "edit":
        editBook();
        break;
      case "delete":
        deleteBook(bookID);
        break;
      default:
        return;
    }
  };

  render() {
    let bookList;

    if (!this.props.booksLoading) {
      bookList = this.props.books.map(book => (
        <Book
          key={book._id}
          bookID={book._id}
          bookTitle={book.title}
          bookAuthor={book.author}
          bookPages={book.numPages}
          btnAction={this.btnOnClick}
        />
      ));
    } else {
      console.log("Books Loading");
    }

    return (
      <div className="BookList container">
        <div className="row">{bookList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.books,
    editedBook: state.book.book,
    booksLoading: state.books.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBooks: () => dispatch(actions.getBooksInit()),
    updateBook: (book, bookID) =>
      dispatch(actions.updateBookInit(book, bookID)),
    setBook: book => dispatch(actions.setBook(book)),
    deleteBook: bookID => dispatch(actions.deleteBookInit(bookID)),
    getError: () => dispatch(actions.getErrors({ error: "Error" }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
