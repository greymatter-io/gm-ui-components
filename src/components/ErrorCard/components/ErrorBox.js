import styled from "styled-components";

const ErrorBox = styled.div`
  align-items: center;
  cursor: default;
  display: flex;
  flex: 1;
  height: auto;
  justify-content: center;
  user-select: none;
  font-family: ${props => props.theme.FONT_STACK_BASE};
`;

export default ErrorBox;
