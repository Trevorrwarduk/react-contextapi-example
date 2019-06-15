import React, { Component } from "react";

import ControlPanel from "../../components/controlPanel/controlPanel";

import {
  Container,
  StyledRow,
  StyledCol,
  Panel,
  Title
} from "../../components/sharedStyles/sharedStyles";

class HomePage extends Component {
  render() {
    return (
      <Container>
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
              <Title>Panel 1</Title>
            </Panel>
          </StyledCol>
          <StyledCol xs={12} sm={12} md={4} lg={4} gutter={1}>
            <Panel>
              <Title>Panel 2</Title>
            </Panel>
          </StyledCol>
          <StyledCol xs={12} sm={12} md={4} lg={4} gutter={1}>
            <Panel>
              <Title>Panel 3</Title>
            </Panel>
          </StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol xs={12} sm={12} md={3} lg={3} gutter={1}>
            <Panel>
              <Title>Panel 4</Title>
            </Panel>
          </StyledCol>
          <StyledCol xs={12} sm={12} md={3} lg={3} gutter={1}>
            <Panel>
              <Title>Panel 5</Title>
            </Panel>
          </StyledCol>
          <StyledCol xs={12} sm={12} md={3} lg={3} gutter={1}>
            <Panel>
              <Title>Panel 6</Title>
            </Panel>
          </StyledCol>
          <StyledCol xs={12} sm={12} md={3} lg={3} gutter={1}>
            <Panel>
              <Title>Panel 7</Title>
            </Panel>
          </StyledCol>
        </StyledRow>
      </Container>
    );
  }
}

export default HomePage;
