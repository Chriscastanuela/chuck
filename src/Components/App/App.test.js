import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import '@testing-library/jest-dom';


let jokes = [
  {
    value: [
      {
        joke: 'funny'
      },
      {
        joke: 'funny'
      }
    ]
  }
]

describe('Main', () => {
  describe('Components', () => {
    it('1. should have a header', () => {
      render(<App jokes={jokes} likes={jokes}/>);
      
      expect(screen.getByText('Chuck Norris Jokes for the Bored')).toBeInTheDocument();
      expect(screen.getByText('👍')).toBeInTheDocument();
    });
    it('2. should have a footer', () => {
      render(<App />);
      
      expect(screen.getByText('Author')).toBeInTheDocument();
    });
  });
});