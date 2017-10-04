import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FONT_GROUP_MAIN_TEXT } from "../../style/fonts/fontVariables";
import BreadcrumbItem from "./BreadcrumbItem";

export const BreadcrumbsContainer = styled.ol`
  flex: 1 1 auto;
  display: flex;
  margin: 0;
  font-family: ${FONT_GROUP_MAIN_TEXT};
  padding: 0;
  flex-direction: row;
  height: inherit;
  align-items: stretch;
`;

export const Elipsis = styled.span`
  cursor: pointer;
  padding: 0 8px;
  &:before {
    content: "...";
  }
`;
class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCollapsed: false };
  }
  componentDidMount() {
    this.updateView(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.updateView(nextProps);
  }
  updateView = props => {
    const { crumbs, maxItems } = props;
    const childrenLen = crumbs.length;
    maxItems < childrenLen ? this.collapse() : this.expand();
  };
  collapse = () => this.setState({ isCollapsed: true });

  expand = () => this.setState({ isCollapsed: false });

  renderCollapsed = crumbs => {
    const elipsisItem = (
      <BreadcrumbItem key={1} item={"..."} expand={this.expand} />
    );
    const lastIndex = crumbs.length - 1;
    const collapsedArr = [
      <BreadcrumbItem key={0} item={crumbs[0]} />,
      elipsisItem,
      <BreadcrumbItem key={lastIndex} item={crumbs[lastIndex]} />
    ];
    return collapsedArr;
  };

  renderExpanded = crumbs => {
    return crumbs.map((item, i) => {
      return <BreadcrumbItem key={i} item={item} />;
    });
  };

  render() {
    const { crumbs, maxItems } = this.props;
    const { isCollapsed } = this.state;
    return (
      <BreadcrumbsContainer>
        {isCollapsed && crumbs.length > 2
          ? this.renderCollapsed(crumbs)
          : this.renderExpanded(crumbs)}
      </BreadcrumbsContainer>
    );
  }
}

export default Breadcrumbs;

Breadcrumbs.defaultProps = {
  maxItems: 10
};

Breadcrumbs.propTypes = {
  maxItems: PropTypes.number,
  crumbs: PropTypes.array.isRequired
};
