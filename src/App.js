import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookList from './components/BookList';
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css'
import './book.css'




function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/BookList">Search</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
        </ul>
        <Route path='/' exact component={HomePage} />
        <Route path="/BookList" component={BookList} />
        <Route path="/SignUp" component={SignUp}/>
      </Router>
    </div>
  );
}


export default App;
