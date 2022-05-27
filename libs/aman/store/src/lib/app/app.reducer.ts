/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAppActionTypes } from './app.action';

const initialState = {
  isLoading: false,
  notifications: {},
};

export const appReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case IAppActionTypes.ENQUEUE_SNACKBAR: {
      const { key, message, variant } = payload;
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [key]: {
            key,
            message,
            variant,
          },
        },
      };
    }
    case IAppActionTypes.REMOVE_SNACKBAR: {
      const newNotfi: any = { ...state.notifications };
      delete newNotfi[payload];
      return {
        ...state,
        notifications: newNotfi,
      };
    }
    default:
      return state;
  }
};

