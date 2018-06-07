import styled from "styled-components";

import Rotate360 from "./components/Rotate360";

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -30px;
  margin-left: -30px;
  width: 60px;
  height: 60px;
  font-size: 8px;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 0, 0, 0.2);
  border-right: 1.1em solid rgba(0, 0, 0, 0.2);
  border-bottom: 1.1em solid rgba(0, 0, 0, 0.2);
  border-left: 1.1em solid #000000;
  transform: translateZ(0);
  animation: ${Rotate360} 1.1s infinite linear;
  border-radius: 50%;
`;

export default Spinner;
