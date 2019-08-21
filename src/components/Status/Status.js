import React from "react";
import { PropTypes } from "prop-types";
import LoadingSpinner from "components/Spinner/components/LoadingSpinner";
import { IconAlertTriangle, IconInfo } from "components/Glyphs";
import { spacingScale } from "style/styleFunctions";
import { Body } from "./components/Body";
import { Wrap } from "./components/Wrap";
import { Detail } from "./components/Detail";
import { Message } from "./components/Message";
import { Graphic } from "./components/Graphic";

function GraphicStatusIndeterminate({ isBlock }) {
  return <LoadingSpinner size={isBlock ? spacingScale(5) : spacingScale(2)} />;
}

function GraphicStatusInfo() {
  return (
    <IconInfo
      fillOpacity="0"
      borderWidth="2px"
      borderColor={({ theme }) => theme.COLOR_INTENT_INFO}
    />
  );
}

function GraphicStatusError() {
  return (
    <IconAlertTriangle
      fillOpacity="1"
      borderWidth="0"
      fillColor={({ theme }) => theme.COLOR_INTENT_DANGER}
    />
  );
}

function GraphicStatusWarning() {
  return (
    <IconAlertTriangle
      fillOpacity="0"
      borderWidth="2px"
      borderColor={({ theme }) => theme.COLOR_INTENT_WARNING}
    />
  );
}

/**
 * Description of your component
 */
export default function Status({ statusType, isBlock, detail, message }) {
  let statusVisual = "";

  switch (statusType) {
    case "info":
      statusVisual = <GraphicStatusInfo />;
      break;
    case "progress":
      statusVisual = <IconAlertTriangle />;
      break;
    case "warning":
      statusVisual = <GraphicStatusWarning />;
      break;
    case "error":
      statusVisual = <GraphicStatusError />;
      break;
    default:
      statusVisual = <GraphicStatusIndeterminate isBlock={isBlock} />;
  }

  return (
    <Wrap isBlock={isBlock}>
      <Graphic>{statusVisual}</Graphic>
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
  isBlock: PropTypes.bool,
  message: PropTypes.string,
  statusType: PropTypes.oneOf(["info", "indeterminate", "warning", "danger"])
};

Status.displayName = "Status";
