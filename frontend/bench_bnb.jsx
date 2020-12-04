import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout, logoutCurrentUser } from "./actions/session_actions";
import rootReducer from './reducers/root_reducer';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    window.store = store

    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});

window.rootReducer = rootReducer;
window.signup = signup;
window.login = login;
window.logout = logout;
window.logoutCurrentUser = logoutCurrentUser;

