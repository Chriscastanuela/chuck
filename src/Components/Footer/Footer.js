import React, { Component } from 'react'

export default class Footer extends Component {
    constructor() {
        super()
        this.state = {
            joke: {}
        }
    }
    checkForJoke = () => {
        if (this.state.joke.value) {
            return this.state.joke.value.joke
        } else {
            return 'Loading'
            // {this.checkForJoke()}
        }
    }
    render() {
        return (
            <div>
                <h1></h1>
            </div>
        )
    }
}