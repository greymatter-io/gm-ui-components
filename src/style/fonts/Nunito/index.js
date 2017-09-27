import { injectGlobal } from "styled-components";
import Nunito from "./Nunito-Regular.ttf";

injectGlobal`
@font-face {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  src: url(${Nunito});
}
`;
