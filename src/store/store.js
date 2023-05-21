import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createMigrate, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { migrations } from "./migrations";
import { rootReducer } from "./rootReducer";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  version: 4,
  migrate: createMigrate(migrations, { debug: false }),
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware({
  onError: (error) => {
    // NotificationsService.throwNotification({
    //   title: "Error!",
    //   text: error,
    //   variant: "danger",
    // });
  },
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
