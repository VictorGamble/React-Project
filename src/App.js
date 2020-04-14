import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from './components/Container';
import HomePage from './components/HomePage';
import BookList from './components/BookList';
import 'bootstrap/dist/css/bootstrap.min.css'
import './book.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/:BookList">Search Page</Link>
            </li>
          </ul>
        </Container>
        <Route path='/' exact component={HomePage} />
        <Route path="/BookList" component={BookList}/>
      </Router>
 
    </div>
  );
}


export default App;
