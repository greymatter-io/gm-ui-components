import styled from "styled-components";
import { COLOR_BRAND_A, RADIUS_05, COLOR_BACKGROUND_A } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const Color = props => props.theme.COLOR_BRAND_A || COLOR_BRAND_A;
const CheckColor = props => props.theme.COLOR_BACKGROUND_A || COLOR_BACKGROUND_A;
const Radius = props => props.theme.RADIUS_05 || RADIUS_05;

const Box = styled.input.attrs({
  type: "checkbox"
})`
  box-shadow: inset 0 0 0 1px ${Color};
  font-size: ${spacingScale(2)};
  color: ${CheckColor};
  appearance: none;
  flex: 0 0 1em;
  height: 1em;
  width: 1em;
  position: relative;
  border-radius: ${Radius};
  display: flex;
  align-items: center;
  justify-content: center;

  &:checked {
    background: ${Color};

    &:after {
      content: '';
      width: 25%;
      height: 50%;
      border: 2px solid;
      border-radius: 1px;
      border-width: 0 2px 2px 0;
      transform: translateY(-15%) rotate(45deg);
    }
  }
`;

export default Box;
