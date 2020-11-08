import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import React, { Component } from 'react'

import logo from '../../logo.svg';

import './App.scss';

import { getJokes } from '../../APIcalls/Get-Jokes';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Likes from '../Likes/Likes'


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
      getJokes()
      .then(res => this.setState({jokes: [...[res]]}))
      .then(res => console.log(this.state))
    }, 100)
  }
  decodeHtml = (html) => {
    let areaElement = document.createElement("textarea");
    areaElement.innerHTML = html;
    return areaElement.value;
  }
  like = (joke) => {
    setTimeout(() => {
      this.setState({likes: [...this.state.likes, joke]});
      console.log(this.state);
    }, 0)
  }
  dislike = (joke) => {
    let newArr = [];
    this.state.likes.forEach(i => {
      if (i != joke) {
        newArr.push(i)
      }
    })
    setTimeout(() => {
      this.setState({likes: newArr});
    }, 0)
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Main
              jokes={this.state.jokes}
              like={this.like}
              isMain={true}
              />
            </React.Fragment>
          )}/>
          <Route
          path='/likes'
          render={props => (
            <Likes
            likes={this.state.likes}
            dislike={this.dislike}
            isLikes={true}
            />
          )}
          />
          <Footer/>
        </div>
      </Router>
    );
  }
}