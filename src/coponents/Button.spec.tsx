import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Hello</Button>);
    expect(baseElement).toBeTruthy();
  });

  it('should render text correctly', () => {
    const { getByText } = render(<Button>Hello</Button>);
    expect(getByText('Hello')).toBeTruthy();
  });
});
