import { render } from '@testing-library/react';

import AmanAuthFeature from './aman-auth-feature';

describe('AmanAuthFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AmanAuthFeature />);
    expect(baseElement).toBeTruthy();
  });
});
