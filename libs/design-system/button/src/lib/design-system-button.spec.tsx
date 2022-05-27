import { render } from '@testing-library/react';

import DesignSystemButton from './design-system-button';

describe('DesignSystemButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DesignSystemButton />);
    expect(baseElement).toBeTruthy();
  });
});
