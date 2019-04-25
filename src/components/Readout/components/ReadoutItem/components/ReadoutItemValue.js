import styled from "styled-components";
import { keen } from "style/styleVariables";

const ReadoutItemValue = styled.span`
  font-size: ${props => props.theme.FONT_SIZE_HERO};
  word-break: break-all;
  margin: 0;
  line-height: 1.2;
  min-height: 1em;
`;

ReadoutItemValue.defaultProps = {
  theme: keen
};

export default ReadoutItemValue;
