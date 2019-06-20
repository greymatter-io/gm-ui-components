import React, { useState } from "react";
import { PropTypes } from "prop-types";

import { IconArrowRight } from "components/Glyphs";
import { keen } from "style/theme";

import { Title, Detail, Wrapper, Header, Opener, Body } from "./components";

/**
 * A single Collapse item
 */
export default function Collapse({
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
  const contentRef = React.createRef();

  const toggleCollapse = () => {
    let contentHeight = 0;
    if (collapsed) {
      let content = contentRef.current.children[0];
      contentHeight = content ? content.getBoundingClientRect().height : 0;
    }
    setBodyHeight(contentHeight);
    setCollapsed(!collapsed);
  };

  return (
    <Wrapper {...props}>
      <Header
        onClick={toggleCollapse}
        onKeyDown={e =>
          (e.keyCode === 13 || e.keyCode === 32) && toggleCollapse()
        }
      >
        <Opener tabIndex={0} collapsed={collapsed}>
          {OpenerComponent}
        </Opener>
        <Title>{title}</Title>
        <Detail>{detail}</Detail>
      </Header>
      <Body collapsed={collapsed} innerRef={contentRef} bodyHeight={bodyHeight}>
        {children}
      </Body>
    </Wrapper>
  );
}

Collapse.defaultProps = {
  initiallyCollapsed: true,
  theme: keen
};

Collapse.propTypes = {
  children: PropTypes.element.isRequired,
  detail: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),
  initiallyCollapsed: PropTypes.bool,
  opener: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ])
};

Collapse.displayName = "Collapse";
