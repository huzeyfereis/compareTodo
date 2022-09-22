import { render } from '@testing-library/react';
import App from './App';

test('Renders successfully', () => {
  const { getByText } = render(<App />);
  getByText('Add');
});
