import React from "react";

import Icon from "../Icon";

export default function Bullet(props) {
  return (
    <Icon {...props} glyphName="Bullet">
      <circle
         
        fillRule="nonzero"
        cx="12"
        cy="12"
        r="5.00000002"
      />
    </Icon>
  );
}

Bullet.displayName = "Bullet";
