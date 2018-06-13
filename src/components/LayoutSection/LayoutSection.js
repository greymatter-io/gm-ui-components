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
  stretchContent: PropTypes.bool,
  stretchSection: PropTypes.bool,
  title: PropTypes.string.isRequired
};

/**
 * Section of a static dashboard, complete with header and icon
 * @param {Object} props - refer to propTypes
 */

function LayoutSection({
  children,
  title,
  icon,
  stretchContent = false,
  stretchSection = false
}) {
  return (
    <LayoutSectionWrap stretchSection={stretchSection}>
      {title && (
        <Header>
          {icon && <SectionIcon>{icon()}</SectionIcon>}
          <SectionTitle>{title}</SectionTitle>
        </Header>
      )}
      <SectionContent stretchContent={stretchContent}>
        {children}
      </SectionContent>
    </LayoutSectionWrap>
  );
}

export default LayoutSection;
