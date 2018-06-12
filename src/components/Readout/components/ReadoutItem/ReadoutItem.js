import React from "react";
import { PropTypes } from "prop-types";

import ItemDisplay from "./components/ItemDisplay";
import ReadoutItemData from "./components/ReadoutItemData";
import ReadoutItemTitle from "./components/ReadoutItemTitle";
import ReadoutItemValue from "./components/ReadoutItemValue";
import ReadoutItemDetail from "./components/ReadoutItemDetail";

export default function ReadoutItem({ children, detail, icon, title, value }) {
  return (
    <ItemDisplay>
      <ReadoutItemData>
        <ReadoutItemTitle>
          {icon && icon()}
          {title || "—"}
        </ReadoutItemTitle>
        <ReadoutItemValue>{value || "—"}</ReadoutItemValue>
        {detail && <ReadoutItemDetail>{detail}</ReadoutItemDetail>}
        {children}
      </ReadoutItemData>
    </ItemDisplay>
  );
}

const readoutItemPropTypes = {
  children: PropTypes.element,
  detail: PropTypes.string,
  graphData: PropTypes.arrayOf(PropTypes.number),
  icon: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
};

export const ReadoutItemShape = PropTypes.shape(readoutItemPropTypes);
ReadoutItem.propTypes = readoutItemPropTypes;
