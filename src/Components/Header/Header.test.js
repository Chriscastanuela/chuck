import { render, screen } from '@testing-library/react';
import Header from './Header';
import React from 'react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";


it('1. should render a header', () => {
render(
    <BrowserRouter>
        <Header />
    </BrowserRouter>
);

expect(screen.getByText('Chuck Norris Jokes for the Bored')).toBeInTheDocument();
expect(screen.getByText('👍')).toBeInTheDocument();
});