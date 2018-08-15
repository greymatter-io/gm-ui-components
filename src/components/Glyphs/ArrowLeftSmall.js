import React from "react";
import Icon from "../Icon";

export default function ArrowLeftSmall(props) {
  return (
    <Icon {...props} glyphName="ArrowLeftSmall">
      <polygon
        id="ArrowLeftSmall"
        fill="#000000"
        fillRule="nonzero"
        transform="translate(11.000000, 12.000000) scale(-1, 1) translate(-11.000000, -12.000000) "
        points="8.99999999 8.99999999 13 12 8.99999999 15"
      />
    </Icon>
  );
}

ArrowLeftSmall.displayName = "ArrowLeftSmall";
