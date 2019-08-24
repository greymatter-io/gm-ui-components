import React from "react";
import { PropTypes } from "prop-types";
import LoadingSpinner from "components/Spinner/components/LoadingSpinner";
import {
  IconAlertTriangle,
  IconInfo,
  IconCheckcircleChecked
} from "components/Glyphs";
import { spacingScale } from "style/styleFunctions";
import { Body } from "./components/Body";
import { Wrap } from "./components/Wrap";
import { Detail } from "./components/Detail";
import { Message } from "./components/Message";
import { Graphic } from "./components/Graphic";

function GraphicStatusIndeterminate({ isBlock }) {
  return <LoadingSpinner size={isBlock ? spacingScale(5) : spacingScale(2)} />;
}

function GraphicStatusSuccess() {
  return <IconCheckcircleChecked fillOpacity="0" borderWidth="2px" />;
}

function GraphicStatusInfo() {
  return <IconInfo fillOpacity="0" borderWidth="2px" />;
}

function GraphicStatusError() {
  return <IconAlertTriangle fillOpacity="1" borderWidth="0" />;
}

function GraphicStatusWarning() {
  return <IconAlertTriangle fillOpacity="0" borderWidth="2px" />;
}

/**
 * Description of your component
 */
export default function Status({
  statusType,
  isBlock,
  detail,
  message,
  graphic
}) {
  let statusVisual = "";
  let statusVisualColor = "";

  switch (statusType) {
    case "info":
      statusVisual = <GraphicStatusInfo />;
      statusVisualColor = ({ theme }) => theme.COLOR_INTENT_INFO;
      break;
    case "progress":
      statusVisual = <IconAlertTriangle />;
      statusVisualColor = ({ theme }) => theme.COLOR_INTENT_SUCCESS;
      break;
    case "warning":
      statusVisual = <GraphicStatusWarning />;
      statusVisualColor = ({ theme }) => theme.COLOR_INTENT_WARNING;
      break;
    case "error":
      statusVisual = <GraphicStatusError />;
      statusVisualColor = ({ theme }) => theme.COLOR_INTENT_DANGER;
      break;
    case "success":
      statusVisual = <GraphicStatusSuccess />;
      statusVisualColor = ({ theme }) => theme.COLOR_INTENT_SUCCESS;
      break;
    default:
      statusVisual = <GraphicStatusIndeterminate isBlock={isBlock} />;
      statusVisualColor = ({ theme }) => theme.COLOR_INTENT_SUCCESS;
  }

  return (
    <Wrap isBlock={isBlock}>
      <Graphic color={statusVisualColor}>
        {graphic ? graphic : statusVisual}
      </Graphic>
      <Body isBlock={isBlock}>
        {message && <Message>{message}</Message>}
        {detail && <Detail>{detail}</Detail>}
      </Body>
    </Wrap>
  );
}

GraphicStatusIndeterminate.propTypes = {
  isBlock: PropTypes.bool
};

Status.defaultProps = {
  statusType: "indeterminate",
  isBlock: false
};

Status.propTypes = {
  detail: PropTypes.string,
  graphic: PropTypes.oneOf([PropTypes.node, PropTypes.func]),
  isBlock: PropTypes.bool,
  message: PropTypes.string,
  statusType: PropTypes.oneOf([
    "info",
    "indeterminate",
    "warning",
    "danger",
    "success"
  ])
};

Status.displayName = "Status";
