import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ErrorButton, btnText } from '.';

describe('ErrorButton component', () => {
  beforeEach(() => {
    render(<ErrorButton />);
  });
  test('Displayed ErrorButton component', () => {
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });
  test('Right button text', () => {
    const btn = screen.getByText(btnText);
    expect(btn).toBeInTheDocument();
  });
});
