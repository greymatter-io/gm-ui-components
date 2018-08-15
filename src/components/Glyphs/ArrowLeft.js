import React from "react";
import Icon from "../Icon";

export default function ArrowLeft(props) {
  return (
    <Icon {...props} glyphName="ArrowLeft">
      <polygon
        id="Mask"
        fill="#000000"
        fillRule="nonzero"
        transform="translate(11.500000, 12.000000) scale(-1, 1) translate(-11.500000, -12.000000) "
        points="8.99999999 7.99999998 14 12 8.99999999 16"
      />
    </Icon>
  );
}

ArrowLeft.displayName = "ArrowLeft";
