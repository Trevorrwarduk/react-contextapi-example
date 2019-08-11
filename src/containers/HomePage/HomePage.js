import React, { Component } from "react";

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

class HomePage extends Component {
  render() {
    return (
      <Container>
        <StyledRow>
          <StyledCol xs={12} sm={12} md={12} lg={12} gutter={1}>
            <h3>{this.context.state.homePageTitle}</h3>
          </StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol xs={12} sm={12} md={12} lg={12} gutter={1}>
            <Panel>
              <Title>Control Panel</Title>
              <ControlPanel />
            </Panel>
          </StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol xs={12} sm={12} md={3} lg={4} gutter={1}>
            <Panel>
              <Title>Panel One</Title>
              <PanelOne />
            </Panel>
          </StyledCol>
          <StyledCol xs={12} sm={12} md={4} lg={4} gutter={1}>
            <Panel>
              <Title>Panel Two</Title>
              <PanelTwo />
            </Panel>
          </StyledCol>
          <StyledCol xs={12} sm={12} md={4} lg={4} gutter={1}>
            <Panel>
              <Title>Panel Three</Title>
              <PanelThree />
            </Panel>
          </StyledCol>
        </StyledRow>
      </Container>
    );
  }
}
HomePage.contextType = AppContext;

export default HomePage;
