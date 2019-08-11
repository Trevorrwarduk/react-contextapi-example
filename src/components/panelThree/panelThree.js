import React from "react";

import { MdAddCircle } from "react-icons/md";
import {
  PanelContainer,
  ControlIcon,
  StyledRow,
  StyledCol
} from "../sharedStyles/sharedStyles";

import { AppContextConsumer } from "../../HOC/ContextAPI/AppContext/AppContext";

const PanelThree = () => {
  return (
    <PanelContainer>
      <AppContextConsumer>
        {appContext => (
          <StyledRow>
            <StyledCol xs={12} sm={12} md={6}>
              <ControlIcon>
                <MdAddCircle onClick={() => appContext.updateTitles(3)} />
              </ControlIcon>
            </StyledCol>
            <StyledCol xs={12} sm={12} md={6}>
              {appContext.state.panelThreeTitle}
            </StyledCol>
          </StyledRow>
        )}
      </AppContextConsumer>
    </PanelContainer>
  );
};

export default PanelThree;
