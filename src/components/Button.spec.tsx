import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('should not handle clicks when disabled', () => {
    const mockHandler = jest.fn();
    const { getByText } = render(
      <Button disabled onClick={mockHandler}>
        Hello
      </Button>,
    );

    userEvent.click(getByText('Hello'));
    expect(mockHandler).toHaveBeenCalledTimes(0);
  });
});
