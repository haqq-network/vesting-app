import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting', () => {
    const { findByText } = render(<App />);

    expect(findByText('Under constaction')).toBeTruthy();
  });
});
