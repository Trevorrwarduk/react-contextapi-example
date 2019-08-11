import React from "react";

import { create } from "react-test-renderer";

import { MdAddCircle } from "react-icons/md";
import {
  PanelContainer,
  ControlIcon,
  StyledRow,
  StyledCol
} from "../sharedStyles/sharedStyles";

import { AppContext } from "../../HOC/ContextAPI/AppContext/AppContext";
import context from "../../__mocks__/AppContextMock";

import PanelTwo from "./panelTwo";

describe("<PanelOne> ", () => {
  let renderedComponent;
  let testInstance;

  beforeEach(() => {
    renderedComponent = create(
      <AppContext.Provider value={context}>
        <PanelTwo />
      </AppContext.Provider>
    );
    testInstance = renderedComponent.root;
  });

  it("should test the Panel Snapshot", () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it("should check the correct style elements are displayed", () => {
    const panelChk = testInstance.findAllByType(PanelContainer);
    const styRowChk = testInstance.findAllByType(StyledRow);
    const styColChk = testInstance.findAllByType(StyledCol);
    const iconChk = testInstance.findAllByType(MdAddCircle);

    expect(panelChk).toHaveLength(1);
    expect(styRowChk).toHaveLength(1);
    expect(styColChk).toHaveLength(2);
    expect(iconChk).toHaveLength(1);

    // Check the text displayed
    expect(styColChk[1].children[0].props.children).toEqual("Panel Two");
  });

  it("should check the correct icon is displayed and the function is called", () => {
    const contIconChk = testInstance.findAllByType(ControlIcon);

    expect(contIconChk).toHaveLength(1);

    contIconChk[0].props.onClick();

    expect(context.updateTitles).toHaveBeenCalled();
    expect(context.updateTitles).toHaveBeenCalledWith(2);
  });
});
