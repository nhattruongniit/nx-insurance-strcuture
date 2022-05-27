import { render } from '@testing-library/react';

import DesignSytemTable from './design-sytem-table';

describe('DesignSytemTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DesignSytemTable />);
    expect(baseElement).toBeTruthy();
  });
});
