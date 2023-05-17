import { vi } from 'vitest';
import { render } from '@testing-library/react';
import Breadcrumb from '@/components/Breadcrumb';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...(actual as any),
    useLocation: () => vi.fn(),
  };
});

describe('Breadcrumb', () => {
  it('render element', async () => {
    const router = await import('react-router-dom');
    router.useLocation = vi.fn().mockReturnValue({ pathname: '/foo' });

    const { baseElement } = render(<Breadcrumb />);
    expect(baseElement).toMatchSnapshot();
  });

  it('render start page', async () => {
    const router = await import('react-router-dom');
    router.useLocation = vi.fn().mockReturnValue({ pathname: '/' });

    const { baseElement } = render(<Breadcrumb />);
    expect(baseElement).toMatchSnapshot();
  });
});
