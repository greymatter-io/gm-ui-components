import React from "react";
import Icon from "../Icon";

export default function ArrowDownSmall(props) {
  return (
    <Icon {...props} glyphName="ArrowDownSmall">
      <polygon
        id="ArrowDownSmall"
        transform="translate(12.000000, 13.000000) rotate(90.000000) translate(-12.000000, -13.000000) "
        points="9.99999999 9.99999999 14 13 9.99999999 16"
      />
    </Icon>
  );
}

ArrowDownSmall.displayName = "ArrowDownSmall";
