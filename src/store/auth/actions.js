import { createAction } from "@reduxjs/toolkit";

const ACTION_PREFIX = "auth";

export const loginSick = createAction(`${ACTION_PREFIX}/loginSick`);

export const signOut = createAction(`${ACTION_PREFIX}/signOut`);

export const subscribeEvent = createAction(`${ACTION_PREFIX}/subscribeEvent`);
