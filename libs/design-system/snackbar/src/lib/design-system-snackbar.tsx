import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import './design-system-snackbar.module.css';

/* eslint-disable-next-line */
export interface DesignSystemSnackbarProps {
  notifications?: any
}

let displayed: any[] = [];

export function DesignSystemSnackbar({ notifications }: DesignSystemSnackbarProps) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const storeDisplayed = (id: string | number) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: string | number) => {
    displayed = [...displayed.filter((key) => id !== key)];
  };

  React.useEffect(() => {
    Object.values(notifications).forEach((ele: any) => {
      // do nothing if snackbar is already displayed
      if (displayed.includes(ele.key)) return;

      // display snackbar using notistack
      enqueueSnackbar(ele.message, {
        key: ele.key,
        variant: ele.variant,
        onExited: (_, keySnackBar) => {
          // dispatch(removeSnackbar(keySnackBar));
          removeDisplayed(keySnackBar);
        },
      });

      // keep track of snackbars that we've displayed
      storeDisplayed(ele.key);
    });
  }, [notifications, enqueueSnackbar, dispatch]);

  return null;
}
