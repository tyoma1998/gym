import { Provider } from "react-redux";
import { store, persistor } from "store/store";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import RouterCustom from "router/Router";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterCustom />
      </PersistGate>
    </Provider>
  );
}

export default App;
