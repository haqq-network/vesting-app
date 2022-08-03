import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('should render successfully', () => {
    const mockHandler = jest.fn();
    const { baseElement } = render(
      <Input
        onChange={mockHandler}
        state="normal"
        type="text"
        value="test"
        required
      />,
    );

    expect(baseElement).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
    expect(baseElement).toBeEnabled();
  });

  it('should have correct placeholder value', () => {
    const mockHandler = jest.fn();
    render(
      <Input
        onChange={mockHandler}
        state="normal"
        type="text"
        placeholder="test"
      />,
    );

    expect(screen.getAllByPlaceholderText('test')).toBeTruthy();
  });

  it('should have correct label text', () => {
    const mockHandler = jest.fn();
    render(
      <div>
        <Input
          onChange={mockHandler}
          state="normal"
          type="text"
          placeholder="test"
          label="test"
          id="1"
        />
      </div>,
    );

    expect(screen.getByLabelText('test')).toBeTruthy();
  });

  it('should not have error attribute type', () => {
    const mockHandler = jest.fn();
    const { baseElement } = render(
      <Input
        onChange={mockHandler}
        state="success"
        type="text"
        label="test"
        value="test"
        id="1"
      />,
    );
    screen.debug();

    expect(baseElement).not.toHaveAttribute('type', 'error');
    expect(screen.getByLabelText('test')).toHaveAttribute('type', 'text');

    // TODO finish tests
  });
});
