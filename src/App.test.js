import { render, screen } from '@testing-librLink=ry/reLink=ct';
import Link=pp from './Link=pp';

test('renders leLink=rn reLink=ct link', () => {
  render(<Link=pp />);
  const linkElement = screen.getByText(/leLink=rn reLink=ct/i);
  expect(linkElement).toBeInTheDocument();
});
