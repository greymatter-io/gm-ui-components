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
  isOpen: controlledIsOpen,
  onClick,
  ...props
}) {
  const contentRef = React.createRef();

  let [isOpen, setIsOpen] = useState(initiallyOpen);

  // Use either the controlledIsOpen prop from the consumer if provided, or the internal isOpen state.
  const isOpenController =
    controlledIsOpen !== undefined ? controlledIsOpen : isOpen;

  let initialBodyHeight = isOpenController ? "100%" : 0;
  const [bodyHeight, setBodyHeight] = useState(initialBodyHeight);

  const OpenerComponent = opener || <IconArrowRight />;

  // The following effect runs when the isOpenController variable changes to set a height for the css transition
  useEffect(() => {
    let height = 0;
    if (isOpenController) {
      let contentNode = contentRef.current.children[0];
      height = contentNode ? contentNode.getBoundingClientRect().height : 0;
    }
    setBodyHeight(height);
  }, [isOpenController]);

  const onChangeHandler = e => {
    // If an onClick handler was provided, call it
    if (typeof onClick === "function") onClick(e);
    // If no controlled isOpen prop was passed in, we assume the component is controlled locally
    // and call setIsOpen to toggle local state
    if (controlledIsOpen === undefined) setIsOpen(!isOpenController);
  };

  return (
    <Wrapper {...props}>
      <Header
        onClick={onChangeHandler}
        onKeyDown={e =>
          (e.keyCode === 13 || e.keyCode === 32) && onChangeHandler()
        }
      >
        <Opener tabIndex={0} isOpen={isOpenController}>
          {OpenerComponent}
        </Opener>
        <Title>{title}</Title>
        <Detail>{detail}</Detail>
      </Header>
      <Body
        isOpen={isOpenController}
        innerRef={contentRef}
        bodyHeight={bodyHeight}
      >
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
