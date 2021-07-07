import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { debug } from 'webpack';
import Form from './index';

test('Form app loads', () => {
  render(<Form />);
  const formComponent = screen.getByText(/Journal Entry/i);
  expect(formComponent).toBeInTheDocument();
});
test('Input text area should load with prop.content value', () => {
    const handleContentMock = jest.fn();
    const handleSubmitFormMock = jest.fn();
    const contentMock = 'test';
    render(<Form
        content={contentMock}
        handleContent={handleContentMock}
        handleSubmitForm={handleSubmitFormMock}
    />);
    expect(screen.getByTestId('rtl-test')).toHaveValue('test');
})
test('Submit button exists on component load', () => {
    const handleContentMock = jest.fn();
    const handleSubmitFormMock = jest.fn();
    const contentMock = 'test';
    render(<Form
        content={contentMock}
        handleContent={handleContentMock}
        handleSubmitForm={handleSubmitFormMock}
    />);
    expect(screen.getByText('New Entry')).toBeTruthy();
})