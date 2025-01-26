import { render, screen } from '@testing-library/react';

import { getTestProps } from '@/lib';

import { Link } from './link';

describe('Link Component', () => {
  it('should match snapshot', () => {
    const internallLink = render(<Link mode='internal'>link</Link>);
    const externalLink = render(<Link mode='external'>link</Link>);
    const disabledLink = render(<Link disabled>link</Link>);

    expect(internallLink.container).toMatchSnapshot();
    expect(externalLink.container).toMatchSnapshot();
    expect(disabledLink.container).toMatchSnapshot();
  });

  it('should render link with internal mode by default', () => {
    render(<Link {...getTestProps('link')}>link</Link>);

    const linkElement = screen.getByTestId('link');
    expect(linkElement).toHaveClass('active:underline');
  });

  it('should render link with external mode when mode prop is external', () => {
    render(
      <Link
        mode='external'
        {...getTestProps('link')}
      >
        link
      </Link>
    );

    const linkElement = screen.getByTestId('link');
    expect(linkElement).toHaveClass('underline', 'decoration-dashed', 'active:no-underline');
  });

  it('should render link with disabled classes', () => {
    render(
      <Link
        disabled
        {...getTestProps('link')}
      >
        link
      </Link>
    );

    const linkElement = screen.getByTestId('link');
    expect(linkElement).toHaveClass('text-info-50/25', 'pointer-events-none');
  });

  it('should render link with custom className', () => {
    render(
      <Link
        className='custom-class'
        {...getTestProps('link')}
      >
        link
      </Link>
    );

    const linkElement = screen.getByTestId('link');
    expect(linkElement).toHaveClass('custom-class');
  });
});
