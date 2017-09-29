import React from "react";
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
    this.state = { isTruncated: false };
  }
  componentDidMount() {
    this.updateView(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.updateView(nextProps);
  }
  updateView = props => {
    const { children, maxItems } = props;
    const childrenLen = React.Children.count(children);
    maxItems < childrenLen ? this.truncate() : this.expand();
  };
  truncate = () => this.setState({ isTruncated: true });

  expand = () => this.setState({ isTruncated: false });

  renderTruncated = children => {
    const elipsisItem = (
      <BreadcrumbItem key={1}>
        <Elipsis onClick={this.expand} />
      </BreadcrumbItem>
    );
    const truncatedArr = [
      children[0],
      elipsisItem,
      children[children.length - 1]
    ];
    return truncatedArr;
  };

  render() {
    const { children, maxItems } = this.props;
    const { isTruncated } = this.state;
    return (
      <BreadcrumbsContainer>
        {isTruncated && children.length > 2 ? (
          this.renderTruncated(children)
        ) : (
          children
        )}
      </BreadcrumbsContainer>
    );
  }
}

export default Breadcrumbs;
