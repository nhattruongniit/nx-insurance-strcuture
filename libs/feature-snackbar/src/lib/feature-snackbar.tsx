import * as React from 'react';
import { SnackbarProvider } from 'notistack';

import './feature-snackbar.module.css';

import { DesignSystemSnackbar } from '@nx-insurance-structure/design-system/snackbar';


/* eslint-disable-next-line */
export interface FeatureSnackbarProps {
  children: React.ReactNode
}

export function FeatureSnackbar({ children }: FeatureSnackbarProps) {
  return (
    <SnackbarProvider
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      maxSnack={3}
    >
      {children}
      <DesignSystemSnackbar />
    </SnackbarProvider>
  );
}
