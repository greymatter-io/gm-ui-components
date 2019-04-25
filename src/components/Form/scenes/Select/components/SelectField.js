import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { formInteractionStyles } from "../../../components/InputFieldInteractionStyles";
import { keen } from "style/styleVariables";

const BORDER_WIDTH = 1;
const CHEVRON_ICON_DEFAULT = props =>
  `"data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.155 12.784l2.47-2.47a.75.75 0 0 1 1.06 1.061l-3.53 3.53-3.53-3.53a.75.75 0 0 1 1.06-1.06l2.47 2.469z' fill='` +
  props.theme.COLOR_CONTENT +
  `' fill-rule='nonzero'/%3E%3C/svg%3E"`;

const SelectField = styled.select`
  ${formInteractionStyles};
  height: calc(${spacingScale(4)} - ${BORDER_WIDTH * 2}px);
  border-radius: calc(${props => props.theme.RADIUS_05} + ${BORDER_WIDTH}px);
  border: ${BORDER_WIDTH}px solid ${props => props.theme.COLOR_KEYLINE};
  padding: ${spacingScale(0.5)} ${spacingScale(1)};
  color: ${props => props.theme.COLOR_CONTENT};
  font-family: ${props => props.theme.FONT_STACK_BASE};
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  background: ${props => props.theme.COLOR_BACKGROUND_B};
  position: relative;
  box-sizing: border-box;
  line-height: 1.5;
  transition: all 0.15s ease;
  user-select: auto;
  flex: 1 1 auto;
  appearance: none;
  background-image: url(${CHEVRON_ICON_DEFAULT});
  background-position: right center;
  background-repeat: no-repeat;

  &::placeholder {
    color: ${props => props.theme.COLOR_CONTENT};
    transition: inherit;
    opacity: ${props => props.theme.OPACITY_50};
  }

  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 10px;
    height: 10px;
    border: 2px solid red;
  }
`;

SelectField.defaultProps = {
  theme: keen
};

export default SelectField;
