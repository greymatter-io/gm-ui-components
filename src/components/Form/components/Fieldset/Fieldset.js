import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";

const Fieldset = styled.fieldset`
  border: 1px solid ${props => props.theme.COLOR_KEYLINE};
  padding: ${spacingScale(2)};
  border-radius: ${props => props.theme.RADIUS_1};
`;

export default Fieldset;
