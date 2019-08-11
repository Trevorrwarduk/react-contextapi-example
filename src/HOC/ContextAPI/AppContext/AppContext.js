import React, { Component } from "react";

export const AppContext = React.createContext();

export const AppContextConsumer = AppContext.Consumer;

class AppContextProvider extends Component {
  titles = {
    homePage: [
      "Home Page",
      "Panel One Selected",
      "Panel Two Selected",
      "Panel Three Selected"
    ],
    controlPanel: [
      "Control Panel",
      "Panel One Control!",
      "Panel Two Control!",
      "Panel Three Control!"
    ],
    panelOne: [
      "Panel One",
      "Panel One Displaying itself",
      "Panel Two On Panel One!",
      "Panel Three On Panel One!"
    ],
    panelTwo: [
      "Panel Two",
      "Panel One On Panel Two",
      "Panel Two Displaying itself",
      "Panel Three On Panel Two"
    ],
    panelThree: [
      "Panel Three",
      "Panel One On Panel Three",
      "Panel Two On Panel Three",
      "Panel Three Displaying itself"
    ]
  };
  state = {
    homePageTitle: this.titles.homePage[0],
    controlPaneltitle: this.titles.controlPanel[0],
    panelOneTitle: this.titles.panelOne[0],
    panelTwoTitle: this.titles.panelTwo[0],
    panelThreeTitle: this.titles.panelThree[0]
  };

  updateTitlesFunc = inId => {
    this.setState({
      homePageTitle: this.titles.homePage[inId],
      controlPaneltitle: this.titles.controlPanel[inId],
      panelOneTitle: this.titles.panelOne[inId],
      panelTwoTitle: this.titles.panelTwo[inId],
      panelThreeTitle: this.titles.panelThree[inId]
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          updateTitles: this.updateTitlesFunc
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
