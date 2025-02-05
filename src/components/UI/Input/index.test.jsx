import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputComponent from './index.jsx';

test('renders input with correct placeholder and class', () => {
  render(
    <InputComponent placeholder="Enter text" className="test-input" />
  );
  const inputElement = screen.getByPlaceholderText(/Enter text/i);
  
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveClass('test-input');
});

test('allows typing inside the input field', () => {
  render(
    <InputComponent placeholder="Type here" />
  );
  const inputElement = screen.getByPlaceholderText(/Type here/i);
  fireEvent.change(inputElement, { target: { value: 'Hello' } });
  
  expect(inputElement.value).toBe('Hello');
});

test('forwards ref correctly to input element', () => {
  const inputRef = React.createRef();
  render(
    <InputComponent ref={inputRef} />
  );
  
  expect(inputRef.current).toBeInstanceOf(HTMLInputElement);
});
