import styled from "styled-components";


const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  * + * {
    margin-left: 0.5rem;
  }
`;

ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
