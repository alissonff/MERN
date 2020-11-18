/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./App.scss";
import "./components/sass/welcome.scss";

//import components
import Welcome from "./components/welcome.component";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todos.component";
import TodosList from "./components/todos-list.component";

function App() {
  return (
    
    <Router>
      <Route path="/" exact component={Welcome} />
      <Route path="/todo" exact component={TodosList} />
      <Route path="/todo/edit/:id" component={EditTodo} />
      <Route path="/todo/create" component={CreateTodo} />  
    </Router>
    
  );
}

export default App;
