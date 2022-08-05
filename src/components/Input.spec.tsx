import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  beforeEach(() => {
    jest.spyOn(Math, 'random').mockImplementation(() => 42);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Input />);

    expect(baseElement).toBeTruthy();
  });

  it('should have correct placeholder, id and label', () => {
    const { getByText, getByPlaceholderText } = render(
      <Input label="label" id="id" placeholder="placeholder" />,
    );

    const renderedLabel = getByText('label');
    const renderedInput = getByPlaceholderText('placeholder');

    expect(renderedLabel).toBeTruthy();
    expect(renderedLabel).toHaveAttribute('for', 'id');
    expect(renderedInput).toBeTruthy();
    expect(renderedInput).toHaveAttribute('id', 'id');
  });

  it('should have correct ids for label when id is not presented', () => {
    const { getByText, getByPlaceholderText } = render(
      <Input label="label" placeholder="placeholder" />,
    );

    const renderedLabel = getByText('label');
    const renderedInput = getByPlaceholderText('placeholder');

    expect(renderedLabel).toBeTruthy();
    expect(renderedLabel).toHaveAttribute('for', 'input-42');
    expect(renderedInput).toBeTruthy();
    expect(renderedInput).toHaveAttribute('id', 'input-42');
  });
});
