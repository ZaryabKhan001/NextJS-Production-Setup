import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Footer from './Footer';

describe('Footer component', () => {
  it('renders Footer text', () => {
    render(<Footer />);
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
