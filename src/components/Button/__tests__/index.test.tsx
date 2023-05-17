import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import Button from '@/components/Button';

describe('Button', () => {
  it('render element', async () => {
    const mockFn = vi.fn();
    const label = 'Button Example';

    const { baseElement } = render(
      <Button label={label} onClick={mockFn} testID="btn-test" />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('render disabled Button', async () => {
    const mockFn = vi.fn();
    const label = 'Button Example';

    const { baseElement } = render(
      <Button
        label={label}
        disabled={true}
        onClick={mockFn}
        testID="btn-test"
      />
    );
    expect(baseElement).toMatchSnapshot();

    const btn = await screen.getByTestId('btn-test');
    await userEvent.click(btn);
    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  it('should click button', async () => {
    const mockFn = vi.fn();
    const label = 'Button Example';
    render(<Button label={label} onClick={mockFn} testID="btn-test" />);

    const btn = await screen.getByTestId('btn-test');
    await userEvent.click(btn);
    expect(mockFn).toHaveBeenCalled();
  });
});
