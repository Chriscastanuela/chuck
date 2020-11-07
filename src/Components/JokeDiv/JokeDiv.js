import './Joke-Div.scss'
import React, { Component } from 'react'

export default class JokeDiv extends Component {
    decodeHtml = (html) => {
        let areaElement = document.createElement("textarea");
        areaElement.innerHTML = html;
        return areaElement.value;
    }
    render(props) {
        return (
            <section className='joke'>
                <div className='joke-div'>
                    <input type="button" className='thumbs' value="👍" onClick={() => props.like()}/>
                    <input type="button" className='thumbs' value="👎" /*onClick={}*//>
                    <p className='the-joke'>{this.decodeHtml(this.props.theJoke)}</p>
                </div>
            </section>
        )
    }
}
