import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { keen } from "style/theme";
import GlobalStyles from "style/GlobalStyles";

function StoryContainer({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}

StoryContainer.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.object
};

StoryContainer.defaultProps = {
  theme: keen
};

export default StoryContainer;
