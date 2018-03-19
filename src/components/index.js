import { injectGlobal } from "styled-components";

import { AppFooter } from "./AppFooter";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import Icon from "./Icon";
import Tooltip from "./Tooltip";
import Tab from "./Tab";
import TabGroup from "./TabGroup";

import { FONT_GROUP_MAIN_TEXT } from "../style/styleVariables";

import * as Glyphs from "./Glyphs";

import "../style/fonts/Rubik";
import "../style/fonts/Metropolis";
import "../style/fonts/Source_Code_Pro";

injectGlobal`
* {
  box-sizing: border-box;
}
@font-face {
  font-family: ${FONT_GROUP_MAIN_TEXT};
}
body {
  font-family: ${FONT_GROUP_MAIN_TEXT};
}
`;

const library = {
  ...Glyphs,
  Checkbox,
  AppFooter,
  Icon,
  Input,
  Button,
  ButtonGroup,
  Breadcrumbs,
  BreadcrumbItem,
  Tooltip,
  Tab,
  TabGroup
};

export default library;
