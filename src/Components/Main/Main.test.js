import { render, screen } from '@testing-library/react';
import Main from './Main';
import React from 'react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";

let jokes = [
    {
        value: [
        {joke: 'funny'},
        ]
    }
];
let like = jest.fn();

describe('Without Jokes', () => {
    it('1. should render a loading message', () => {
        render(
            <BrowserRouter>
                <Main
                decodeHtml={
                    (param) => {
                        return param;
                    }
                }
                jokes={[]}
                like={like}
                isMain={true}
                />
            </BrowserRouter>
        )
        expect(screen.getByText('Loading')).toBeInTheDocument()
    })
})
describe('With Jokes', () => {
    describe('Render', () => {
        it('2. should render joke divs', () => {
            render(
                <BrowserRouter>
                    <Main
                    decodeHtml={
                        (param) => {
                            return param;
                        }
                    }
                    jokes={jokes}
                    like={like}
                    isMain={true}
                    />
                </BrowserRouter>
            )
            expect(screen.getByText('👍')).toBeInTheDocument();
            expect(screen.getByText('funny')).toBeInTheDocument();
        })
    })
    describe('Functionality', () => {
        it('3. should have button click functionality', () => {
            render(
                <BrowserRouter>
                    <Main
                    decodeHtml={
                        (param) => {
                            return param;
                        }
                    }
                    jokes={jokes}
                    like={like}
                    isMain={true}
                    />
                </BrowserRouter>
            )
            userEvent.click(screen.getByText('👍'));
            expect(like).toHaveBeenCalledWith('funny')
        })
    })
})