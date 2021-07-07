import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react';
import List from './index';

const testEntry = [{
    journalDate: "01, January 2021",
    content: "Test content for journal entry",
}]

test('List component loads', () => {
    render(<List entries={testEntry} />);
    const entryData = screen.getByText(/Test content for journal entry/i);
    expect(entryData).toBeInTheDocument();
  });
test('Delete button loads with test entry', async () => {
    const handleDeleteEntryMock = jest.fn();
    const { getByText } = render(<List 
        entries={testEntry} 
        handleDeleteEntry={handleDeleteEntryMock}    
    />);
    const button = getByText('Delete');
    await fireEvent.click(button);

    expect(button).toHaveTextContent('Delete');
});