import { render } from '@testing-library/react';

import AmanAuthStore from './aman-auth-store';

describe('AmanAuthStore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AmanAuthStore />);
    expect(baseElement).toBeTruthy();
  });
});
