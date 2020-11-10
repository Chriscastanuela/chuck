import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import React from 'react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


it('1. should render a link', () => {
render(<Footer />);

expect(screen.getByText('Author')).toBeInTheDocument();
});