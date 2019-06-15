import React, { Component } from "react";

const AppContext = React.createContext();

export const AppContextConsumer = AppContext.Consumer;

class AppContextProvider extends Component {
  state = {
    title: "Hello World"
  };

  render() {
    return <AppContext.Provider value={this.state} />;
  }
}

export default AppContextProvider;
