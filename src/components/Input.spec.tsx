import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('<Input />', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(42);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('should have correct placeholder, id and label', () => {
    const { container, getByPlaceholderText } = render(
      <Input label="label" id="id" placeholder="placeholder" />,
    );

    const renderedLabel = container.querySelector('label');
    const renderedInput = getByPlaceholderText('placeholder');

    expect(renderedLabel).toBeTruthy();
    expect(renderedLabel).toHaveAttribute('for', 'id');
    expect(renderedInput).toBeTruthy();
    expect(renderedInput).toHaveAttribute('id', 'id');
  });

  it('should have correct ids for label when id is not presented', () => {
    const { container, getByPlaceholderText } = render(
      <Input label="label" placeholder="placeholder" />,
    );

    const renderedLabel = container.querySelector('label');
    const renderedInput = getByPlaceholderText('placeholder');

    expect(renderedLabel).toBeTruthy();
    expect(renderedLabel).toHaveAttribute('for', 'input-42');
    expect(renderedInput).toBeTruthy();
    expect(renderedInput).toHaveAttribute('id', 'input-42');
  });
});
