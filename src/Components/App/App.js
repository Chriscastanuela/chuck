import logo from '../../logo.svg';
import './App.css';
import Footer from '../Footer/Footer';
import React, { Component } from 'react'
import { getJoke } from '../../APIcalls/Get-Joke';
import Header from '../Header/Header'
import JokeDiv from '../JokeDiv/JokeDiv';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      joke: {}
    }
  }
  componentDidMount() {
    getJoke()
    .then(res => this.setState({joke: res}))
  }
  checkForJoke = () => {
    if (this.state.joke.value) {
      return this.state.joke.value.joke
    } else {
      return 'Loading'
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <JokeDiv checkForJoke={() => this.checkForJoke()}/>
        <Footer/>
      </div>
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