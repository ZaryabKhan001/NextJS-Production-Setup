import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Header from './Header';

describe('Header component', () => {
  it('renders Header text', () => {
    render(<Header />);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});
