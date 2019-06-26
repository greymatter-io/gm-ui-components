import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

import { IconArrowRight } from "components/Glyphs";
import { keen } from "style/styleVariables";

import { Title, Detail, Wrapper, Header, Opener, Body } from "./components";

/**
 * A single Collapse item
 */
export default function Collapse({
  opener,
  title,
  detail,
  children,
  initiallyOpen,
  isOpen,
  onClick,
  ...props
}) {
  const contentRef = React.createRef();

  // If isOpen is undefined, we assume that the component is uncontrolled and initiate internal state variables
  let setIsOpen;
  if (isOpen === undefined) {
    [isOpen, setIsOpen] = useState(initiallyOpen);
  }

  let initialBodyHeight = isOpen ? "100%" : 0;
  const [bodyHeight, setBodyHeight] = useState(initialBodyHeight);

  const OpenerComponent = opener || <IconArrowRight />;

  const getHeight = () => {
    let contentNode = contentRef.current.children[0];
    let height = contentNode ? contentNode.getBoundingClientRect().height : 0;
    return height;
  };

  // The following effect only runs once on intial render in order to set the body height.
  // Otherwise our transition won't work in the case where isOpen=true on initial render.
  useEffect(() => {
    if (isOpen) {
      setBodyHeight(getHeight());
    }
  }, []);

  const toggleCollapse = e => {
    let contentHeight = 0;
    if (!isOpen) {
      contentHeight = getHeight();
    }
    setBodyHeight(contentHeight);
    typeof onClick === "function" ? onClick(e) : setIsOpen(!isOpen);
  };

  return (
    <Wrapper {...props}>
      <Header
        onClick={toggleCollapse}
        onKeyDown={e =>
          (e.keyCode === 13 || e.keyCode === 32) && toggleCollapse(e)
        }
      >
        <Opener tabIndex={0} isOpen={isOpen}>
          {OpenerComponent}
        </Opener>
        <Title>{title}</Title>
        <Detail>{detail}</Detail>
      </Header>
      <Body isOpen={isOpen} innerRef={contentRef} bodyHeight={bodyHeight}>
        {children}
      </Body>
    </Wrapper>
  );
}

Collapse.defaultProps = {
  initiallyOpen: false,
  theme: keen
};

Collapse.propTypes = {
  children: PropTypes.element.isRequired,
  detail: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),
  initiallyOpen: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
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
