import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watchBooks } from "./sagas/index";

// import { watchAuth, watchProfiles } from "./sagas/index";

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

const sagas = [watchBooks];

sagaMiddleware.run(...sagas);
export default store;
