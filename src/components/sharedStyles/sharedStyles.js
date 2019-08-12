import styled from "styled-components";
import { Row, Col } from "@smooth-ui/core-sc";

// This page loads various sub components to which the Context will enable interaction

// COLORS
const COLOR = {
  PRIMARY: "#123456",
  MAINBACK: "rgba(0, 0, 22, 0.1)",
  HIGHLIGHT: "rgba(0, 0, 0, 0.3)",
  DARKBACK: "rgba(20, 20, 200, 1)"
};

const Container = styled.div`
  position: absolute;
  top: 1px;
  left: 1px
  right: 1px;
  bottom: 1px;
  background: ${COLOR.MAINBACK};
  padding 5px;
`;
const StyledRow = styled(Row)`
  padding: 7px;
`;

const StyledCol = styled(Col)`
  posiiton: relative;
`;
const Panel = styled.div`
  background: rgba(255, 255, 255, 1);
  border: 1px solid ${COLOR.HIGHLIGHT};
  box-shadow: 2px 2px ${COLOR.HIGHLIGHT};
  border-radius: 0px;
  min-height: 75px;
  padding: 10px;
`;

const PanelContainer = styled.div`
position: relative;
  top: 1px;
  left: 1px
  right: 1px;
  bottom: 1px;
  padding 5px;
`;

const Title = styled.h1`
  font-size: 1em;
  margin-top: 0px;
  text-decoration: underline;
  color: ${COLOR.PRIMARY};
`;

const ControlIcon = styled.button`
  display: inline-flex;
  align-items: center;
  height: 35px;
  width: 35px;
  font-size: 25px;
  margin: 0 10px;
  border: 1px solid ${COLOR.DARKBACK};
  cursor: pointer;
  background: transparent;
  transition-duration: 0.2s;
  &:hover {
    background-color: ${COLOR.DARKBACK};
    color: rgba(20, 200, 20, 1);
  }
`;

export {
  COLOR,
  Container,
  StyledRow,
  StyledCol,
  Panel,
  PanelContainer,
  Title,
  ControlIcon
};
