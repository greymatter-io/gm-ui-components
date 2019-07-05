import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

import { IconArrowRight } from "components/Glyphs";
import { keen } from "style/theme";

import { Title, Detail, Wrapper, Header, Opener, Body } from "./components";

/**
 * A single Collapse item
 */
class Collapse extends React.Component {
  state = {
    isOpen: false
  };

  static getDerivedStateFromProps({ isOpen }) {
    // If this.props.isOpen is not undefined, that means the component is controlled and we should mirror props in local state.
    // This way we only have to keep track of one isOpen variable.
    return isOpen === undefined ? {} : { isOpen };
  }

  componentDidMount() {
    this.setBodyHeight();
  }

  componentDidUpdate() {
    this.setBodyHeight();
  }

  setBodyHeight = () => {
    let height = this.props.initiallyOpen ? "100%" : 0;
    // If isOpen is true, find the height of the content and set the body component to a pixel value.
    // This is necessary for our css transition.
    if (this.state.isOpen) {
      let contentNode =
        this.contentRef.current && this.contentRef.current.children[0];
      height = contentNode
        ? contentNode.getBoundingClientRect().height
        : height;
    }
    this.contentRef.current.style.height = `${height}px`;
  };

  onChangeHandler = e => {
    // If an onClick handler was provided, call it
    if (typeof this.props.onClick === "function") this.props.onClick(e);
    // If this.props.isOpen is undefined, the component is uncontrolled and we should set local state.
    if (this.props.isOpen === undefined)
      this.setState({ isOpen: !this.state.isOpen });
  };

  contentRef = React.createRef();

  render() {
    let {
      opener,
      title,
      detail,
      children,
      initiallyOpen,
      onClick,
      ...props
    } = this.props;

    let { isOpen } = this.state;

    const OpenerComponent = opener || <IconArrowRight />;

    return (
      <Wrapper {...props}>
        <Header
          onClick={this.onChangeHandler}
          onKeyDown={e =>
            (e.keyCode === 13 || e.keyCode === 32) && this.onChangeHandler(e)
          }
        >
          <Opener tabIndex={0} isOpen={isOpen}>
            {OpenerComponent}
          </Opener>
          <Title>{title}</Title>
          <Detail>{detail}</Detail>
        </Header>
        <Body isOpen={isOpen} innerRef={this.contentRef}>
          {children}
        </Body>
      </Wrapper>
    );
  }
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

export default Collapse;
