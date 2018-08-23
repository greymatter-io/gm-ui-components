import { keyframes } from "styled-components";

export const spinGradient = keyframes`
  0% {
    background-position: -100% -100%;
    transform: rotate(0)
  }
  100% {
    background-position: 100% 100%;
    transform: rotate(calc(360deg * 16))
  }
`;

export default spinGradient;