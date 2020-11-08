import './Likes.scss'

import React, { Component } from 'react'

import chuck from '../../Assets/chuck.jpeg';

import JokeDiv from '../JokeDiv/JokeDiv';


export default class Likes extends Component {
    
    render(props) {
        let sortedJokes = this.props.likes.sort((a, b) => {
            return a.localeCompare(b)
        });
        let theKey = 0;
        if (this.props.likes.length > 0) {
            return (
                <div className='likes-section'>
                    {
                        sortedJokes.map(element => {
                            theKey += 1;
                            return (
                                <JokeDiv 
                                decodeHtml={this.props.decodeHtml}
                                id={theKey}
                                theJoke={element}
                                dislike={this.props.dislike}
                                isLikes={this.props.isLikes}
                                />
                            )
                        })
                    }
                </div>
            )
        } else {
            return  (
                <div>
                    <h1 className='likes-header'>You have no likes</h1>
                    <img src={chuck} alt="loading image" className='chuck'/>
                </div>
            )
        }
    }
}