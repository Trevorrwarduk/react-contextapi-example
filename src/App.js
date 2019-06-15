import React, { Component } from "react";

import AppContextProvider from "./HOC/ContextAPI/AppContext/AppContext";

import HomePage from "./containers/HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <HomePage />
      </AppContextProvider>
    );
  }
}

export default App;
