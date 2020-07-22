import styled from "styled-components";
import { keen } from "style/theme";

const Fieldset = styled.fieldset`
  border: 1px solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_INPUT};
`;

Fieldset.defaultProps = {
  theme: keen
};

export default Fieldset;
