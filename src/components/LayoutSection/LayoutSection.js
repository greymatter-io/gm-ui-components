import React from "react";
import { PropTypes } from "prop-types";

import LayoutSectionWrap from "./components/LayoutSectionWrap";
import Header from "./components/Header";
import SectionContent from "./components/SectionContent";
import SectionIcon from "./components/SectionIcon";
import SectionTitle from "./components/SectionTitle";

LayoutSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  className: PropTypes.string,
  icon: PropTypes.func,
  title: PropTypes.string.isRequired
};

/**
 * A Layout component that renders an html section with a header
 * @param {Object} props - refer to propTypes
 */
function LayoutSection({ children, title, icon, ...props }) {
  return (
    <LayoutSectionWrap {...props}>
      {title && (
        <Header>
          {icon && <SectionIcon>{icon()}</SectionIcon>}
          <SectionTitle>{title}</SectionTitle>
        </Header>
      )}
      <SectionContent>{children}</SectionContent>
    </LayoutSectionWrap>
  );
}

LayoutSection.displayName = "LayoutSection";

export default LayoutSection;
