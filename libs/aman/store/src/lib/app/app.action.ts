/* eslint-disable @typescript-eslint/no-explicit-any */
export const IAppActionTypes = {
  SET_LOADING: 'APP/SET_LOADING',
  SET_DIALOG: 'APP/SET_DIALOG',
  ENQUEUE_SNACKBAR: 'APP/ENQUEUE_SNACKBAR',
  REMOVE_SNACKBAR: 'APP/REMOVE_SNACKBAR',
};


export const enqueueSnackbarAction = (notification: { key: any; message: any; variant: any; }) => {
  return {
    type: IAppActionTypes.ENQUEUE_SNACKBAR,
    payload: {
      key: notification.key || new Date().getTime() + Math.random(),
      message: notification.message,
      variant: notification.variant || 'success',
    },
  };
};

export const removeSnackbar = (key: string | number | undefined) => ({
  type: IAppActionTypes.REMOVE_SNACKBAR,
  payload: key,
});
