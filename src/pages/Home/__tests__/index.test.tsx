import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import * as router from 'react-router-dom';
import Home from '@/pages/Home';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...(actual as any),
    useNavigate: () => vi.fn(),
  };
});

describe('Button', () => {
  it('should click button', async () => {
    const spy = vi.spyOn(router, 'useNavigate');
    render(<Home />);

    const btn = await screen.getByTestId('settings-button');
    await userEvent.click(btn);
    expect(spy).toHaveBeenCalled();
  });
});
