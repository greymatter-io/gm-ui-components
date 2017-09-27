import { injectGlobal } from "styled-components";
import SourceCodePro from "./SourceCodePro-Regular.ttf";

injectGlobal`
  @font-face {
  font-family: "SourceCodePro";
  src: url(${SourceCodePro});
  }
`;
