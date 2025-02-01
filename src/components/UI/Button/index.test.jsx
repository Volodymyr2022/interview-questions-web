import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonComponent from './index.jsx';

test('renders button with correct text', () => {
  render(
    <ButtonComponent className="test-class">
      Test Button
    </ButtonComponent>
  );
  const buttonElement = screen.getByText(/Test Button/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass('test-class');
});

test('calls onClick when button is clicked', () => {
  const handleClick = vi.fn();
  render(
    <ButtonComponent onClick={handleClick}>
      Click Me
    </ButtonComponent>
  );
  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
