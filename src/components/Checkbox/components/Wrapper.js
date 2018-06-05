import styled from "styled-components";

const Wrapper = styled.label`
  display: flex;
  width: fit-content;
  align-items: center;
  ${props => getPosition(props.labelPosition)};
`;

function getPosition(position) {
  switch (position) {
    case "top":
      return `
          flex-direction: column-reverse;
        > input {
          margin-top: 8px;
        }
      `;
    case "bottom":
      return `
        flex-direction: column;
        > input {
          margin-bottom: 8px;
        }
      `;
    case "left":
      return `
        flex-direction: row-reverse;
        > input {
          margin-left: 8px;
        }
      `;
    case "right":
      return `
        flex-direction: row;
        > input {
          margin-right: 8px;
        }
      `;
    default:
      return `
       flex-direction: row-reverse;
        > input {
          margin-left: 8px;
        }
      `;
  }
}

export default Wrapper;
