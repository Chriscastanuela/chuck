import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import React, { Component } from 'react';

import './App.scss';

import request from '../../APIcalls/Get-Jokes';
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
    }
  }
  componentDidMount() {
    setTimeout(() => {
      request.getJokes()
      .then(res => (
        console.log(res),
        this.setState({jokes: [...[res]]}),
        console.log(this.state)
      ) )
    }, 100)
  }
  decodeHtml = (html) => {
    let areaElement = document.createElement("textarea");
    areaElement.innerHTML = html;
    return areaElement.value;
  }
  like = (joke) => {
    setTimeout(() =>  {
      this.setState({likes: [...this.state.likes, joke]});
      setTimeout(() =>  {
        localStorage.setItem('likes', JSON.stringify(this.state.likes));
      }, 100)
    }, 100);
  }
  dislike = (joke) => {
    let newArr = [];
    let theLikes = JSON.parse(localStorage.getItem('likes'));
    console.log(theLikes)
    theLikes.forEach(i => {
      if (i !== joke) {
        newArr.push(i)
      }
    })
    this.setState({likes: newArr});
    localStorage.setItem('likes', JSON.stringify(newArr));
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Main
              decodeHtml={this.decodeHtml}
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
            decodeHtml={this.decodeHtml}
            likes={this.state.likes}
            dislike={this.dislike}
            isLikes={true}
            />
          )}
          />
          <Switch>
            <Redirect to='/'/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}