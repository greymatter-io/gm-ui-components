import React from "react";
import styled from "styled-components";
import { FONT_GROUP_MAIN_TEXT } from "../../style/fonts/fontVariables";

const BreadcrumbsContainer = styled.ol`
flex: 1 1 auto;
display: flex;
margin: 0;
font-family: ${FONT_GROUP_MAIN_TEXT};
padding: 0;
flex-direction: row;
height: inherit;
align-items: stretch;
`;

/**
 * Stateless functional React component that render its children
 * @returns JSX.Element
 */
export default function Breadcrumbs({ children }) {
    return (
      <BreadcrumbsContainer>
        {children}
      </BreadcrumbsContainer>
    );
  }
  
