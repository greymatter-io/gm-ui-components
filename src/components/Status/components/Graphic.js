import styled from "styled-components";

export const Graphic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: ${props => props.color};
  letter-spacing: unset;

  svg {
    letter-spacing: normal;
  }
`;
