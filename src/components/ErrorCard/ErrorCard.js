import React from "react";
import { PropTypes } from "prop-types";

import ErrorBox from "./components/ErrorBox";
import ErrorMessage from "./components/ErrorMessage";
import ErrorDetail from "./components/ErrorDetail";
import ErrorGraphic from "./components/ErrorGraphic";

/**Stateless functional React component that renders the error message box
 * Takes an error message and returns error message box
 * @param {string} errorMsg
 * @param {function} icon
 * @returns react component
 */
const ErrorCard = ({ errorMsg = "Error", errorDetail, ...props }) => {
  return (
    <ErrorBox {...props}>
      <ErrorGraphic />
      <ErrorMessage>{errorMsg}</ErrorMessage>
      <ErrorDetail>{errorDetail}</ErrorDetail>
    </ErrorBox>
  );
};

ErrorCard.propTypes = {
  errorDetail: PropTypes.string,
  errorMsg: PropTypes.string
};

ErrorCard.displayName = "ErrorCard";

export default ErrorCard;
