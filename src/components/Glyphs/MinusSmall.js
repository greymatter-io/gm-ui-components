import React from "react"
import Icon from "../Icon";

export default function MinusSmall(props) {
  return (
    <Icon {...props} glyphName="MinusSmall">
      <polygon
        id="MinusSmall"
        fill="#000000"
        fillRule="nonzero"
        points="5.99999997 11.25 5.99999997 12.75 18 12.75 18 11.25"
      />
    </Icon>
  );
}

MinusSmall.displayName = "MinusSmall";
