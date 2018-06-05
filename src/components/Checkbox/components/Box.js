import styled from "styled-components";

import { COLOR_BRAND_PRIMARY } from "style/styleVariables";

const Box = styled.input.attrs({
  type: "checkbox"
})`
  appearance: none;
  background-color: #fafafa;
  border: 1px solid ${COLOR_BRAND_PRIMARY};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 6px;
  height: 8px;
  width: 8px;
  position: relative;
  border-radius: 3px;
  &:checked {
    &:after {
      content: "\u2714";
      font-size: 10px;
      position: absolute;
      top: 0px;
      left: 2px;
      color: ${COLOR_BRAND_PRIMARY};
    }
  }
`;

export default Box;
