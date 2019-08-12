import React from "react";

import { create } from "react-test-renderer";

import ControlPanel from "../../components/controlPanel/controlPanel";
import PanelOne from "../../components/panelOne/panelOne";
import PanelTwo from "../../components/panelTwo/panelTwo";
import PanelThree from "../../components/panelThree/panelThree";

import {
  Container,
  StyledRow,
  StyledCol,
  Panel,
  Title
} from "../../components/sharedStyles/sharedStyles";

import { AppContext } from "../../HOC/ContextAPI/AppContext/AppContext";
import context from "../../__mocks__/AppContextMock";

import HomePage from "./HomePage";
import { h3FontSize } from "@smooth-ui/core-sc";

describe("<PanelOne> ", () => {
  let renderedComponent;
  let testInstance;

  beforeEach(() => {
    renderedComponent = create(
      <AppContext.Provider value={context}>
        <HomePage />
      </AppContext.Provider>
    );
    testInstance = renderedComponent.root;
  });

  it("should test the Panel Snapshot", () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it("should check the page title", () => {
    const h3Chk = testInstance.findAllByType("h3");

    expect(h3Chk).toHaveLength(1);

    expect(h3Chk[0].children[0]).toEqual("Home Page");
  });

  it("should check the page is built correctly", () => {
    expect(testInstance.findAllByType(Container)).toHaveLength(1);
    expect(testInstance.findAllByType(StyledRow)).toHaveLength(7);
    expect(testInstance.findAllByType(StyledCol)).toHaveLength(13);
    expect(testInstance.findAllByType(Panel)).toHaveLength(4);
    expect(testInstance.findAllByType(Title)).toHaveLength(4);
    expect(testInstance.findAllByType(ControlPanel)).toHaveLength(1);
    expect(testInstance.findAllByType(PanelOne)).toHaveLength(1);
    expect(testInstance.findAllByType(PanelTwo)).toHaveLength(1);
    expect(testInstance.findAllByType(PanelThree)).toHaveLength(1);
  });

  it("Should check the Titles are correct", () => {
    const titleChk = testInstance.findAllByType(Title);

    expect(titleChk).toHaveLength(4);

    expect(titleChk[0].children[0].props.children).toEqual("Control Panel");
    expect(titleChk[1].children[0].props.children).toEqual("Panel One");
    expect(titleChk[2].children[0].props.children).toEqual("Panel Two");
    expect(titleChk[3].children[0].props.children).toEqual("Panel Three");
  });
});
