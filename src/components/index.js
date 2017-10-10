import { Footer } from "./Footer";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { injectGlobal } from "styled-components";
import { FONT_GROUP_MAIN_TEXT } from "../style/fonts/fontVariables";

import "../style/fonts/Rubik";
import "../style/fonts/Nunito";
import "../style/fonts/Source_Code_Pro";

injectGlobal`
@font-face {
  font-family: ${FONT_GROUP_MAIN_TEXT};

}
body {
    font-family: ${FONT_GROUP_MAIN_TEXT};
}
`;

export { Checkbox, Footer, Input, Button, Breadcrumbs, BreadcrumbItem };
