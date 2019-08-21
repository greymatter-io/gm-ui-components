import React from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";
import LoadingSpinner from "components/Spinner/components/LoadingSpinner";
import { IconAlertTriangle, IconInfo } from "components/Glyphs";
import { spacingScale } from "style/styleFunctions";


function GraphicStatusIndeterminate({...props}) {
  
  const blockStyle = {
    border: "10px solid blue"
  }
  
  const size = props.isBlock == true ? spacingScale(6) : spacingScale(2);
  const IndeterminateSpinner = styled(LoadingSpinner)`
    ${props => props.isBlock && css`
      border: 1px solid blue;
      opacity: 0.5;
    `}
  `

  return (
    <IndeterminateSpinner />
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
        margin: ${spacingScale(-2)};
      }
  `}

  ${props =>
    !props.isBlock &&
    css`
      ${Graphic} {
        font-size: ${spacingScale(2.5)};
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

let statusVisual = <LoadingSpinner />;

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

  if (progress === true) {
    statusVisual = <LoadingSpinner progress={progress} />;
  }

  return (
    <Wrap isBlock={isBlock}>
      <Graphic isBlock={isBlock}>{statusVisual}</Graphic>
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

Status.displayName = "Status";
