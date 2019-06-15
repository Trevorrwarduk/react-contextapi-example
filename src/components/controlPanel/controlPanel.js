import React from "react";

import { MdAddCircle } from "react-icons/md";
import {
  PanelContainer,
  ControlIcon
} from "../../components/sharedStyles/sharedStyles";

const ControlPanel = () => {
  return (
    <PanelContainer>
      <ControlIcon>
        <MdAddCircle />
      </ControlIcon>
    </PanelContainer>
  );
};

export default ControlPanel;
