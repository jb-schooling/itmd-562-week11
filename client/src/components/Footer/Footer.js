import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s5">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">
              Welcom to assignment of Week 9!
            </p>
          </div>
          <div className="col l4 offset-l2 offset-s1 s6">
            <h5 className="white-text">Steps:</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Add Books.
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Edit Books.
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Delete Books.
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Enjoy Books.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© Jbailey 2018</div>
      </div>
    </footer>
  );
}
