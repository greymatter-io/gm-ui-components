import { injectGlobal } from "styled-components";
import Rubik from "./Rubik-Regular.ttf";

injectGlobal`
@font-face {
    font-family: "Rubik";
    src: url(${Rubik});
  }
`;
