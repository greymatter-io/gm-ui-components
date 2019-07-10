import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  * + * {
    margin-left: ${spacingScale(0.5)};
  }
`;

ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
