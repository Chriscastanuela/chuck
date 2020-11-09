import { render, screen } from '@testing-library/react';
import Likes from './Likes';
import React from 'react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";

let jokes = [
    'funny',
];
let mockedDislike = jest.fn();

describe('No likes', () => {
    describe('Render', () => {
        it('should render an image and a header', () => {
            render(
                <BrowserRouter>
                    <Likes 
                    likes={[]}
                    />
                </BrowserRouter>
            );
            expect(screen.getByText('You have no likes')).toBeInTheDocument();
        })
    })
})
describe('With likes', () => {
    describe('Render', () => {
        it('should render joke divs', () => {
            render(
                <BrowserRouter>
                    <Likes 
                        likes={jokes}
                        dislike={mockedDislike}
                        isLikes={true}
                        decodeHtml={
                            (param) => {
                                return param;
                            }
                        }
                    />
                </BrowserRouter>
            )
            expect(screen.getByText('👎')).toBeInTheDocument();
            expect(screen.getByText('funny')).toBeInTheDocument();
        })
    })

})