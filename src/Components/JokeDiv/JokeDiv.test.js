import { render, screen } from '@testing-library/react';
import JokeDiv from './JokeDiv';
import React from 'react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";


let jokes = [
    {
        value: [
        {joke: 'funny'},
        {joke: 'funny'}
        ]
    }
];
let like = jest.fn();
  
describe('Renders', () => {
    describe('Main Page', () => {
        it('1. should have a thumbs up button', () => {
        render(
            <BrowserRouter>
                <JokeDiv
                isMain={true}
                theJoke={'funny'}
                like={like}
                decodeHtml={
                    (param) => {
                        return param;
                    }
                }
                />
            </BrowserRouter>
        );
        
        expect(screen.getByText('👍')).toBeInTheDocument();
        expect(screen.getByText('funny')).toBeInTheDocument();
        });

        it('2. should have a joke', () => {
            render(
                <BrowserRouter>
                    <JokeDiv
                    isMain={true}
                    theJoke={'funny'}
                    like={like}
                    decodeHtml={
                        (param) => {
                            return param;
                        }
                    }
                    />
                </BrowserRouter>
            );
        
        expect(screen.getByText('funny')).toBeInTheDocument();
        });
    });
    // describe('Likes Page', () => {
    //     it('1. should have a header', () => {
    //     render(<App jokes={jokes} likes={jokes}/>);
        
    //     expect(screen.getByText('Chuck Norris Jokes for the Bored')).toBeInTheDocument();
    //     expect(screen.getByText('👍')).toBeInTheDocument();
    //     });

    //     it('2. should have a footer', () => {
    //     render(<App />);
        
    //     expect(screen.getByText('Author')).toBeInTheDocument();
    //     });
    // });
});