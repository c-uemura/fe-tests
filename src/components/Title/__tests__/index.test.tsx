import { render } from '@testing-library/react';
import Title from '@/components/Title';

describe('Title', () => {
  it('should display the title', () => {
    const title = 'Title Example';
    const { baseElement } = render(<Title title={title} />);
    expect(baseElement).toMatchSnapshot();
  });
});
