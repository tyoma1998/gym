import { createAction } from '@reduxjs/toolkit';

const ACTION_PREFIX = 'travelers';

export const resetState = createAction(`${ACTION_PREFIX}/resetState`);
