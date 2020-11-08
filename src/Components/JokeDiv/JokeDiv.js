import './Joke-Div.scss'
import React, { Component } from 'react'

export default class JokeDiv extends Component {
    decodeHtml = (html) => {
        let areaElement = document.createElement("textarea");
        areaElement.innerHTML = html;
        return areaElement.value;
    }
    render(props) {
        let joke = this.decodeHtml(this.props.theJoke);
        return (
            <section className='joke'>
                <div className='joke-div'>
                    <input type="button" className='thumbs' value='👍' onClick={() => this.props.like(joke)} />
                    <input type="button" className='thumbs' value="👎" onClick={() => this.props.dislike(joke)}/>
                    <p className='the-joke'>{joke}</p>
                </div>
            </section>
        )
    }
}