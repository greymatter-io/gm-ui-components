import React from "react";
import styled from "styled-components";

const BreadcrumbsContainer = styled.ol`
flex: 1 1 auto;
display: flex;
margin: 0;
padding: 0;
flex-direction: row;
height: inherit;
align-items: stretch;
`;

/**
 * Stateless functional React component that renders its children
 * @returns JSX.Element
 */
export default function Breadcrumbs({ children }) {
    return (
      <BreadcrumbsContainer>
        {children.map(crumb =>{
            console.log(crumb)
        })}
      </BreadcrumbsContainer>
    );
  }
  
