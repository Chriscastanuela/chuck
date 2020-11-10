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
  
describe('Main Page', () => {
    describe('Renders', () => {
        it('1. should have a thumbs up button', () => {
        render(
            <BrowserRouter>
                <JokeDiv
                isMain={true}
                theJoke={jokes[0].value[0].joke}
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
    describe('Functionality', () => {
        it('3. should have button click functionality', () => {
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
            userEvent.click(screen.getByText('👍'));
            expect(like).toHaveBeenCalled();
        })
    })
});
describe('Likes Page', () => {
    describe('Renders', () => {
        it('1. should have a thumbs down button', () => {
        render(
            <BrowserRouter>
                <JokeDiv
                isLikes={true}
                theJoke={jokes[0].value[0].joke}
                like={like}
                decodeHtml={
                    (param) => {
                        return param;
                    }
                }
                />
            </BrowserRouter>
        );
        
        expect(screen.getByText('👎')).toBeInTheDocument();
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
    describe('Functionality', () => {
        it('3. should have button click functionality', () => {
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
            userEvent.click(screen.getByText('👍'));
            expect(like).toHaveBeenCalled();
        })
    })
});