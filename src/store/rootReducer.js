import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { uiReducer, initialState as uiInitialState } from 'store/ui/reducer';
import {
  authReducer,
  initialState as authInitialState,
} from 'store/auth/reducer';

import * as rootActions from 'store/rootActions';

export const appReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

const initialState = {
  ui: uiInitialState,
  auth: authInitialState,
};

export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(rootActions.resetState, () => initialState)
    .addDefaultCase(appReducer);
});
