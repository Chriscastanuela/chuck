import logo from '../../logo.svg';
import loading from '../../Assets/loading.png';
import './App.scss';
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