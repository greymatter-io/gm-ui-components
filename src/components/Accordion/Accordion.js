import React, { useState } from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";

import { IconArrowRight } from "components/Glyphs";
import {
  keen,
  FONT_STACK_BASE,
  COLOR_KEYLINE,
  FONT_SIZE_XS
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

/**
 * Description of your component
 */

export default function Accordion({
  opener,
  title,
  detail,
  children,
  initiallyCollapsed,
  ...props
}) {
  const [collapsed, setCollapsed] = useState(initiallyCollapsed);
  const [bodyHeight, setBodyHeight] = useState(0);
  const OpenerComponent = opener || <IconArrowRight />;
  const bodyRef = React.createRef();

  return (
    <Wrapper {...props}>
      <Header>
        <Opener
          collapsed={collapsed}
          onClick={() => {
            let contentHeight = 0;
            if (collapsed) {
              contentHeight = bodyRef.current.children[0].getBoundingClientRect()
                .height;
            }
            setBodyHeight(contentHeight);
            setCollapsed(!collapsed);
          }}
        >
          {OpenerComponent}
        </Opener>
        <Title>{title}</Title>
        <Detail>{detail}</Detail>
      </Header>
      <Body collapsed={collapsed} innerRef={bodyRef} bodyHeight={bodyHeight}>
        {children}
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  font-family: ${FONT_STACK_BASE};
  border-top: 1px solid ${COLOR_KEYLINE};
  padding: ${spacingScale(1)};
  height: 100%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${spacingScale(1)};
`;

const Body = styled.div`
  overflow: hidden;
  transition: all 0.5s ease;
  ${({ collapsed }) =>
    collapsed &&
    css`
      height: 0px;
    `};
  height: ${({ bodyHeight }) => bodyHeight}px;
`;

const Opener = styled.div`
  cursor: pointer;

  ${({ collapsed }) =>
    !collapsed &&
    css`
      transform: rotate(90deg);
    `};
`;

const Title = styled.div`
  margin-right: auto;
`;

const Detail = styled.div`
  font-size: ${FONT_SIZE_XS};
  text-transform: uppercase;
`;

Accordion.defaultProps = {
  initiallyCollapsed: true,
  theme: keen
};

Accordion.propTypes = {
  children: PropTypes.node,
  detail: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),
  initiallyCollapsed: PropTypes.bool,
  opener: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),
  title: PropTypes.oneOf([PropTypes.node, PropTypes.element, PropTypes.string])
};

Accordion.displayName = "Accordion";
