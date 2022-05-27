import { render } from '@testing-library/react';

import DesignSystemSnackbar from './design-system-snackbar';

describe('DesignSystemSnackbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DesignSystemSnackbar />);
    expect(baseElement).toBeTruthy();
  });
});
