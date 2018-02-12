import { injectGlobal } from "styled-components";

import { AppFooter } from "./AppFooter";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";
import Button from "./Button";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { Icon } from "./Icon";
import Tooltip from "./Tooltip";

import { FONT_GROUP_MAIN_TEXT } from "../style/styleVariables";

import "../style/fonts/Rubik";
import "../style/fonts/Metropolis";
import "../style/fonts/Source_Code_Pro";

injectGlobal`
*{
  box-sizing: border-box;
}
@font-face {
  font-family: ${FONT_GROUP_MAIN_TEXT};
}
body {
  font-family: ${FONT_GROUP_MAIN_TEXT};
}
`;

export {
  Checkbox,
  AppFooter,
  Icon,
  Input,
  Button,
  Breadcrumbs,
  BreadcrumbItem,
  Tooltip
};

export * from "./Glyphs";
