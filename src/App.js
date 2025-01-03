import React from "react";
import Nav from "./components/Nav";
import Side from "./components/Side";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Nav />
        <div className="flex">
          <Side />
          <Main />
        </div>
      </Provider>
    </div>
  );
}

export default App;
