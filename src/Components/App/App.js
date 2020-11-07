import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import React, { Component } from 'react'

import logo from '../../logo.svg';
import loading from '../../Assets/loading.png';

import './App.scss';

import { getJoke } from '../../APIcalls/Get-Joke';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Main from '../Main/Main'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      likes: [],
      jokes: [],
      currentJoke: {}
    }
  }
  componentDidMount() {
    setTimeout(() => {
      getJoke()
      .then(res => this.setState({jokes: [...[res]]}))
      .then(res => console.log(this.state))
    }, 100)
  }
  decodeHtml = (html) => {
    let areaElement = document.createElement("textarea");
    areaElement.innerHTML = html;
    return areaElement.value;
  }
  checkForJoke = () => {
    if (this.state.jokes.length > 0) {
      let theJoke = this.state.jokes[0].value[Math.floor(Math.random() * this.state.jokes[0].value.length)];
      console.log(theJoke.joke)
      if (theJoke.joke.includes('&quot;')) {
        return this.decodeHtml(theJoke.joke);
      } else {
        return <p className='the-joke'>{theJoke.joke}</p>
      }
    } else {
      return <img src={loading} alt="loading image" className='loading'/>
    }
  }
  // sortedJokes() {
  //   let theJokes = this.state.jokes[0].value.sort((a, b) => {
  //     a.joke - b.joke;
  //   })
  // }
  like = () => {
    setTimeout(() => {
      this.setState({likes: [...[this.state.joke.value]]});
      console.log(this.state);
      getJoke()
      .then(res => this.setState({joke: res}))
      console.log(this.state);
    }, 0)
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route path="/" render={props => (
            <React.Fragment>
              <Main  
              checkForJoke={() => this.checkForJoke()}
              jokes={this.state.jokes}
              like={() => this.like()}
              />
            </React.Fragment>
          )}/>
          {/* <Route /> */}
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
  // getRandomArrayElement(arr) {
  //   var min = 0;
  //   var max = (arr.length - 1);
  //   var randIndex = Math.floor(Math.random() * (max - min)) + min;
  //   return arr[randIndex];
  // }
  // let theJoke = this.getRandomArrayElement(this.state.jokes[0].value);