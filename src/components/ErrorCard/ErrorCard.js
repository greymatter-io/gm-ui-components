import React from "react";
import { PropTypes } from "prop-types";

import ErrorBox from "./components/ErrorBox";
import ErrorMessage from "./components/ErrorMessage";
import ErrorDetail from "./components/ErrorDetail";
import ErrorGraphic from "./components/ErrorGraphic";
import ErrorInfo from "./components/ErrorInfo";

/**Stateless functional React component that renders the error message box
 * Takes an error message and returns error message box
 * @param {string} errorMsg
 * @param {function} icon
 * @returns react component
 */
const ErrorCard = ({ message = "Error", detail, orientation, ...props }) => {
  return (
    <ErrorBox orientation={orientation}>
      <ErrorGraphic orientation={orientation} />
      <ErrorInfo>
        <ErrorMessage>{message}</ErrorMessage>
        <ErrorDetail>{detail}</ErrorDetail>
      </ErrorInfo>
    </ErrorBox>
  );
};

ErrorCard.propTypes = {
  detail: PropTypes.string,
  message: PropTypes.string,
  orientation: PropTypes.oneOf(["vertical", "horizontal"])
};

ErrorCard.displayName = "ErrorCard";

export default ErrorCard;
