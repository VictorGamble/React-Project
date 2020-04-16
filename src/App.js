import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookList from './components/BookList';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import 'bootstrap/dist/css/bootstrap.min.css'
import './book.css'




function App() {
  return (
    <div className="App">
      <nav class="nav nav-pills flex-column flex-sm-row navbar-dark bg-dark">
  <a class="flex-sm-fill text-sm-center nav-link active" href="/">Home</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="/SignUp">SignUp</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="/Login">Login</a>
  <a class="flex-sm-fill text-sm-center nav-link " href="#">About</a>
</nav>
      <Router>
        <Route path='/' exact component={HomePage} />
        <Route path="/BookList" component={BookList} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Login" component={LogIn}/>
      </Router>
    </div>
  );
}


export default App;
