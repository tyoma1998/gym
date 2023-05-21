import { createReducer } from "@reduxjs/toolkit";
import { deepClone } from "helpers/functions";
import * as actions from "./actions";

export const initialState = {
  isLoading: false,
  user: {
    role: "",
    firstName: "",
    lastName: "",
    infoList: [],
    login: "",
    password: "",
    id: "",
  },
  eventActive: {},
  clientList: [
    {
      role: "isClient",
      firstName: "Андрей",
      lastName: "Петряков",
      login: "User",
      password: "123456",
      subscription: "6 месяцев",
      startSubscription: "15 декабря 2022 года",
      endsSubscription: "15 июня 2023 года",
      id: "123",
    },
  ],

  isAuthorized: false,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder

    .addCase(actions.loginSick, (state, action) => {
      const sickPeople = action?.payload ?? {};
      return {
        ...state,
        user: sickPeople,
        isAuthorized: true,
      };
    })
    .addCase(actions.subscribeEvent, (state, action) => {
      const eventData = action?.payload ?? {};
      const { userId, eventId } = eventData;

      const eventActive = deepClone(state.eventActive || {});

      if (!eventActive[eventId] || eventActive[eventId].length === 0) {
        eventActive[eventId] = [userId];
      } else {
        console.log(eventActive[eventId].includes(userId.toString()));
        if (eventActive[eventId].includes(userId.toString())) {
          eventActive[eventId] = eventActive[eventId].filter(
            (item) => item !== userId.toString()
          );
        } else {
          eventActive[eventId] = [...eventActive[eventId], userId];
        }
      }

      return {
        ...state,
        eventActive,
      };
    })

    .addCase(actions.signOut, (state) => {
      return {
        ...state,
        user: {
          role: "",
          firstName: "",
          lastName: "",
          infoList: [],
          login: "",
          password: "",
          id: "",
        },
        isAuthorized: false,
      };
    });
});
