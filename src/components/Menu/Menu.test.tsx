import { render, screen } from '@testing-library/react';

import { Menu } from './Menu';

describe('Menu', () => {
  it('should show the UserIcon', () => {
    render(<Menu />);
    expect(screen.getByTestId('usericon')).toBeInTheDocument();
  });

  // @fixme Implement more tests
});
