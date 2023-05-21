import { createAction } from '@reduxjs/toolkit';

const ACTION_PREFIX_TOASTS = 'toasts';

export const addToast = createAction(`${ACTION_PREFIX_TOASTS}/addToast`);
export const removeToast = createAction(`${ACTION_PREFIX_TOASTS}/removeToast`);
