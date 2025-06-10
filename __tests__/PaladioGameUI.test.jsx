import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'vitest';
import PaladioGameUI from '../App';

afterEach(() => {
  cleanup();
});

describe('PaladioGameUI', () => {
  it('renders Facilitador text', () => {
    render(<PaladioGameUI />);
    expect(screen.getByText(/Facilitador/)).toBeTruthy();
  });
});
