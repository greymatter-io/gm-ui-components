import React from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";
import LoadingSpinner from "components/Spinner/components/LoadingSpinner";
import { IconAlertTriangle, IconInfo } from "components/Glyphs";
import { spacingScale } from "style/styleFunctions";


function GraphicStatusIndeterminate({isBlock}) {
  return (
    <LoadingSpinner size={isBlock ? spacingScale(5) : spacingScale(2)} />
  );
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

const Graphic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
`;

const Message = styled.span`
  grid-area: message;
  margin: auto 0 0;
  display: block;

  &:last-of-type {
    margin: auto 0;
  }
`;

const Detail = styled.span`
  display: block;
  grid-area: detail;
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_XS};
  margin: -1px 0 auto;
`;

const Wrap = styled.div`
  display: grid;
  grid-template-areas: "graphic body";
  align-items: center;
  justify-content: center;
  padding: ${spacingScale(2)};

  ${props =>
    props.isBlock &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      ${Graphic} {
        grid-area: graphic;
        font-size: ${spacingScale(5)};
        height: ${spacingScale(6)};
        width: ${spacingScale(6)};
      }
  `}

  ${props =>
    !props.isBlock &&
    css`
      ${Graphic} {
        font-size: ${spacingScale(2.5)};
        margin: ${spacingScale(0.25)};
      }
  `}
`;

const Body = styled.div`
  grid-area: body;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${props =>
    props.isBlock &&
    css`
      align-items: center;
      text-align: center;
  `}
`;

/**
 * Description of your component
 */
export default function Status({
  statusType,
  isBlock,
  progress,
  detail,
  message
}) {
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

Status.defaultProps = {
  statusType: "indeterminate",
  isBlock: false,
  progress: false
};

Status.propTypes = {
  isBlock: PropTypes.bool,
  statusType: PropTypes.oneOf(["info, indeterminate, warning, danger"]),
  message: PropTypes.string,
  detail: PropTypes.string,
}

Status.displayName = "Status";
