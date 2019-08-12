import React from "react";

import { create } from "react-test-renderer";

import HomePage from "./containers/HomePage/HomePage";

import { AppContext } from "./HOC/ContextAPI/AppContext/AppContext";
import context from "./__mocks__/AppContextMock";

import App from "./App";

describe("<App> ", () => {
  let renderedComponent;
  let testInstance;

  beforeEach(() => {
    renderedComponent = create(
      <AppContext.Provider value={context}>
        <App />
      </AppContext.Provider>
    );
    testInstance = renderedComponent.root;
  });

  it("should test the Panel Snapshot", () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it("should check that the Home Page is loaded", () => {
    const homeChk = testInstance.findAllByType(HomePage);

    expect(homeChk).toHaveLength(1);
  });
});
