import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import React from 'react'
import '@testing-library/jest-dom';
import { getJokes } from '../../APIcalls/Get-Jokes';
jest.mock('../../APIcalls/Get-Jokes');
import { BrowserRouter } from "react-router-dom";


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

describe('componentDidMount', () => {
  it('should render jokes', async () => {
    getJokes.mockResolvedValueOnce(jokes)
    render(
      <BrowserRouter>
        <App jokes={jokes} likes={jokes}/>
      </BrowserRouter>
    )
    const funnyJoke = await waitFor(() => screen.getByText('funny'))
    expect(funnyJoke).toBeInTheDocument()
  });
})

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