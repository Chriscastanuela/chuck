import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import React from 'react'
import '@testing-library/jest-dom';
import request from '../../APIcalls/Get-Jokes';


it('should receive a resolved promise', async () => {
  request.getJokes = jest.fn()
  request.getJokes.mockResolvedValue(
    {
      value: [
        {
          joke: 'funny'
        }
      ]
    }
  )
  render(<App jokes={[{
    value: [
      {
        joke: 'funny'
      }
    ]
  }]}/>);
  await waitFor(() => {
    expect(request.getJokes).toHaveBeenCalledTimes(1)
  })
})


describe('Main', () => {
  describe('Components', () => {
    it('1. should have a header', () => {
      render(<App />);
      
      expect(screen.getByText('Chuck Norris Jokes for the Bored')).toBeInTheDocument();
      expect(screen.getByText('👍')).toBeInTheDocument();
    });
    it('2. should have a footer', () => {
      render(<App />);
      
      expect(screen.getByText('Author')).toBeInTheDocument();
    });
  });
});