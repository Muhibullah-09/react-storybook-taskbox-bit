import React from "react";
import { Provider } from "react-redux";
import store from "./redux/redux";

import PureInboxScreen from "./components/InboxScreen/InboxScreen";

function App() {
  return (
    <Provider store={store}>
      <PureInboxScreen />
    </Provider>
  );
}

export default App;
