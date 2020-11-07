import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import React, { Component } from 'react'

import logo from '../../logo.svg';
import loading from '../../Assets/loading.png';

import './App.scss';

import { getJoke } from '../../APIcalls/Get-Joke';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import JokeDiv from '../JokeDiv/JokeDiv';
import Main from '../Main/Main'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      joke: {}
    }
  }
  decodeHtml = (html) => {
    let areaElement = document.createElement("textarea");
    areaElement.innerHTML = html;
    return areaElement.value;
  }
  componentDidMount() {
    getJoke()
    .then(res => this.setState({joke: res}))
  }
  checkForJoke = () => {
    if (this.state.joke.value) {
      let theJoke = this.state.joke.value.joke;
      if (theJoke.includes('&quot;')) {
        return this.decodeHtml(theJoke);
      } else {
        return <p className='the-joke'>{theJoke}</p>
      }
    } else {
      return <img src={loading} alt="loading image" className='loading'/>
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route path ="/" render={props => (
            <React.Fragment>
            <Main />
            </React.Fragment>
          )}/>
          {/* <JokeDiv checkForJoke={() => this.checkForJoke()}/> */}
          <Footer/>
        </div>
      </Router>
    );
  }
}

{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */}