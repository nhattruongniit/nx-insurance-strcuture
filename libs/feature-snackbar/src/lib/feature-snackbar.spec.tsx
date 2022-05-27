import { render } from '@testing-library/react';

import FeatureSnackbar from './feature-snackbar';

describe('FeatureSnackbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureSnackbar />);
    expect(baseElement).toBeTruthy();
  });
});
