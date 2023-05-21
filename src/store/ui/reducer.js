import { createReducer } from '@reduxjs/toolkit';
import { deepClone } from 'helpers/functions';

import * as actions from './actions';

export const initialState = {
  toasts: {
    data: {},
    sortIds: [],
  },
};

export const uiReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.addToast, (state, action) => {
      const { title, text, delay, variant, isCloseButton, toastId } =
        action.payload;

      return {
        ...state,
        toasts: {
          ...state.toasts,
          data: {
            ...state.toasts.data,
            [toastId]: {
              id: toastId,
              title,
              text,
              delay,
              variant,
              isCloseButton,
            },
          },
          sortIds: [...state.toasts.sortIds, toastId],
        },
      };
    })
    .addCase(actions.removeToast, (state, action) => {
      const { toastId } = action.payload;

      const currentToastsData = deepClone(state.toasts.data);
      const currentToastsIds = state.toasts.sortIds.filter(
        (id) => toastId !== id
      );

      delete currentToastsData[toastId];

      return {
        ...state,
        toasts: {
          ...state.toasts,
          data: {
            ...currentToastsData,
          },
          sortIds: currentToastsIds,
        },
      };
    });
});

//
