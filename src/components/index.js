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

import { FONT_STACK_BASE } from "style/styleVariables";

import * as Glyphs from "./Glyphs";

injectGlobal`
* {
  box-sizing: border-box;
  font-family: ${FONT_STACK_BASE};
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
