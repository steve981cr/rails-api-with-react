import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../stylesheets/App.css';
import Home from './Home';
import ArticleList from './ArticleList';
import ArticleInfo from './ArticleInfo';
import ArticleAdd from './ArticleAdd';
import ArticleEdit from './ArticleEdit';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>      
        <Router>
          <div className="container">
            <Navigation />
            <Main />
          </div>
        </Router>
      </div>
    );
  }
}
const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/articles">Articles</NavLink></li>
    </ul>
  </nav>
);
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/articles" component={ArticleList} />
    <Route exact path="/articles/new" component={ArticleAdd} />
    <Route exact path="/articles/:id" component={ArticleInfo} />
    <Route exact path="/articles/:id/edit" component={ArticleEdit} />
  </Switch>
);
export default App;